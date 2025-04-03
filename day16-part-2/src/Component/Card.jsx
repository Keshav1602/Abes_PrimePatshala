import React from "react";

const Card = ({ data }) => {
  return (
    <div
      key={data.customerID}
      className="card"
    >
      <h3>Customer Details</h3>
      <p>
        <strong>Customer ID:</strong> {data.customerID}
      </p>
      <p>
        <strong>Gender:</strong> {data.gender}
      </p>
      <p>
        <strong>Senior Citizen:</strong>{" "}
        {data.SeniorCitizen === "1" ? "Yes" : "No"}
      </p>
      <p>
        <strong>Partner:</strong> {data.Partner}
      </p>
      <p>
        <strong>Dependents:</strong> {data.Dependents}
      </p>
      <p>
        <strong>Internet Service:</strong> {data.InternetService}
      </p>
      <p>
        <strong>Monthly Charges:</strong> ${data.MonthlyCharges}
      </p>
      <p>
        <strong>Tenure:</strong> {data.tenure} months
      </p>
      <p>
        <strong>Churn:</strong> {data.Churn}
      </p>
    </div>
  );
};

export default Card;
