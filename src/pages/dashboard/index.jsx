import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAddTransaction } from "../../hooks/useAddTransactions";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";
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
import add from "../../images/add.png";
import graphpic from "../../images/graphpic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faArrowRightArrowLeft,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../../config/firebase-config";
import { auth } from "../../config/firebase-config";

export const SmartWallet = ({ location }) => {
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransactions();
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
  const { balance, income, expenses } = transactionTotals;

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });

    setDescription("");
    setTransactionAmount("");
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
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
              <a href="/formdata">
                <img src={car} alt="" />
              </a>
            </div>
            <div className="icons">
              <a href="/formdata">
                <img src={education} alt="" />
              </a>
              <a href="/formdata">
                <img src={health} alt="" />
              </a>
            </div>
            <div className="icons">
              <a href="/formdata">
                <img src={food} alt="" />
              </a>
              <a href="/formdata">
                {" "}
                <img src={shopping} alt="" />
              </a>
            </div>
            <div className="icons">
              <a href="/formdata">
                <img src={computer} alt="" />
              </a>
              <a href="/formdata">
                <img src={petcare} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="containers">
          <div className="header">
            <h2 className="left_align">Dashboard</h2>
            <div className="profile">
              <p className="person">Welcome {name}!</p>
              <img className="profile-photo" src={profilePhoto} />
              <button className="sign-out-button" onClick={signUserOut}>
                Sign Out
              </button>
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
                <b>INR {income}/-</b>
              </p>
            </div>
            <a href="./formdataexpense">
              <div className="pluslogo">
                <img src={add} />
              </div>
            </a>
            <div className="box">
              <h4>
                <FontAwesomeIcon icon={faArrowRightArrowLeft} /> Total Expense
              </h4>
              <p>
                <b>INR {expenses}/-</b>
              </p>
            </div>
            <div className="box">
              <h4>
                <FontAwesomeIcon icon={faIndianRupeeSign} /> Balance
              </h4>
              <p>
                <b>INR {balance}/-</b>
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
                <div className="bottompart">
                  <div className="graph">
                    <img src={graphpic} alt="" />
                  </div>
                  <div className="transactiontext">
                    <div className="scroll">
                      <h3> Transactions</h3>
                      <ul>
                        {transactions.map((transaction) => {
                          const {
                            description,
                            transactionAmount,
                            transactionType,
                          } = transaction;
                          return (
                            <li>
                              <h4> {description} </h4>
                              <p>
                                INR {transactionAmount} •{" "}
                                <label
                                  style={{
                                    color:
                                      transactionType === "expense"
                                        ? "red"
                                        : "green",
                                  }}
                                >
                                  {" "}
                                  {transactionType}{" "}
                                </label>
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

  