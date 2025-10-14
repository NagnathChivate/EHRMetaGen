




import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MessageList from "./MessageList";
import MessageDetail from "./MessageDetail";
import MessageModal from "./MessageModal";
import { Button, Modal, Form } from "react-bootstrap";

export default function Messages() {
  const primary = "rgb(38,113,206)";

  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [messages, setMessages] = useState({
    Inbox: [
      { id: 1, sender: "Arjuna Admin", subject: "Meeting Reminder", body: "Hi team, reminder about tomorrow's meeting.", date: "9:27 AM", read: false, starred: false },
      { id: 2, sender: "John Doe", subject: "Hi Bro, How are you?", body: "Hope you're well. Let's catch up soon!", date: "March 15", read: true, starred: false },
      { id: 3, sender: "Cendy Andrianto", subject: "Project Update", body: "Latest update on our project timeline.", date: "May 23", read: false, starred: true },
    ],
    Sent: [],
    Outbox: [],
    Draft: [],
    Trash: [],
  });

  const [selected, setSelected] = useState(null);
  const [showNew, setShowNew] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [replyType, setReplyType] = useState("");
  const [replyMsg, setReplyMsg] = useState(null);
  const [replyBody, setReplyBody] = useState("");

  const send = (newMsg) => {
    const id = Math.max(...Object.values(messages).flat().map((m) => m.id), 0) + 1;
    const msg = { ...newMsg, id, sender: "You", date: new Date().toLocaleString(), read: false, starred: false };
    setMessages((p) => ({ ...p, Sent: [...p.Sent, msg], Inbox: [...p.Inbox, msg] }));
    setShowNew(false);
  };

  const reply = (type, m) => {
    setReplyType(type);
    setReplyMsg(m);
    setReplyBody("");
    setShowReply(true);
  };

  const submitReply = (e) => {
    e.preventDefault();
    if (!replyBody) return;
    const id = Math.max(...Object.values(messages).flat().map((m) => m.id), 0) + 1;
    const subject = replyType === "forward" ? `Fwd: ${replyMsg.subject}` : `Re: ${replyMsg.subject}`;
    const r = { id, sender: "You", subject, body: replyBody, date: new Date().toLocaleString(), read: false, starred: false };
    setMessages((p) => ({ ...p, Sent: [...p.Sent, r], Inbox: [...p.Inbox, r] }));
    setShowReply(false);
    setSelected(null);
  };

  const deleteMsg = (folder, id) => {
    setMessages((p) => {
      const m = p[folder].find((x) => x.id === id);
      return { ...p, [folder]: p[folder].filter((x) => x.id !== id), Trash: m ? [...p.Trash, m] : p.Trash };
    });
    if (selected?.id === id) setSelected(null);
  };

  const toggleRead = (folder, id) => setMessages((p) => ({
    ...p,
    [folder]: p[folder].map((m) => m.id === id ? { ...m, read: !m.read } : m),
  }));

  const toggleStar = (folder, id) => setMessages((p) => ({
    ...p,
    [folder]: p[folder].map((m) => m.id === id ? { ...m, starred: !m.starred } : m),
  }));

  const filteredMessages = messages[activeFolder]?.filter(
    (m) => m.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
           m.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
           m.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ height: "100vh", display: "grid", gridTemplateRows: "64px 1fr", gridTemplateColumns: "1fr" }}>
      {/* Header */}
      <header style={{ gridRow: "1/2", gridColumn: "1/ -1", display: "flex", alignItems: "center", padding: "0 16px", background: "#fff", borderBottom: "1px solid #e5e7eb", zIndex: 2000 }}>
        <Button variant="light" onClick={() => setSidebarCollapsed(!sidebarCollapsed)} style={{ border: "none", padding: "8px", borderRadius: "50%" }}>
          <i className={sidebarCollapsed ? "bi bi-chevron-right" : "bi bi-list"} style={{ fontSize: "20px", color: primary }} />
        </Button>
        <h4 className="mb-0 fw-semibold ms-3" style={{ color: primary, cursor: "pointer" }} onClick={() => setActiveFolder("Inbox")}>
          {activeFolder}
        </h4>
        <div className="ms-auto d-flex align-items-center gap-3">
          <div className="position-relative" style={{ width: isMobile ? "200px" : "300px" }}>
            <Form.Control
              type="text"
              placeholder="Search mail"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderRadius: "30px", paddingLeft: "45px", border: "1px solid #ccc", height: "40px" }}
            />
            <i className="bi bi-search position-absolute" style={{ left: "16px", top: "50%", transform: "translateY(-50%)", color: primary, fontSize: "1.2rem" }} />
          </div>
          <Button style={{ background: primary, border: "none", padding: "8px 20px", borderRadius: "6px", color: "#fff", height: "40px" }} onClick={() => setShowNew(true)}>
            <i className="bi bi-pencil-square me-2" /> New
          </Button>
        </div>
      </header>


      {/* Body Grid */}
      <div style={{
        gridRow: "2/ -1",
        gridColumn: "1/ -1",
        display: "grid",
        gridTemplateColumns: isMobile ? "0 1fr" : sidebarCollapsed ? "70px 1fr" : "250px 1fr",
        transition: "grid-template-columns 0.3s ease"
      }}>




        {/* Sidebar */}
        <aside style={{
          position: isMobile ? "absolute" : "relative",
          top: isMobile ? "64px" : 0,
          left: 0,
          height: isMobile ? "calc(100vh - 64px)" : "100%",
          background: "#fff",
          borderRight: "1px solid #e5e7eb",
          overflowY: "auto",
          transform: isMobile ? sidebarCollapsed ? "translateX(-100%)" : "translateX(0)" : "none",
          transition: "transform 0.3s ease, width 0.3s ease",
          width: isMobile ? "250px" : undefined,
        }}>
          <Sidebar active={activeFolder} setActive={setActiveFolder} messages={messages} collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} />
        </aside>



        <main style={{ position: "relative", overflowY: "auto", background: "#f0f2f5" }}>
         
          <div className="d-flex justify-content-between align-items-center p-3 bg-white border-bottom">
            <div className="d-flex align-items-center gap-3">
              <Form.Check type="checkbox" label="All" />
              <Button variant="link" onClick={() => window.location.reload()} style={{ color: primary }}>
                <i className="bi bi-arrow-repeat" /> Reload
              </Button>
            </div>
            <div className="text-muted small">
              1–{filteredMessages?.length || 0} of {filteredMessages?.length || 0}
            </div>
          </div>

         
          <div style={{ flex: 1, padding: 0 }}>
            {selected ? (
              <MessageDetail message={selected} onBack={() => setSelected(null)} onAction={reply} />
            ) : (
              <MessageList
                messages={filteredMessages}
                onSelectMessage={setSelected}
                onReply={reply}
                onDelete={(id) => deleteMsg(activeFolder, id)}
                onToggleRead={(id) => toggleRead(activeFolder, id)}
                onToggleStar={(id) => toggleStar(activeFolder, id)}
              />
            )}
          </div>
        </main>
      </div>

      
      <MessageModal show={showNew} onClose={() => setShowNew(false)} onSubmit={send} />

    
      <Modal show={showReply} onHide={() => setShowReply(false)} centered>
        <Modal.Header closeButton style={{ background: primary, color: "#fff" }}>
          <Modal.Title>
            {replyType === "forward" ? "Forward" : replyType === "replyTo" ? "Reply All" : "Reply"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitReply}>
            <Form.Group className="mb-3">
              <Form.Label>To</Form.Label>
              <Form.Control readOnly defaultValue={replyMsg?.sender} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control readOnly defaultValue={replyType === "forward" ? `Fwd: ${replyMsg?.subject}` : `Re: ${replyMsg?.subject}`} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} value={replyBody} onChange={(e) => setReplyBody(e.target.value)} required style={{ borderRadius: "6px" }} />
            </Form.Group>
            <div className="text-end">
              <Button variant="secondary" className="me-2" style={{ borderRadius: "25px" }} onClick={() => setShowReply(false)}>
                Cancel
              </Button>
              <Button type="submit" style={{ background: primary, border: "none", color: "#fff", borderRadius: "25px", padding: "6px 25px" }}>
                Send
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
