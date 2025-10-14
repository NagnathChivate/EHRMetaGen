

import React from "react";
import { Button, Card } from "react-bootstrap";

export default function MessageDetail({ message, onBack, onAction }) {
  if (!message) return null;

  const primaryColor = "rgb(38,113,206)";

  return (
    <div
      className="d-flex justify-content-center align-items-start py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f3f8fc 70%, #e6f0fa 100%)",
      }}
    >
      <Card
        className="shadow mx-3 w-100"
        style={{
          borderRadius: "24px",
          maxWidth: "720px",
          background: "#fff",
          padding: "40px 24px",
          boxShadow: "0 6px 32px rgba(38,113,206,0.09)",
        }}
      >
        {/* Header Row */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
          <h4
            style={{
              color: primaryColor,
              fontWeight: 700,
              lineHeight: 1.2,
              wordBreak: "break-word",
              fontSize: "1.8rem",
              marginBottom: "12px",
            }}
          >
            {message.subject}
          </h4>
          <Button
            variant="outline-secondary"
            onClick={onBack}
            style={{
              borderRadius: 50,
              fontWeight: 600,
              fontSize: "15px",
              whiteSpace: "nowrap",
            }}
          >
            <i className="bi bi-arrow-left"></i> Back
          </Button>
        </div>

        {/* To / CC / Date */}
        <div
          className="d-flex flex-wrap align-items-center border-bottom pb-2 mb-3"
          style={{ color: "#384454", fontSize: "15px" }}
        >
          <span style={{ fontWeight: 500, color: primaryColor, marginRight: 18 }}>
            To: {message.to}
          </span>
          {message.cc && (
            <span style={{ color: "#727373", marginRight: 18 }}>
              CC: {message.cc}
            </span>
          )}
          <span
            className="ms-auto"
            style={{ color: "#6B7280", fontWeight: 400, fontSize: "13px" }}
          >
            {message.date}
          </span>
        </div>

        {/* Body */}
        <div
          style={{
            fontSize: "16px",
            color: "#222",
            background: "#f7fafd",
            padding: "20px",
            borderRadius: "12px",
            whiteSpace: "pre-line",
          }}
        >
          {message.body}
        </div>

        {/* Attachment */}
        {message.attachment && (
          <div className="mt-3 text-break">
            <a
              href={URL.createObjectURL(message.attachment)}
              download
              className="text-decoration-none"
              style={{
                color: primaryColor,
                fontWeight: 600,
                fontSize: "16px",
                wordBreak: "break-word",
              }}
            >
              <i className="bi bi-paperclip me-1"></i> Download Attachment
            </a>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-4 d-flex flex-wrap justify-content-end gap-2">
          <Button
            onClick={() => onAction("reply", message)}
            style={{
              background: primaryColor,
              border: "none",
              borderRadius: 25,
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px 28px",
              boxShadow: "0 2px 8px rgba(38,113,206,0.15)",
            }}
          >
            <i className="bi bi-reply me-1"></i> Reply
          </Button>

          <Button
            onClick={() => onAction("replyTo", message)}
            style={{
              background: primaryColor,
              border: "none",
              borderRadius: 25,
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px 28px",
              boxShadow: "0 2px 8px rgba(38,113,206,0.15)",
            }}
          >
            <i className="bi bi-reply-all me-1"></i> Reply All
          </Button>

          <Button
            onClick={() => onAction("forward", message)}
            style={{
              background: primaryColor,
              border: "none",
              borderRadius: 25,
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px 28px",
              boxShadow: "0 2px 8px rgba(38,113,206,0.15)",
            }}
          >
            <i className="bi bi-forward me-1"></i> Forward
          </Button>
        </div>
      </Card>
    </div>
  );
}
