import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler()
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = (event) => {
    setTitle('update');
    console.log(event.target.value);
  };


  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;
