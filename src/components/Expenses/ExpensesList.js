import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className={`expenses-list__fallback`}>Found no Expenses</h2>;
  }
  return (
    <ul className={`expenses-list`}>
      {props.items.map((item) => {
        return <ExpenseItem key={item.id} item={item}></ExpenseItem>;
      })}
    </ul>
  );
}

export default ExpensesList;
