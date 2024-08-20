import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function EmpDetails() {
  const { empId } = useParams();
  const [employeeData, employeeDataChange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // console.log(resp);
        employeeDataChange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="card">
      <div>
        {employeeData && 
      <div>
         <h2> The Employee name is: <b>{employeeData.name}</b>({employeeData.id})</h2>
         <h3>Contact Details</h3>
         <h5>Email id: {employeeData.email}</h5>
         <h5>phone is:{employeeData.phone}</h5>
         <Link className="btn btn-danger" to="/">Back to Listing</Link>
      </div>
        }
      </div>
    </div>
  );
}

export default EmpDetails;
