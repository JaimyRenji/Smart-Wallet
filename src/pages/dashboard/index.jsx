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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faArrowRightArrowLeft,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../../config/firebase-config"; 
import { auth } from "../../config/firebase-config"; 


export const SmartWallet = () => {
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
            <p className="person">Welcome {name}!</p>
           <img className="profile-photo" src={profilePhoto} />
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
              <div className="scroll">
              <h3> Transactions</h3>
        <ul>
          {transactions.map((transaction) => {
            const { description, transactionAmount, transactionType } =
              transaction;
            return (
              <li>
                <h4> {description} </h4>
                <p>
                  ${transactionAmount} •{" "}
                  <label
                    style={{
                      color: transactionType === "expense" ? "red" : "green",
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
      <div className="expense-tracker">
        <div className="container">
          <h1> {name}'s Expense Tracker</h1>
          <div className="balance">
            <h3> Your Balance</h3>
            {balance >= 0 ? <h2> ${balance}</h2> : <h2> -${balance * -1}</h2>}
          </div>
          <div className="summary">
            <div className="income">
              <h4> Income</h4>
              <p>${income}</p>
            </div>
            <div className="expenses">
              <h4> Expenses</h4>
              <p>${expenses}</p>
            </div>
          </div>
          <form className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              value={transactionAmount}
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense"> Expense</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income"> Income</label>

            <button type="submit"> Add Transaction</button>
          </form>
        </div>
        {profilePhoto && (
          <div className="profile">
            {" "}
            <img className="profile-photo" src={profilePhoto} />
            <button className="sign-out-button" onClick={signUserOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
      <div className="transactions">
        <h3> Transactions</h3>
        <ul>
          {transactions.map((transaction) => {
            const { description, transactionAmount, transactionType } =
              transaction;
            return (
              <li>
                <h4> {description} </h4>
                <p>
                  ${transactionAmount} •{" "}
                  <label
                    style={{
                      color: transactionType === "expense" ? "red" : "green",
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
    </>
  );
};





/* import React, { useEffect, useState } from "react";
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
import {
  faSackDollar,
  faArrowRightArrowLeft,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../../config/firebase-config"; // Import the Firestore instance
import { auth } from "../../config/firebase-config"; // Import the Firebase auth instance

export const SmartWallet = () => {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user-specific data when the component mounts
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        try {
          const userRef = db.collection("users").doc(currentUser.uid);
          const docSnapshot = await userRef.get();

          if (docSnapshot.exists()) {
            // Set the user-specific data in state
            setUserData(docSnapshot.data());
            setUser(currentUser);
          } else {
            console.log("User data not found.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

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
            {user && (
              <div>
                <p className="person">Welcome {user.displayName}!</p>
                <img className="person-pic" src={user.photoURL} alt="Profile" />
              </div>
            )}
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
} */;





 /* import React,{ useEffect, useState } from "react";
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

 */