import { useState } from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // let expenseContent = <p>No Expenses found</p>;
  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((item) => {
  //     return <ExpenseItem key={item.id} item={item}></ExpenseItem>;
  //   });
  // }
  return (
    <Card className={`expenses `}>
      {
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      }
      {<ExpenseChart expenses={filteredExpenses}></ExpenseChart>}
      {<ExpensesList items={filteredExpenses}></ExpensesList>}
    </Card>
  );
};
export default Expenses;
