import React from "react";

function Summary({ formData, formatCurrency }) {


  return (
    <div className="summary">
      {formData.fullName && <p className="summary-fields">
        Nombre completo: <span className="summary-data">{formData.fullName}</span>
      </p>}
      {formData.email && <p className="summary-fields">
        Email: <span className="summary-data">{formData.email}</span>
      </p>}
      {formData.address && <p className="summary-fields">
        Dirección: <span className="summary-data">{formData.address}</span>
      </p>}
      {formData.floor != 0 && <p className="summary-fields">
        Piso: <span className="summary-data">{formData.floor}</span>
      </p>}
     {formData.bbq && <p className="summary-fields">
        ¿Zona BBQ? <span className="summary-data">{formData.bbq ? "Si" : "No"}</span>
      </p>}
      { formData.salonComunal && <p className="summary-fields">
        ¿Salón comunal? <span className="summary-data">{formData.salonComunal ? "Si" : "No"}</span>
      </p>}
      {formData.parqueJuegos && <p className="summary-fields">
        ¿Parque de juegos? <span className="summary-data">{formData.parqueJuegos ? "Si" : "No"}</span>
      </p>}
      {formData.parking && <p className="summary-fields">
        ¿Estacionamiento? <span className="summary-data">{formData.parking ? "Si" : "No"}</span>
      </p>}
      {formData.parking === "si" && (
        <p className="summary-fields">
          ¿El estacionamiento es cubierto?{" "}
          <span className="summary-fields">{formData.parkingCovered}</span>
        </p>
      )}
     {formData.price > 0 && <p className="summary-fields">
        Precio: <span className="summary-data">${formatCurrency(formData.price)}</span>
      </p>}

      <p className="summary-fields">Imagen: <span>{formData.image}</span></p>
      {formData.elevator && <p className="summary-fields">
        ¿Elevador? <span className="summary-data">{formData.elevator}</span>
      </p>}
   
    </div>
  );
}

export default Summary;
