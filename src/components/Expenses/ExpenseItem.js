import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.item.title);
  // const handleClick = () => {
  //   setTitle("Changed");
  // };
  return (
    <li>
      <Card className={`expense-item`}>
        <ExpenseDate date={props.item.date} />
        <div className={`expense-item__description`}>
          <h2>{props.item.title}</h2>
          <div className={`expense-item__price`}>{props.item.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
