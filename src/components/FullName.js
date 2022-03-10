import React from "react";

function FullName({ formData, setFormData }) {
  return (
    <div>
      <label htmlFor="fullName">Nombre completo</label>
      <input
        type="text"
        placeholder="Nombre completo"
        name={formData.fullName}
        id={formData.fullName}
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
    </div>
  );
}

export default FullName;
