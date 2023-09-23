import React from 'react';

function SmartWallet() {
  return (
    <div className="whole">
      <div className="category">
        <div className="logo">
          <img src="./Mask group.png" height="34px" width="249px" alt="Logo" />
        </div>
        <div className="categorylogo">
          <div className="icons">
            <img src="./Group 160.png" alt="" />
            <img src="./Group 156.png" alt="" />
          </div>
          <div className="icons">
            <img src="./Group 159.png" alt="" />
            <img src="./Group 155.png" alt="" />
          </div>
          <div className="icons">
            <img src="./Group 158.png" alt="" />
            <img src="./Group 154.png" alt="" />
          </div>
          <div className="icons">
            <img src="./Group 157.png" alt="" />
            <img src="./Group 153.png" alt="" />
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
          <div>hello</div>
          <div></div>
          <div className="graph"></div>
          <div className="calendar"></div>
        </div>
      </div>
    </div>
  );
}

export default SmartWallet;
