import React from "react";

function Floor({ formData, setFormData }) {
  return (
    <div>
      <label htmlFor="floor">Piso</label>
      <input
        type="number"
        placeholder="Número de piso"
        name="floor"
        id="floor"
        value={formData.floor}
        onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
      />
    </div>
  );
}

export default Floor;
