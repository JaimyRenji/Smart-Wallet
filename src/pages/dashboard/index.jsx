import React from "react";
import "./dashboard.css";
import logo from "../../images/logo.png";
import petcare from "../../images/petcare.png";
import car from "../../images/car.png";
import computer from "../../images/computer.png";
import education from "../../images/education.png";
import food from "../../images/food.png";
import health from "../../images/health.png";
import house from "../../images/house.png";
import shopping from "../../images/shopping.png";

export const SmartWallet = () => {
  return (
    <div className="whole">
      <div className="category">
        <div className="logo">
          <img src={logo} height="34px" width="249px" alt="Logo" />
        </div>
        <div className="categorylogo">
          <div className="icons">
            <img src={house} alt="" />
            <img src={car} alt="" />
          </div>
          <div className="icons">
            <img src={education} alt="" />
            <img src={health} alt="" />
          </div>
          <div className="icons">
            <img src={food} alt="" />
            <img src={shopping} alt="" />
          </div>
          <div className="icons">
            <img src={computer} alt="" />
            <img src={petcare} alt="" />
          </div>
        </div>
      </div>
      <div className="containers">
        <div className="summary">
          <div className="heading">
            <div>
              <h2>Dashboard</h2>
              <h4>YOUR BUDGET SUMMARY</h4>
            </div>
            <div className="person">
              <p>Welcome John</p>
            </div>
          </div>
          <div className="total">
            <div className="box">
              <h5>Total Income</h5>
              <p>INR 0.00/-</p>
            </div>
            <div className="box">
              <h5>Total Expense</h5>
              <p>INR 0.00/-</p>
            </div>
            <div className="box">
              <h5>Balance</h5>
              <p>INR 0.00/-</p>
            </div>
          </div>
        </div>
        <div className="visualrep">
          <div>hello world</div>
          <div></div>
          <div className="graph"></div>
          <div className="calendar"></div>
        </div>
      </div>
    </div>
  );
};


