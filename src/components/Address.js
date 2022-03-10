import React from "react";

function Address({ formData, setFormData }) {
  return (
    <div>
      <label htmlFor="address">Dirección</label>
      <input
        type="text"
        placeholder="Dirección"
        name="address"
        id="address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
    </div>
  );
}

export default Address;
