import React from "react";

function Parking({ formData, setFormData }) {
  return (
    <div>
      <input
        type="radio"
        id="si"
        name="parking"
        checked={formData.parking === "si"}
        value="si"
        onChange={(e) => setFormData({ ...formData, parking: e.target.value })}
      />
      <label htmlFor="si">Si</label>
      <br />
      <input
        type="radio"
        id="no"
        name="parking"
        checked={formData.parking === "no"}
        value="no"
        onChange={(e) => setFormData({ ...formData, parking: e.target.value })}
      />
      <label htmlFor="no">No</label>
      <br />
      {/* ================= */}

      {formData.parking === "si" && (
        <div>
          <h2>¿El estacionamiento es cubierto o descubierto?</h2>

          <input
            type="radio"
            id="cubierto"
            name="parkingCovered"
            checked={formData.parkingCovered === "cubierto"}
            value="cubierto"
            onChange={(e) =>
              setFormData({ ...formData, parkingCovered: e.target.value })
            }
          />
          <label htmlFor="cubierto">Cubierto</label>
          <br />

          <input
            type="radio"
            id="descubierto"
            name="parkingCovered"
            checked={formData.parkingCovered === "descubierto"}
            value="descubierto"
            onChange={(e) =>
              setFormData({ ...formData, parkingCovered: e.target.value })
            }
          />
          <label htmlFor="descubierto">Descubierto</label>
          <br />
        </div>
      )}
    </div>
  );
}

export default Parking;
