import axios from "axios";
import React, { useState } from "react";
import cogoToast from "cogo-toast";
import "bootstrap/dist/css/bootstrap.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const data = async () => {
    let userData = {
      username: username,
      password: password,
      userType: userType,
    };
    let result = await axios.post(
      "http://localhost:8080/api/v1/users/login",
      userData
    );
    localStorage.setItem("user", JSON.stringify(result));

    if (result.status === 200) {
      cogoToast.success("Data Successfully Loaded").then(() => {
        window.location.href = "/adminpage"; //or userpage
      });
    } else {
      cogoToast.error("This is a error message");
    }
  };
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <div>
        <input
          className="form-control"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button
          className="btn btn-primary"
          onClick={data}
          variant="contained"
          type="button"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
