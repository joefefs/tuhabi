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

function Form(props) {
  const [step, setStep] = useState(0);
  const [progressbar, setProgressbar] = useState("0");
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

  const [urlRoute, setUrlRoute] = useState('/')
  console.log(urlRoute)


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
      return <FullName formData={formData} setFormData={setFormData} />;
    } else if (step === 1) {
      return <Email formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <Address formData={formData} setFormData={setFormData} />;
    } else if (step === 3) {
      return <Floor formData={formData} setFormData={setFormData} />;
    } else if (step === 4) {
      return <Options formData={formData} setFormData={setFormData} />;
    } else if (step === 5) {
      return <Parking formData={formData} setFormData={setFormData} />;
    } else if (step === 6) {
      return <Price formData={formData} setFormData={setFormData} formatCurrency={formatCurrency}  />;
    } else if (step === 7) {
      return <UploadImage formData={formData} setFormData={setFormData} />;
    } else if (step === 8) {
      return <Elevator formData={formData} setFormData={setFormData} />;
     } // else if (step === 9) {
    //     return <Summary formData={formData} formatCurrency={formatCurrency} />;
    //   }
  };



  function handleClickNext() {
    setStep((prevStep) => prevStep + 1);
    setProgressbar(
      parseFloat(((step + 1) / 9) * 100)
        .toFixed(2)
        .concat("%")
    );
  }

  function handleClickPrev() {
    setStep((prevStep) => prevStep + -1);
    setProgressbar(
      parseFloat(((step - 1) / 9) * 100)
        .toFixed(2)
        .concat("%")
    );
  }

  const formatCurrency = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className="form">
      <div>
        <div
          style={{ width: progressbar, height: "10px", backgroundColor: "red" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[step]}</h1>
        </div>
        <div className="body">{StepDisplay()}</div>
        <div className="footer">
          <button disabled={step == 0} onClick={handleClickPrev}>
            Regresar
          </button>
          <button
            disabled={step == FormTitles.length - 1}
            onClick={handleClickNext}
          >
            Siguiente
          </button>
        </div>
        <Summary formData={formData} formatCurrency={formatCurrency} />
      </div>
    </div>
  );
}

export default Form;
