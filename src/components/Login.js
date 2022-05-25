import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { push } = useHistory();
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("is this thing working");
    axios
      .post(`http://localhost:9000/api/login`, cred)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        push("/friends");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <h2> Login </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input onChange={handleChange} name="username" id="username" />
        </div>

        <div>
          <label htmlFor="password"> Password:</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="username"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
