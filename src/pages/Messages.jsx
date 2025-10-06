
import React, { useState } from "react";
import MessageModal from "./MessageModal";
import MessageList from "./MessageList";
import Sidebar from "./Sidebar";
import { Container, Button } from "react-bootstrap";

export default function Messages() {
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [messages, setMessages] = useState({
    Inbox: [],
    Outbox: [],
    Sent: [],
    Draft: [],
  });
  const [showModal, setShowModal] = useState(false);

  const handleSendMessage = (newMessage) => {
    setMessages((prev) => ({
      ...prev,
      Sent: [...prev.Sent, newMessage],
    }));
    setShowModal(false);
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Sidebar active={activeFolder} setActive={setActiveFolder} />
      <Container fluid className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-semibold text-primary">{activeFolder}</h3>
          <Button
            variant="primary"
            className="rounded-pill px-4 shadow-sm"
            onClick={() => setShowModal(true)}
          >
            <i className="bi bi-pencil-square me-2"></i> New
          </Button>
        </div>
        <MessageList messages={messages[activeFolder]} />
      </Container>
      <MessageModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSendMessage}
      />
    </div>
  );
}
