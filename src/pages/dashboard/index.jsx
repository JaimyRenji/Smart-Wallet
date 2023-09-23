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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

export const SmartWallet = () => {
  return (
    <div className="whole">
      <div className="category">
        <div className="logo">
          <img src={logo} height="34px" width="249px" alt="Logo" />
        </div>
        <div className="categorylogo">
          <div className="icons">
            <a href="/formdata">
              <img src={house} alt="" />
            </a>
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
        <div className="header">
          <h2 className="left_align">Dashboard</h2>
          <div className="profile">
            <p className="person">Welcome John!</p>
            <img className="person-pic" src={house} />
          </div>
        </div>
        <div className="budget">
          <h4>YOUR BUDGET SUMMARY</h4>
        </div>
        <div className="total">
          <div className="box">
            <h4>
              <FontAwesomeIcon icon={faSackDollar} /> Total Income
            </h4>
            <p>
              <b>INR 0.00/-</b>
            </p>
          </div>
          <div className="box">
            <h4>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} /> Total Expense
            </h4>
            <p>
              <b>INR 0.00/-</b>
            </p>
          </div>
          <div className="box">
            <h4>
              <FontAwesomeIcon icon={faIndianRupeeSign} /> Balance
            </h4>
            <p>
              <b>INR 0.00/-</b>
            </p>
          </div>
        </div>
        <div className="big">
          <div className="text-main">
            <div className="text">
              <p>
                Expense <b>INR 2300 </b>than last month
              </p>
            </div>
            <div className="text">
              <p>
                Savings <b>INR 2510 </b> than last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
