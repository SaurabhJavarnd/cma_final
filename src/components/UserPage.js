import AllDetials from "./AllDetails";
import React, { useState, useEffect } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";

const UserPage = () => {
  const [tutorials, setTutorials] = useState([]);

  function getAllData() {
    axios.get("http://localhost:8080/api/v1/tutorials/").then((response) => {
      console.log(response);
      if (response.status === 200) {
        cogoToast.success("Data Successfully Loaded");
        setTutorials(response.data.data.tutorials);
      } else {
        cogoToast.error("This is a error message");
        setTutorials([]);
      }
    });
    console.log(details);
  }
  useEffect(() => {
    getAllData();
  }, []);

  const data = async () => {
    let userData = {
      name: name,
      email: email,
      number: number,
    };
    let result = await axios.post(
      "http://localhost:8080/api/v1/tutorials/",
      userData
    );
    localStorage.setItem("user", JSON.stringify(result));
    console.log(result);
    if (result.data.status === "success") {
      cogoToast.success("Data Successfully Loaded").then(() => {
        getAllData();
      });
    } else {
      cogoToast.error("This is a error message");
    }
  };
  return (
    <React.Fragment>
        <div className="container">
        <div className="row align-items-start">
      <div className="col">
        <AllTutorials details={details} getAllData={getAllData} />
      </div>
      <div className="col-6">
      <h3>Welcome to User Page</h3>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Add Queries Here..."
        ></textarea>
        <br/>
        <button type="button" className="btn btn-primary">Submit</button>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default UserPage;
