import React from "react";

function Options({ formData, setFormData }) {
    const handleChange = (e) => {
        // const [target, value, type, checked, name] = e.target

        setFormData({
            ...formData,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
        console.log(formData.bbq)
    }
  return (
    <div>
    
      <input 
        type="checkbox" 
        name="bbq" 
        id="bbq" 
        checked={formData.bbq}
        onChange={handleChange} 
    />
      <label htmlFor="bbq">BBQ (Opcional)</label>
      <br />

      <input
        type="checkbox"
        name="salonComunal"
        id="salonComunal"
        checked={formData.salonComunal}
        onChange={handleChange}
      />
      <label htmlFor="salonComunal">Salón Comunal (Opcional)</label>
      <br />

      <input
        type="checkbox"
        name="parqueJuegos"
        id="parqueJuegos"
        checked={formData.parqueJuegos}
        onChange={handleChange}
      />
      <label htmlFor="parqueJuegos">Parque de Juegos (Opcional)</label>
    </div>
  );
}

export default Options;
