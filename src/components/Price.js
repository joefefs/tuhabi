import React from "react";

function Price({ formData, setFormData, formatCurrency }) {

  
 
  return (
    <div>
    <label htmlFor="price">Precio</label>
      <input
        type="number"
        name="price"
        id="price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />
      {formData.price > 0 && <h1>$ {formatCurrency(formData.price)}</h1>}
    </div>
  
  );
}

export default Price;
