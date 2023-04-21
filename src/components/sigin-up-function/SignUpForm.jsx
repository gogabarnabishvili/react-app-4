import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LabelInput from "../label-input/LabelInput";
import { ButtonJoin } from "../Button/Button";
import saveExpenses from "../../functions/LocalStoreSave/LocalStoreSave";
import BackExpenses from "../../functions/LocalStoreSave/LocalSoreBack";

const BackUsersId = BackExpenses("users");
const SignUpForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);
    console.log(name, email, password);
    const sendRegForm = () => {
        if (name.length >= 4 && email !== "" && password.length >= 4) {
            const users = {
                name: name,
                email: email,
                password: password,
                id: BackUsersId ? BackUsersId.length + 1 : 1,
            };

            saveExpenses(users, "users");
            navigate("/sigIn");
            console.log("rame");
        }
    };
    return (
        <>
            <LabelInput
                text="name"
                type="text"
                id="name"
                onChange={onChangeName}
            />
            <LabelInput
                text="email"
                type="email"
                id="email"
                onChange={onChangeEmail}
            />
            <LabelInput
                text="password"
                type="password"
                id="password"
                onChange={onChangePassword}
            />
            <ButtonJoin onClick={sendRegForm}>send</ButtonJoin>
        </>
    );
};
export default SignUpForm;
