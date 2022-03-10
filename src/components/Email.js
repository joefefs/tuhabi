import React from "react";

function Email({ formData, setFormData }) {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </div>
  );
}

export default Email;
