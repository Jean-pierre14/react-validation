import React, { useState } from "react";
import FormInput from "./FormInput";
import "./Validation.css";

const ValidtionReact = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    dateOfBirth: "",
    password: "",
    cpassword: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      label: "Username",
      placeholder: "Username",
      name: "username",
      errorMessage:
        "Username is required and it's should be at least 3-5 characters",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      type: "text",
      label: "Fullname",
      placeholder: "Fullname",
      name: "fullname",
      errorMessage: "Fullname is required",
    },
    {
      id: 3,
      type: "email",
      label: "E-mail",
      placeholder: "Email@exemple.com",
      name: "email",
      errorMessage: "Email is required",
    },
    {
      id: 4,
      type: "date",
      label: "Date of Birth",
      name: "dateOfBirth",
    },
    {
      id: 5,
      type: "password",
      label: "password",
      placeholder: "Password",
      name: "password",
      errorMessage: "Password is required",
    },
    {
      id: 6,
      type: "password",
      label: "Confirm your password",
      placeholder: "Confirm your password",
      name: "cpassword",
      errorMessage: "This should match with the password",
    },
  ];
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  console.log(values);
  return (
    <div className="formInput">
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <button className="buttonSubmit">Register</button>
    </div>
  );
};

export default ValidtionReact;
