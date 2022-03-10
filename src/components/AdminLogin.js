import axios from "axios";
import React, { useState } from "react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const data = async () => {
    console.log(username, password);
    let result = await axios("http://localhost:8080/api/v1/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(await result.json());
    localStorage.setItem("user", JSON.stringify(result));
    if (result.status === 201) {
      cogoToast.success("Logged in Successfully").then(() => {
        window.location.href = "/login";
      });
    } else {
      cogoToast.error("This is a error message");
    }

  };
  return (
    <div className="register">
      <div>
        <h1>Welcome Admin!!</h1>
        <input
          className="inputBox"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
        <input
          className="inputBox"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={data} className="submitButton" type="button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
