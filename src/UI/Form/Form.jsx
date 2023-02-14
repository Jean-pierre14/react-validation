import React from "react";

const Form = () => {
  return (
    <>
      <form action="">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="input"
        />

        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
