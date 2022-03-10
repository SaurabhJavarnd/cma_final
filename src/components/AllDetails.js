import React, { useState, useEffect } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";

const AllDetails = ({details, getAllData}) => {
  
useEffect(() => {
  
}, [details])
  
  
  
function getAllData() {
  axios.get("http://localhost:8080/api/v1/details/").then((response) => {
    console.log(response);
    if (response.status === 200) {
      cogoToast.success("Data Successfully Loaded");
      setDetails(response.data.title);
    } else {
      cogoToast.error("This is a error message");
      setDetails([]);
    }
  });
  console.log(detials);
}
useEffect(() => {
  getAllData();
}, []);

  const deleteDetail = (id) => {
    axios
      .delete(`http://localhost:8080/api/v1/details/${id}`)
      .then((response) => {
        if (response.status === 200) {
          cogoToast.warn("Deleted Successfully").then(()=>{
            getAllData();
          });
        } 
      }).then(()=>{
        getAllData();
      })
  };
  
  

  return (
    <div className="register">
      <h4>All Detials</h4>
      {detials &&
        detials?.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.name}</p>
              <button 
                onClick={() => {
                  console.log(item.name);
                  getAllData();
                }}
                type="button" className="btn btn-light"
                id="edit"
              >
                Edit
              </button>
              <button
                onClick={(refresh) => {
                  console.log(item._id);
                  deleteDetail(item._id);
                }}
                type="button" className = "btn btn-danger m-2"
                id="delete"
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default AllDetails;
