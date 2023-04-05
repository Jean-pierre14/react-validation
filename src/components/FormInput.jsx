import React from "react";

const FormInput = (props) => {
  const { label, onChange, errorMessage, id, ...others } = props;
  return (
    <div>
      <div className="formInput">
        <label htmlFor={label}>{label}</label>
        <input {...others} onChange={onChange} />
        <span className="errorMessage">{errorMessage}</span>
      </div>
    </div>
  );
};

export default FormInput;
