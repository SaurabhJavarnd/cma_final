import React, { useState, useEffect } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";
import AllDetails from "./AllDetails";

const AdminPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [details, setDetails] = useState([]);

  function getAllData() {
    axios.get("http://localhost:8080/api/v1/details/").then((response) => {
      console.log(response);
      if (response.status === 200) {
        cogoToast.success("Data Successfully Loaded");
        setDetails(response.data.data.details);
      } else {
        cogoToast.error("This is a error message");
        setDetails([]);
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
      "http://localhost:8080/api/v1/details/",
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
            <h4>Welcome to Admin Page</h4>
            <div>
              <input
                className="inputBox"
                type="text"
                value={title}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <div className="">
                <input
                  className="inputBox"
                  type="text"
                  value={subject}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                className="inputBox"
                type="number"
                value={title}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Number"
              />
              </div>
              <button onClick={data} className="btn btn-primary" type="button">
                Submit
              </button>
            </div>
          </div>
  
          <div className="col">
            <AllDetails details={details} getAllData={getAllData} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminPage;
