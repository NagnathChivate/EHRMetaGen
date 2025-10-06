




import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function MessageModal({ show, onClose, onSubmit }) {
  const [form, setForm] = useState({
    to: "",
    subject: "",
    body: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(form);
    setForm({ to: "", subject: "", body: "", attachment: null });
  };

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>Compose New Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To</Form.Label>
            <Form.Control
              name="to"
              value={form.to}
              onChange={handleChange}
              placeholder="Enter receiver email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter subject"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="body"
              value={form.body}
              onChange={handleChange}
              placeholder="Write your message..."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Attachment</Form.Label>
            <Form.Control type="file" name="attachment" onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" className="px-4" onClick={handleSubmit}>
          <i className="bi bi-send-fill me-2"></i> Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
