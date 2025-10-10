



import React from "react";
import { Card, Button } from "react-bootstrap";

export default function MessageList({
  messages,
  onSelectMessage,
  onReply,
  onDelete,
  onToggleRead,
}) {
  const primaryColor = "rgb(38, 113, 206)";

  return (
    <div className="container-fluid px-2">
      {messages.length === 0 ? (
        <p className="text-muted text-center mt-4">No messages found.</p>
      ) : (
        messages.map((msg) => (
          <Card
            key={msg.id}
            className={`mb-3 shadow-sm border-0 message-card ${
              msg.read ? "bg-light" : "bg-white"
            }`}
            onClick={() => onSelectMessage(msg)}
            style={{
              cursor: "pointer",
              borderRadius: "15px",
              transition: "0.3s",
            }}
          >
            <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
              
              <div className="flex-grow-1 mb-3 mb-md-0 me-md-3">
                <h6
                  className={`fw-bold mb-1 ${
                    msg.read ? "text-secondary" : "text-dark"
                  }`}
                >
                  {msg.subject}
                </h6>
                <p className="mb-1 text-secondary small">
                  To: {msg.to} {msg.cc && `| Cc: ${msg.cc}`}
                </p>
                <p className="mb-0 text-dark small">{msg.body.slice(0, 60)}...</p>
              </div>

             
              <div className="text-end d-flex flex-column align-items-end">
                <p className="text-muted small mb-1">{msg.date}</p>

                <div className="d-flex mb-2">
                  {onReply && (
                    <>
                      <i
                        className="bi bi-reply me-2"
                        title="Reply"
                        style={{ color: primaryColor }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onReply("reply", msg);
                        }}
                      ></i>
                      <i
                        className="bi bi-reply-all me-2"
                        title="Reply All"
                        style={{ color: primaryColor }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onReply("replyTo", msg);
                        }}
                      ></i>
                      <i
                        className="bi bi-forward me-2"
                        title="Forward"
                        style={{ color: primaryColor }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onReply("forward", msg);
                        }}
                      ></i>
                    </>
                  )}
                  {onDelete && (
                    <i
                      className="bi bi-trash text-danger"
                      title="Delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(msg.id);
                      }}
                    ></i>
                  )}
                </div>

                {onToggleRead && (
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleRead(msg.id);
                    }}
                    style={{
                      backgroundColor: msg.read ? "transparent" : primaryColor,
                      borderColor: primaryColor,
                      color: msg.read ? primaryColor : "white",
                      borderWidth: "1.5px",
                      borderRadius: "50px",
                      padding: "4px 12px",
                    }}
                  >
                    {msg.read ? "Mark Unread" : "Mark Read"}
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}





