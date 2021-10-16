import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card.js";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter/ExpensesFilter";
import ExpenseChart from "./components/Expenses/ExpenseChart";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const [filteredValue, setFilteredValue] = useState("2020");
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevData) => {
      return [expenseData, ...prevData];
    });
  };

  const setExpenseshandler = (filterValue) => {
    setFilteredValue(filterValue);
  };

  const filteredArray = expenses.filter((filteritem) => {
    if (filteritem.date.getFullYear() == filteredValue) {
      console.log("filter if", filteritem);
      return filteritem;
    }
  });

  let ExpenseContent = (
    <div className="No-expense-parent">
      <p className="No-expense">No Expense Data</p>
    </div>
  );
  if (filteredArray.length > 0) {
    ExpenseContent = filteredArray.map((expense) => (
      <ExpenseItem data={expense} />
    ));
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter
          data={filteredValue}
          onSetExpenses={setExpenseshandler}
        />
        <ExpenseChart expenses={filteredArray} />
        {/* <ExpenseItem data={expenses[0]}></ExpenseItem>
        <ExpenseItem data={expenses[1]}></ExpenseItem>
        <ExpenseItem data={expenses[2]}></ExpenseItem>
        <ExpenseItem data={expenses[3]}></ExpenseItem> */}
        {ExpenseContent}
      </Card>
    </div>
  );
};

export default App;
