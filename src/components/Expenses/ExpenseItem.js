import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item" key={props.data.id}>
      <ExpenseDate data={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">${props.data.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
