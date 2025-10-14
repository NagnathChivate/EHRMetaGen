



import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function MessageModal({ show, onClose, onSubmit, replyData }) {
  const [form, setForm] = useState({
    to: "",
    subject: "",
    body: "",
    attachment: null,
  });

  useEffect(() => {
    if (replyData) {
      setForm((prev) => ({
        ...prev,
        ...replyData,
      }));
    } else {
      setForm({ to: "", subject: "", body: "", attachment: null });
    }
  }, [replyData, show]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    if (!form.to || !form.subject || !form.body) {
      alert("Please fill all required fields!");
      return;
    }
    onSubmit(form);
    setForm({ to: "", subject: "", body: "", attachment: null });
  };

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static">
      
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "rgb(38, 113, 206)",
          color: "white",
        }}
      >
        <Modal.Title>
          {replyData ? "Reply Message" : "Compose New Message"}
        </Modal.Title>
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
              readOnly={!!replyData}
    className="form-control"
  style={{ borderRadius: "6px", padding: "8px" }}
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

          {!replyData && (
            <Form.Group className="mb-3">
              <Form.Label>Attachment</Form.Label>
              <Form.Control type="file" name="attachment" onChange={handleChange} />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>

      <Modal.Footer className="border-0">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>

     
        <Button
          style={{
            backgroundColor: "rgb(38, 113, 206)",
            borderColor: "rgb(38, 113, 206)",
    borderRadius: "25px",
    padding: "8px 25px",
    fontWeight: 500
          }}
          className="px-4"
          onClick={handleSubmit}
        >
          <i className="bi bi-send-fill me-2"></i> Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}









// import React, { useState, useEffect } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// export default function MessageModal({ show, onClose, onSubmit, replyData }) {
//   const [form, setForm] = useState({
//     to: "",
//     subject: "",
//     body: "",
//     attachment: null,
//   });

//   useEffect(() => {
//     if (replyData) {
//       setForm((prev) => ({
//         ...prev,
//         ...replyData,
//       }));
//     } else {
//       setForm({ to: "", subject: "", body: "", attachment: null });
//     }
//   }, [replyData, show]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = () => {
//     if (!form.to || !form.subject || !form.body) {
//       alert("Please fill all required fields!");
//       return;
//     }
//     onSubmit(form);
//     setForm({ to: "", subject: "", body: "", attachment: null });
//   };

//   const primary = "rgb(38,113,206)";

//   return (
//     <Modal show={show} onHide={onClose} centered backdrop="static">
//       <Modal.Header
//         closeButton
//         style={{
//           backgroundColor: primary,
//           color: "#fff",
//           borderTopLeftRadius: "12px",
//           borderTopRightRadius: "12px",
//           padding: "14px 20px",
//         }}
//       >
//         <Modal.Title>
//           {replyData ? "Reply Message" : "Compose New Message"}
//         </Modal.Title>
//       </Modal.Header>

//       <Modal.Body style={{ backgroundColor: "#f8f9fa", padding: "25px 20px" }}>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>To</Form.Label>
//             <Form.Control
//               name="to"
//               value={form.to}
//               onChange={handleChange}
//               placeholder="Enter receiver email"
//               readOnly={!!replyData}
//               style={{ borderRadius: "6px" }}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Subject</Form.Label>
//             <Form.Control
//               name="subject"
//               value={form.subject}
//               onChange={handleChange}
//               placeholder="Enter subject"
//               style={{ borderRadius: "6px" }}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Body</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={4}
//               name="body"
//               value={form.body}
//               onChange={handleChange}
//               placeholder="Write your message..."
//               style={{ borderRadius: "6px" }}
//             />
//           </Form.Group>

//           {!replyData && (
//             <Form.Group className="mb-3">
//               <Form.Label>Attachment</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="attachment"
//                 onChange={handleChange}
//                 style={{ borderRadius: "6px" }}
//               />
//             </Form.Group>
//           )}
//         </Form>
//       </Modal.Body>

//       <Modal.Footer className="border-0">
//         <Button
//           variant="secondary"
//           style={{ borderRadius: "25px", padding: "6px 20px" }}
//           onClick={onClose}
//         >
//           Cancel
//         </Button>
//         <Button
//           style={{
//             backgroundColor: primary,
//             border: "none",
//             color: "#fff",
//             borderRadius: "25px",
//             padding: "6px 25px",
//           }}
//           onClick={handleSubmit}
//         >
//           <i className="bi bi-send-fill me-2"></i> Send
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
