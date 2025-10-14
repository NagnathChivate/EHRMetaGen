








import React, { useState } from "react";
import { Form, Badge } from "react-bootstrap";

export default function MessageList({
  messages,
  onSelectMessage,
  onReply,
  onDelete,
  onToggleStar,
}) {
  const primary = "rgb(38,113,206)"; 
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header Row */}
      <div className="d-none d-md-flex header-row">
        <Form.Check type="checkbox" className="me-3" />
        <span style={{ width: 24, marginRight: 16 }}>★</span>
        <span style={{ flex: 1 }}>From</span>
        <span style={{ flex: 2 }}>Subject</span>
        <span style={{ width: 100, textAlign: "right" }}>Date</span>
        <span style={{ width: 120, textAlign: "center" }}>Actions</span>
      </div>

      {/* Message Rows */}
      {messages.map((msg) => {
        const isSelected = selectedId === msg.id;
        return (
          <div
            key={msg.id}
            className={`message-row ${isSelected ? "selected-row" : ""}`}
            onClick={() => {
              setSelectedId(msg.id);
              onSelectMessage(msg);
            }}
          >
            {/* Checkbox */}
            <Form.Check
              type="checkbox"
              className="me-3"
              onClick={(e) => e.stopPropagation()}
            />

           
            <i
              className={`bi ${msg.starred ? "bi-star-fill" : "bi-star"}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleStar(msg.id);
              }}
              title="Star"
            ></i>

            {/* From */}
            <div className="msg-from">{msg.sender}</div>

            {/* Subject + snippet */}
            <div className="msg-subject">
              <span>{msg.subject}</span>
              {msg.priority && (
                <Badge
                  bg={
                    msg.priority === "urgent"
                      ? "danger"
                      : msg.priority === "magazine"
                      ? "success"
                      : "info"
                  }
                  className="ms-1"
                >
                  {msg.priority}
                </Badge>
              )}
              <span className="d-none d-md-inline text-snippet">
                {msg.body.length > 60
                  ? `${msg.body.slice(0, 60)}...`
                  : msg.body}
              </span>
            </div>

            {/* Date */}
            <div className="msg-date">{msg.date}</div>

            {/* Hover Actions */}
            <div className="msg-actions" onClick={(e) => e.stopPropagation()}>
              <i className="bi bi-reply" onClick={() => onReply("reply", msg)} />
              <i
                className="bi bi-reply-all"
                onClick={() => onReply("replyTo", msg)}
              />
              <i
                className="bi bi-forward"
                onClick={() => onReply("forward", msg)}
              />
              <i
                className="bi bi-trash text-danger"
                onClick={() => onDelete(msg.id)}
              />
            </div>
          </div>
        );
      })}

     
      <style>
        {`
          .header-row {
            align-items: center;
            padding: 12px 16px;
            border-bottom: 2px solid #E5E7EB;
            background: #F9FAFB;
            font-weight: 600;
            color: #6B7280;
          }

          .message-row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding: 12px 16px;
            border-bottom: 1px solid #E5E7EB;
            background: #fff;
            cursor: pointer;
            transition: background 0.2s, box-shadow 0.2s;
            position: relative;
          }

          .message-row:hover {
            background: #EEF5FF;
            box-shadow: 0 0 4px rgba(38, 113, 206, 0.2);
          }

          .selected-row {
            background: #DCEAFF;
            border-left: 4px solid ${primary};
          }

          .message-row i {
            width: 24px;
            margin-right: 16px;
            font-size: 18px;
            color: #D1D5DB;
            cursor: pointer;
            transition: color 0.2s;
          }

          .message-row i.bi-star-fill {
            color: #FBBF24;
          }

          .msg-from {
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 500;
            color: #111827;
            font-size: 14px;
          }

          .msg-subject {
            flex: 2;
            display: flex;
            align-items: center;
            gap: 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 500;
            color: #111827;
            font-size: 14px;
          }

          .text-snippet {
            color: #6B7280;
            font-weight: 400;
            font-size: 13px;
          }

          .msg-date {
            width: 100px;
            text-align: right;
            color: #6B7280;
            font-weight: 400;
            font-size: 13px;
            margin-left: auto;
          }

          .msg-actions {
            display: flex;
            gap: 16px;
            margin-left: 16px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .message-row:hover .msg-actions {
            opacity: 1;
          }

          .msg-actions i {
            color: ${primary};
            font-size: 16px;
            cursor: pointer;
            transition: transform 0.2s, color 0.2s;
          }

          .msg-actions i:hover {
            transform: scale(1.2);
            color: ${primary};
          }

          .msg-actions i.text-danger:hover {
            color: #DC2626;
          }

          /* Mobile responsive */
          @media (max-width: 768px) {
            .message-row {
              flex-direction: column;
              align-items: flex-start;
              padding: 10px 12px;
            }

            .msg-from, .msg-subject, .msg-date {
              width: 100%;
              text-align: left;
            }

            .msg-actions {
              width: 100%;
              justify-content: flex-start;
              margin-left: 0;
              margin-top: 6px;
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
