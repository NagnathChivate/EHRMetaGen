import React from "react";

export default function Resource() {
  return (
    <div>
      <h2>Resource</h2>
      <div className="border p-3 rounded bg-light mt-3">
        <p>Manage rooms, staff, or equipment for appointments.</p>
        <button className="btn btn-primary">+ Add Resource</button>
      </div>
    </div>
  );
}
