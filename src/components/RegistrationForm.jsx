import React, { useState } from "react";
// import Form from "./../UI/Form/Form";

const RegistrationForm = () => {
  // Define form states
  const [form, setForm] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  const SubmitFormData = (event) => {
    event.preventDefault();

    fetch("http://localhost:7000/add", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.json);

        // call selectAll();
      })
      .catch((err) => console.log(err));
  };

  const setFormData = (e) => {
    const newValue = {};
    newValue[e.target.name] = e.target.value;

    setForm({ ...form, ...newValue });
  };

  return (
    <>
      <div className="register">
        <form action="" method="post">
          <div className="group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username..."
              className="form-control"
              onChange={(e) => setFormData(e)}
            />
          </div>
          <div className="group">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              name="fullname"
              placeholder="Fullname..."
              className="form-control"
              onChange={(e) => setFormData(e)}
            />
          </div>
          <div className="group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@exemple.com..."
              className="form-control"
              onChange={(e) => setFormData(e)}
            />
          </div>
          <div className="group">
            <label htmlFor="password">Names</label>
            <input
              type="password"
              name="password"
              placeholder="Password..."
              className="form-control"
              onChange={(e) => setFormData(e)}
            />
          </div>

          <div className="group">
            <button className="button" onClick={SubmitFormData}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
