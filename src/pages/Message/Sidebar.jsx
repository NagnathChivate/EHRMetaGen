


import React, { useState, useEffect } from "react";
import { ListGroup, Button } from "react-bootstrap";

export default function Sidebar({ active, setActive, messages, collapsed, onToggleCollapse }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const mobileSidebarStyle = isMobile
    ? {
      position: "fixed",
      top: 64,
      left: 0,
      width: 250,
      height: "calc(100vh - 64px)",
      zIndex: 2001,
      boxShadow: "1px 0 10px #0002",
      background: "#fff",
      borderRight: "1px solid rgb(38,113,206)",
      transition: "transform 0.3s ease",
      transform: collapsed ? "translateX(-100%)" : "translateX(0)",
      padding: "24px 16px",
    }
    : {
      background: "#fff",
      padding: "24px 16px",
      minHeight: "100vh",
      
      transition: "width 0.3s ease",
      width: collapsed ? "70px" : "240px",
      position: "relative",
    };

  const folders = [
    { name: "Inbox", icon: "bi-inbox" },
    { name: "Sent", icon: "bi-send" },
    { name: "Outbox", icon: "bi-box-arrow-up" },
    { name: "Draft", icon: "bi-file-earmark-text" },
    { name: "Trash", icon: "bi-trash" },
  ];

  return (
    <>
      {isMobile && !collapsed && (
        <div onClick={onToggleCollapse} style={{
          position: "fixed",
          top: 64,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#0005",
          zIndex: 2000,
        }} />
      )}
      <aside style={mobileSidebarStyle} className="sidebar shadow-sm">
        <Button
          variant="light"
          className="position-absolute"
          style={{
            top: "16px",
            right: !isMobile ? (collapsed ? "-40px" : "-45px") : "16px",
            left: isMobile ? "8px" : "unset",
            zIndex: 100,
            borderRadius: "50%",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={onToggleCollapse}
        >
          <i className={isMobile ? "bi bi-x" : collapsed ? "bi bi-chevron-right" : "bi bi-chevron-left"}
            style={{ color: "rgb(38,113,206)", fontSize: 18 }} />
        </Button>

        <div className="text-center mb-4" style={{ display: collapsed && !isMobile ? "none" : "block" }}>
          <div style={{
            width: 60,
            height: 60,
            borderRadius: 12,
            backgroundColor: "rgb(38,113,206)",
            color: "#fff",
            fontSize: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 12px",
            boxShadow: "0 3px 10px rgba(38,113,206,0.4)",
          }}>
            <i className="bi bi-mailbox" />
          </div>
          <h5 style={{ margin: 0, color: "rgb(38,113,206)", fontWeight: 600 }}>
            Messages
          </h5>
        </div>

        <ListGroup variant="flush">
          {folders.map(f => {
            const count = messages[f.name]?.length || 0;
            const unread = messages[f.name]?.filter(m => !m.read).length || 0;

            return (
              <ListGroup.Item
                key={f.name}
                onClick={() => setActive(f.name)}
                className="folder-item"
                style={{
                  display: "flex",
                  justifyContent: collapsed && !isMobile ? "center" : "space-between",
                  alignItems: "center",
                  padding: collapsed && !isMobile ? "12px 8px" : "12px 16px",
                  marginBottom: 6,
                  borderRadius: 8,
                  cursor: "pointer",
                  backgroundColor: active === f.name ? "rgb(38,113,206)" : "#fff",
                  color: active === f.name ? "#fff" : "#1f2937",
                  fontWeight: active === f.name ? 600 : 500,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  if (active !== f.name) e.currentTarget.style.backgroundColor = "#f0f6ff";
                }}
                onMouseLeave={e => {
                  if (active !== f.name) e.currentTarget.style.backgroundColor = "#fff";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <i className={`bi ${f.icon}`} style={{ fontSize: 18, color: active === f.name ? "#fff" : "#1f2937" }} />
                  {(!collapsed || isMobile) && <span>{f.name}</span>}
                </div>
                {(!collapsed || isMobile) && (
                  <>
                    {unread > 0 && f.name === "Inbox" && (
                      <span className="badge rounded-pill" style={{
                        backgroundColor: "rgb(38,113,206)",
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 600,
                        padding: "4px 10px",
                      }}>{unread}</span>
                    )}
                    {f.name !== "Inbox" && count > 0 && (
                      <span className="badge rounded-pill" style={{
                        backgroundColor: "#6b7280",
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 600,
                        padding: "4px 10px",
                      }}>{count}</span>
                    )}
                  </>
                )}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </aside>
    </>
  );
}
