import React from "react";

export default function CancelledReason() {
  return (
    <div>
      <h2>Cancelled Reason</h2>
      <div className="border p-3 rounded bg-light mt-3">
        <p>Add or manage reasons why appointments were cancelled.</p>
        <button className="btn btn-primary">+ Add Reason</button>
      </div>
    </div>
  );
}
