import React, { useState } from "react";
import FullName from "./FullName";
import Email from "./Email";
import Address from "./Address";
import Floor from "./Floor";
import Options from "./Options";
import Parking from "./Parking";
import Price from "./Price";
import UploadImage from "./UploadImage";
import Elevator from "./Elevator";
import Summary from "./Summary";

function Form({template}) {
  const [step, setStep] = useState(0);
  const [progressbar, setProgressbar] = useState("10%");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    floor: 0,
    bbq: false,
    salonComunal: false,
    parqueJuegos: false,
    parking: false,
    parkingCovered: false,
    price: 0,
    image: '',
    elevator: false,
  });

  const FormTitles = [
    "Nombre completo",
    "Email",
    "Dirección",
    "Número de piso",
    "Amenidades",
    "Estacionamiento",
    "Precio",
    "Subir Imágen",
    "Elevador",
    "Resumen"
  ];

  const StepDisplay = () => {
    if (step === 0) {
      return <FullName formData={formData} setFormData={setFormData} template={template} />;
    } else if (step === 1) {
      return <Email formData={formData} setFormData={setFormData} template={template} />;
    } else if (step === 2) {
      return <Address formData={formData} setFormData={setFormData} template={template} />;
    } else if (step === 3) {
      return <Floor formData={formData} setFormData={setFormData} template={template} />;
    } else if (step === 4) {
      return <Options formData={formData} setFormData={setFormData} template={template} />;
    } else if (step === 5) {
      return <Parking formData={formData} setFormData={setFormData} template={template} />;
    } else if (step === 6) {
      return <Price formData={formData} setFormData={setFormData} template={template} formatCurrency={formatCurrency}   />;
    } else if (step === 7) {
      return <UploadImage formData={formData} setFormData={setFormData} template={template} />;
    } else if (step === 8) {
      return <Elevator formData={formData} setFormData={setFormData} template={template} />;
    }
  };

  function handleClickNext() {
    setStep((prevStep) => prevStep + 1);
    setProgressbar(
      parseFloat(((step + 2) / 10) * 100)
        .toFixed(2)
        .concat("%")
    );
  }

  function handleClickPrev() {
    setStep((prevStep) => prevStep + -1);
    setProgressbar(
      parseFloat(((step - 1) / 10) * 100)
        .toFixed(2)
        .concat("%")
    );
  }
console.log(progressbar)
  const formatCurrency = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
    <div className="app-wrapper">
   
    
 
    <div className="form">
    
     
      <div className="form-container">
      <div className="progressbar"
      style={{ width: progressbar}}
    ></div>
        <div className="header">
          <h1>{FormTitles[step]}</h1>
        </div>
        <div className="body">{StepDisplay()}</div>
        <div className="footer">
          <button disabled={step === 0} onClick={handleClickPrev}>
            Regresar
          </button>
          <button
            disabled={step === FormTitles.length - 1}
            onClick={handleClickNext}
          >
            Siguiente
          </button>
          </div>
          
        </div>
       
      </div>
    
    <Summary formData={formData} formatCurrency={formatCurrency} />
    </div>
    </>
  );
}

export default Form;
