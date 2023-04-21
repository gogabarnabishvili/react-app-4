import {
    ExpensesBoxStyled,
    ExpensesParagStyled,
    ExpensesSpanStyled,
} from "./ExpensesRenderStyled";
import BackExpenses from "../../functions/LocalStoreSave/LocalSoreBack";

const BackExpense = BackExpenses("expense");
const ExpenseRender = () => {
    if (BackExpenses("expense")) {
        return (
            <>
                {" "}
                {BackExpense.map((e, index) => (
                    <ExpensesBoxStyled>
                        <ExpensesParagStyled>
                            date :
                            <ExpensesSpanStyled>{e.date}</ExpensesSpanStyled>
                        </ExpensesParagStyled>
                        <ExpensesParagStyled>
                            type :
                            <ExpensesSpanStyled>{e.type}</ExpensesSpanStyled>
                        </ExpensesParagStyled>
                        <ExpensesParagStyled>
                            categpry :
                            <ExpensesSpanStyled>
                                {e.category}
                            </ExpensesSpanStyled>
                        </ExpensesParagStyled>
                        <ExpensesParagStyled>
                            amount :
                            <ExpensesSpanStyled>{e.amount}</ExpensesSpanStyled>
                        </ExpensesParagStyled>
                    </ExpensesBoxStyled>
                ))}
            </>
        );
    } else {
        return <ExpensesParagStyled>not have expenses</ExpensesParagStyled>;
    }
};
export default ExpenseRender;
