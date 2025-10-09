



import React from "react";
import { Button, Card } from "react-bootstrap";

export default function MessageDetail({ message, onBack, onAction }) {
  if (!message) return null;

  return (
    <Card
      className="shadow-sm border-0 rounded-4 p-4 mx-auto"
      style={{
        maxWidth: "800px",
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
   
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
        <h5
          className="fw-bold mb-0"
          style={{ color: "rgb(38, 113, 206)", wordBreak: "break-word" }}
        >
          {message.subject}
        </h5>
        <Button
          variant="secondary"
          onClick={onBack}
          className="rounded-pill px-3 py-1"
        >
          <i className="bi bi-arrow-left"></i> Back
        </Button>
      </div>

    
      <div className="mb-3">
        <p className="mb-1">
          <strong>To:</strong> {message.to}
        </p>
        {message.cc && (
          <p className="mb-1">
            <strong>CC:</strong> {message.cc}
          </p>
        )}
        <p
          className="text-muted mt-3"
          style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
        >
          {message.body}
        </p>
      </div>

      {/* Attachment Section */}
      {message.attachment && (
        <div className="mt-2">
          <a
            href={URL.createObjectURL(message.attachment)}
            download
            className="text-decoration-none small"
            style={{ color: "rgb(38, 113, 206)" }}
          >
            <i className="bi bi-paperclip me-1"></i> Download Attachment
          </a>
        </div>
      )}

    
      <div className="mt-4 text-end d-flex flex-wrap justify-content-end gap-2">
        <Button
          onClick={() => onAction("reply", message)}
          className="rounded-pill"
          style={{
            backgroundColor: "rgb(38, 113, 206)",
            borderColor: "rgb(38, 113, 206)",
          }}
        >
          <i className="bi bi-reply me-1"></i> Reply
        </Button>

        <Button
          onClick={() => onAction("replyTo", message)}
          className="rounded-pill"
          style={{
            backgroundColor: "rgb(38, 113, 206)",
            borderColor: "rgb(38, 113, 206)",
          }}
        >
          <i className="bi bi-reply-all me-1"></i> Reply All
        </Button>

        <Button
          onClick={() => onAction("forward", message)}
          className="rounded-pill"
          style={{
            backgroundColor: "rgb(38, 113, 206)",
            borderColor: "rgb(38, 113, 206)",
          }}
        >
          <i className="bi bi-forward me-1"></i> Forward
        </Button>
      </div>
    </Card>
  );
}




