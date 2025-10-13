import MessageDetail from "./MessageDetail";
import MessageList from "./MessageList";
import MessageModal from "./MessageModal";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Button, Container, Form, Modal } from "react-bootstrap";

export default function Messages() {
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [messages, setMessages] = useState({
    Inbox: [
      {
        id: 1,
        subject: "Meeting Reminder",
        to: "team@example.com",
        cc: "manager@example.com",
        body: "Hi team, just a reminder about tomorrow's meeting at 10 AM.",
        date: "2025-10-07 09:00 AM",
        read: false,
      },
      {
        id: 2,
        subject: "Patient Test Results",
        to: "dr.sneha@hospitalcare.com",
        cc: "",
        body: "CBC report for patient ID #245 is attached.",
        date: "2025-10-07 10:15 AM",
        read: false,
      },
      {
        id: 3,
        subject: "Project Update",
        to: "lead@example.com",
        cc: "",
        body: "Here’s the latest update on our project timeline.",
        date: "2025-10-07 08:30 AM",
        read: false,
      },
    ],
    Outbox: [],
    Sent: [],
    Draft: [],
    Trash: [],
  });

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyType, setReplyType] = useState("");
  const [replyMessage, setReplyMessage] = useState(null);
  const [replyBody, setReplyBody] = useState("");

  // 📨 Create + Send New Message
  const handleSendMessage = (newMessage) => {
    const id =
      Math.max(...Object.values(messages).flat().map((m) => m.id || 0), 0) + 1;
    const sentMsg = {
      ...newMessage,
      id,
      date: new Date().toLocaleString(),
      read: false,
    };

    setMessages((prev) => ({
      ...prev,
      Sent: [...prev.Sent, sentMsg],
      Inbox: [...prev.Inbox, sentMsg],
    }));

    setShowNewModal(false);
  };

  // 🔁 Reply or Forward Action
  const handleAction = (type, message) => {
    setReplyType(type);
    setReplyMessage(message);
    setShowReplyModal(true);
  };

  // ✉️ Submit Reply or Forward
  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (!replyBody.trim()) return;

    const id =
      Math.max(...Object.values(messages).flat().map((m) => m.id || 0), 0) + 1;
    const replyObj = {
      id,
      subject:
        replyType === "forward"
          ? `Fwd: ${replyMessage.subject}`
          : `Re: ${replyMessage.subject}`,
      to:
        replyType === "replyTo"
          ? `${replyMessage.to}, ${replyMessage.cc}`
          : replyMessage.to,
      body: replyBody,
      date: new Date().toLocaleString(),
      read: false,
    };

    setMessages((prev) => ({
      ...prev,
      Sent: [...prev.Sent, replyObj],
      Outbox: [...prev.Outbox, replyObj],
    }));

    setShowReplyModal(false);
    setReplyBody("");
  };

  // 🗑️ Delete Message
  const handleDelete = (folder, messageId) => {
    setMessages((prev) => {
      const msgToDelete = prev[folder].find((m) => m.id === messageId);
      if (!msgToDelete) return prev;
      return {
        ...prev,
        [folder]: prev[folder].filter((m) => m.id !== messageId),
        Trash: [...prev.Trash, msgToDelete],
      };
    });
    if (selectedMessage && selectedMessage.id === messageId)
      setSelectedMessage(null);
  };

  // 👁️ Toggle Read/Unread
  const toggleReadStatus = (folder, messageId) => {
    setMessages((prev) => ({
      ...prev,
      [folder]: prev[folder].map((m) =>
        m.id === messageId ? { ...m, read: !m.read } : m
      ),
    }));
  };

  const readCount = messages[activeFolder]?.filter((m) => m.read).length || 0;
  const unreadCount =
    messages[activeFolder]?.filter((m) => !m.read).length || 0;

  return (
    <div className="row m-0 ht_100">
     <section className="col-2 p-1 ht_100" >
          <Sidebar
                active={activeFolder}
                setActive={setActiveFolder}
                messages={messages}
              />
    </section>
    <section className="col-9 ht_100">
      <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-semibold" style={{ color: "rgb(38, 113, 206)" }}>
            {activeFolder}{" "}
            {activeFolder !== "Trash" && (
              <span className="text-secondary small ms-2">
                ({unreadCount} unread / {readCount} read)
              </span>
            )}
          </h3>

          {!selectedMessage && (
            <Button
              style={{
                backgroundColor: "rgb(38, 113, 206)",
                borderColor: "rgb(38, 113, 206)",
              }}
              className="rounded-pill px-4 shadow-sm"
              onClick={() => setShowNewModal(true)}
            >
              <i className="bi bi-pencil-square me-2"></i> New
            </Button>
          )}
        </div>

        {selectedMessage ? (
          <MessageDetail
            message={selectedMessage}
            onBack={() => setSelectedMessage(null)}
            onAction={handleAction}
          />
        ) : (
          <MessageList
            messages={messages[activeFolder]}
            onSelectMessage={setSelectedMessage}
            onReply={handleAction}
            onDelete={(id) => handleDelete(activeFolder, id)}
            onToggleRead={(id) => toggleReadStatus(activeFolder, id)}
            selectedMessage={selectedMessage}
          />
        )}
    </section>
      {/* ✉️ New Message Modal */}
      <MessageModal
        show={showNewModal}
        onClose={() => setShowNewModal(false)}
        onSubmit={handleSendMessage}
      />

      {/* 🔁 Reply / Forward Modal */}
      <Modal
        show={showReplyModal}
        onHide={() => setShowReplyModal(false)}
        centered
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "rgb(38, 113, 206)",
            color: "white",
          }}
        >
          <Modal.Title>
            {replyType === "replyTo"
              ? "Reply All"
              : replyType === "forward"
              ? "Forward Message"
              : "Reply"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleReplySubmit}>
            <Form.Group className="mb-3">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="text"
                value={
                  replyType === "replyTo"
                    ? `${replyMessage?.to}, ${replyMessage?.cc}`
                    : replyMessage?.to
                }
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                value={
                  replyType === "forward"
                    ? `Fwd: ${replyMessage?.subject}`
                    : `Re: ${replyMessage?.subject}`
                }
                readOnly
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={replyBody}
                onChange={(e) => setReplyBody(e.target.value)}
                placeholder="Type your reply..."
                required
              />
            </Form.Group>
            <div className="text-end mt-3">
              <Button
                variant="secondary"
                onClick={() => setShowReplyModal(false)}
                className="me-2"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                style={{
                  backgroundColor: "rgb(38, 113, 206)",
                  borderColor: "rgb(38, 113, 206)",
                }}
              >
                Send
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
