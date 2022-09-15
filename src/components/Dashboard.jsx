import React from "react";
import Card from "./Card";

let data = [
  {
    id: 1,
    title: "EARNINGS (MONTHLY)",
    money: "$40,000",
    color: "primary",
  },
  {
    id: 2,
    title: "EARNINGS (ANNUAL)",
    money: "$215,000",
    color: "success",
  },
  {
    id: 3,
    title: "TASKS",
    money: "50%",
    color: "info",
  },
  {
    id: 4,
    title: "PENDING REQUESTS",
    money: "18",
    color: "warning",
  },
];

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="row">
        {data.map((card) => {
          return <Card card={card} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
