import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./formdata.css";
import bg1 from "../../images/bg1.png";
import bg2 from "../../images/bg2.png";

export const FormData = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Selected Date:", selectedDate);
  };

  return (
    <body>
      <div className="whole">
        <div className="container">
          <img src={bg2} alt="bg2" className="top-left-image" />
          <div className="heading">
            <h1>Expense Form</h1></div>
            <form className="expense" onSubmit={handleSubmit}>
              <div>
                <label for="expense-amount" className="exp">Expense Amount </label>
                <input className="exp"
                  type="number"
                  id="expense-amount"
                  name="expense-amount"
                  step="0.01"
                  required
                />
              </div>
              <div>
                <label htmlFor="expense-date" className="inc">Expenditure Date </label>
                <DatePicker
                  id="expense-date"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy-MM-dd"
                />
              </div>
              <button type="submit" className="sub">Submit</button>
            </form>
  
          <img src={bg1} alt="bg1" className="bottom-right-image" />
        </div>
      </div>
    </body>
  );
};
