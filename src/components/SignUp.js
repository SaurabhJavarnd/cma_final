import React, { useState } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const data = async () => {
    let userData = {
      name: name,
      contact: contact,
      email: email,
      username: username,
      password: password,
      userType: userType,
    };
    let result = await axios.post(
      "http://localhost:8080/api/v1/users/signup",
      userData
    );
    // console.log(await result.json());
    localStorage.setItem("user", JSON.stringify(result));
    console.log(result);
    if (result.status === 201) {
      cogoToast.success("Logged in Successfully").then(() => {
        window.location.href = "/login";
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <br/>
        <input
          className="form-control"
          type="tel"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter Contact"
        />
        <br/>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <br/>
        <input
          className="form-control"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
        <br/>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <br/>
        <select className="form-control" onChange={(e) => setUserType(e.target.value)} value={userType} type="userType">
          <option>
            select type
          </option>
          <option>
            user
          </option>
          <option>
            admin
          </option>
        </select>
        <br/>
        <button onClick={data} className="btn btn-primary" type="button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
