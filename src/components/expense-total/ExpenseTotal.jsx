import {
    ExpenseTotalBoxStyled,
    ExpenseTotalSpanStyled,
    ExpenseTotalParaStyled,
} from "./ExpenseTotalStyled";
import BackExpenses from "../../functions/LocalStoreSave/LocalSoreBack";

const BackTotalAmount = BackExpenses("expense");

const RenderTotal = () => {
    return (
        <>
            <ExpenseTotalBoxStyled>
                <ExpenseTotalParaStyled>
                    income :
                    <ExpenseTotalSpanStyled>2000</ExpenseTotalSpanStyled>
                </ExpenseTotalParaStyled>
                <ExpenseTotalParaStyled>
                    total :<ExpenseTotalSpanStyled>1000</ExpenseTotalSpanStyled>
                </ExpenseTotalParaStyled>
                <ExpenseTotalParaStyled>
                    expense :
                    <ExpenseTotalSpanStyled>1000</ExpenseTotalSpanStyled>
                </ExpenseTotalParaStyled>
            </ExpenseTotalBoxStyled>
        </>
    );
};
export default RenderTotal;
