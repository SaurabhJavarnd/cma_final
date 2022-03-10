import axios from "axios";
import React, { useState } from "react";

const userLogin = () => {
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
  };
  return (
    <div className="register">
      <div>
        <h1>Welcome User!</h1>
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

export default UserLogin;
