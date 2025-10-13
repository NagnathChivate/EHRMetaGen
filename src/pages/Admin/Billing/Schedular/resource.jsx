import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function DoctorResourcePage() {
  const [resources, setResources] = useState([
    {
      id: 1,
      title: "Heart Disease Awareness",
      type: "PDF",
      link: "https://example.com/heart-awareness.pdf",
      description: "Guide on preventing heart diseases.",
      date: "2025-10-01",
    },
    {
      id: 2,
      title: "Diabetes Management Tips",
      type: "Video",
      link: "https://youtube.com/diabetes-tips",
      description: "Educational video for diabetic patients.",
      date: "2025-10-05",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    type: "PDF",
    link: "",
    description: "",
  });

  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  // handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // add or update resource
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.link) return;

    if (editingId) {
      setResources((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, ...formData } : item
        )
      );
      setEditingId(null);
    } else {
      setResources((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...formData,
          date: new Date().toISOString().split("T")[0],
        },
      ]);
    }

    setFormData({ title: "", type: "PDF", link: "", description: "" });
  };

  const handleEdit = (id) => {
    const item = resources.find((r) => r.id === id);
    setFormData(item);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setResources((prev) => prev.filter((r) => r.id !== id));
  };

  const filteredResources = resources.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h2 className="text-center text-primary mb-4">
        <i className="bi bi-folder2-open"></i> Doctor Resource Management
      </h2>

      {/* Upload Section */}
      <div className="card p-3 shadow-sm mb-4">
        <h5 className="mb-3">
          {editingId ? "Edit Resource" : "Add New Resource"}
        </h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-5">
              <label className="form-label">Resource Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Heart Disease Awareness"
                required
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Type</label>
              <select
                className="form-select"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option>PDF</option>
                <option>Video</option>
                <option>Article</option>
                <option>Image</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Link / File URL</label>
              <input
                type="text"
                className="form-control"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://example.com/resource.pdf"
                required
              />
            </div>

            <div className="col-md-12">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="2"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief description of the resource..."
              ></textarea>
            </div>
          </div>

          <div className="text-end mt-3">
            <button type="submit" className="btn btn-primary">
              {editingId ? "Update Resource" : "Add Resource"}
            </button>
          </div>
        </form>
      </div>

      {/* Search + Resource List */}
      <div className="card p-3 shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Available Resources</h5>
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Type</th>
                <th>Link</th>
                <th>Description</th>
                <th>Date Added</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> View
                    </a>
                  </td>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-outline-warning me-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredResources.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center text-muted">
                    No resources found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
