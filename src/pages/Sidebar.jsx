


import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Sidebar({ active, setActive }) {
  const folders = [
    { name: "Inbox", icon: "bi-inbox" },
    { name: "Outbox", icon: "bi-box-arrow-up" },
    { name: "Sent", icon: "bi-send" },
    { name: "Draft", icon: "bi-file-earmark-text" },
  ];

  return (
    <div
      className="d-flex flex-column p-3 shadow-sm"
      style={{
        width: "230px",
        backgroundColor: "white",
        borderRight: "1px solid #dee2e6",
      }}
    >
      <h5 className="text-center text-primary mb-4">Messages</h5>
      <ListGroup variant="flush">
        {folders.map((f) => (
          <ListGroup.Item
            key={f.name}
            onClick={() => setActive(f.name)}
            className={`d-flex align-items-center gap-2 py-2 px-3 mb-2 rounded ${
              active === f.name ? "bg-primary text-white" : "text-secondary"
            }`}
            style={{ cursor: "pointer", transition: "0.3s" }}
          >
            <i className={`bi ${f.icon}`}></i>
            {f.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
