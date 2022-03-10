import React, { useState } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";
import AllTutorials from "./AllTutorials";


const FacultyPage = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [standard, setStandard] = useState("");
  const [file, setFile] = useState("");

  const data = async () => {
    let userData = {
      title: title,
      subject: subject,
      standard: standard,
      file: file,
    };
    let result = await axios.post(
      "http://localhost:8080/api/v1/tutorials/",
      userData
    );
    localStorage.setItem("user", JSON.stringify(result));
    console.log(result);
    if (result.data.status === "success") {
      cogoToast.success("Data Successfully Loaded");
    } else {
      cogoToast.error("This is a error message");
    }
  };
  return (
    <React.Fragment>
      <div className="register">
        <input
          className="inputBox"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          className="inputBox"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <input
          className="inputBox"
          type="text"
          value={standard}
          onChange={(e) => setStandard(e.target.value)}
          placeholder="standard"
        />
        <input
          className="inputBox"
          type="text"
          value={file}
          onChange={(e) => setFile(e.target.value)}
          placeholder="file"
        />
        <button onClick={data} className="submitButton" type="button">
          Submit
        </button>
      </div>
      <div>
        <AllTutorials/>
      </div>
    </React.Fragment>
  );
};

export default FacultyPage;
