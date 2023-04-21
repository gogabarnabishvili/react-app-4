import { ButtonJoin } from "../Button/Button";
import LabelInput from "../label-input/LabelInput";
import SelectOption from "../select/SelectOption";
import { useState } from "react";
const option = ["expense", "income"];
const Filter = () => {
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [maxAmount, setMaxAmout] = useState("");
    const [minAmount, setMinAmout] = useState("");

    const onChangeDate = (e) => setDate(e.target.value);

    const onChangeCategory = (e) => setCategory(e.target.value);
    const onChangeMaxAmount = (e) => setMaxAmout(e.target.value);
    const onChangeMinAmount = (e) => setMinAmout(e.target.value);

    return (
        <>
            <LabelInput
                type="date"
                id="date"
                text="chose date"
                onChange={onChangeDate}
            />

            <SelectOption option={option} onChange={onChangeCategory} />
            <LabelInput
                type="number"
                id="minAmount"
                text="min amount"
                onChange={onChangeMaxAmount}
            />
            <LabelInput
                type="number"
                id="maxAmount"
                text="max amount"
                onChange={onChangeMinAmount}
            />
            <ButtonJoin>serch</ButtonJoin>
        </>
    );
};
export default Filter;
