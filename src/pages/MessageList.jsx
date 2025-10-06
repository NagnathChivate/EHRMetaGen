


import React from "react";
import { Card } from "react-bootstrap";

export default function MessageList({ messages }) {
  if (messages.length === 0)
    return (
      <div className="text-center text-muted py-5">
        <i className="bi bi-envelope-open fs-1 mb-3 d-block"></i>
        <p>No messages found</p>
      </div>
    );

  return (
    <div className="d-flex flex-column gap-3">
      {messages.map((msg, i) => (
        <Card key={i} className="shadow-sm border-0 rounded-3">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <h6 className="fw-bold text-primary">{msg.subject}</h6>
                <p className="mb-1 text-secondary">
                  <strong>To:</strong> {msg.to}
                </p>
                <p className="text-muted small mb-2">{msg.body}</p>
                {msg.attachment && (
                  <a
                    href={URL.createObjectURL(msg.attachment)}
                    download
                    className="text-decoration-none small"
                  >
                    <i className="bi bi-paperclip me-1"></i> Download Attachment
                  </a>
                )}
              </div>
              <div className="text-muted small">{new Date().toLocaleString()}</div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
