import React from "react";
import { ListGroup } from "react-bootstrap";

export default function Sidebar({ active, setActive, messages }) {
  const folders = [
    { name: "Inbox", icon: "bi-inbox" },
    { name: "Sent", icon: "bi-send" },
    { name: "Outbox", icon: "bi-box-arrow-up" },
    { name: "Draft", icon: "bi-file-earmark-text" },
    { name: "Trash", icon: "bi-trash" },
  ];

  return (
    <div
      className="d-flex flex-column p-0 shadow-sm ht_100"
      style={{       
        backgroundColor: "white",
        borderRight: "1px solid #dee2e6",
      }}
    >
      <h5 className="text-center mb-4" style={{ color: "rgb(39, 135, 255)" }}>
        Messages
      </h5>
      <ListGroup variant="flush p-1">
        {folders.map((f) => {
          const unread = messages[f.name]?.filter((m) => !m.read).length || 0;
          return (
            <ListGroup.Item
              key={f.name}
              onClick={() => setActive(f.name)}
              className={`d-flex justify-content-between align-items-center gap-2 py-2 px-3 mb-2 rounded ${
                active === f.name
                  ? "text-white"
                  : "text-secondary"
              }`}
              style={{
                cursor: "pointer",
                transition: "0.3s",
                backgroundColor:
                  active === f.name ? "rgb(39, 135, 255)" : "transparent",
                border: active === f.name ? "none" : "1px solid #dee2e6",
              }}
            >
              <div>
                <i className={`bi ${f.icon} me-2`}></i>
                {f.name}
              </div>
              {unread > 0 && (
                <span
                  className="badge rounded-pill"
                  style={{
                    backgroundColor: "rgb(38, 113, 206)",
                    color: "white",
                  }}
                >
                  {unread}
                </span>
              )}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
