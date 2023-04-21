import { Link, useNavigate } from "react-router-dom";
import Filter from "../components/expense-filter/Filter";
import ExpenseRender from "../components/expenses-render/ExpensesRender";
import RenderTotal from "../components/expense-total/ExpenseTotal";
const ExpenseFeed = () => {
    const navigate = useNavigate();
    const SignInpage = () => {
        navigate("/sigIn");
    };
    const AddExpenses = () => {
        navigate("/addExoense");
    };
    return (
        <>
            <h1>expense feed</h1>
            <Filter />
            <ExpenseRender />
            <RenderTotal />
            <button onClick={AddExpenses}>add expense</button>
            <button onClick={SignInpage}>sign in</button>
        </>
    );
};
export default ExpenseFeed;
