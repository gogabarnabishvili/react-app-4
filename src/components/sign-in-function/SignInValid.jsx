import { useState } from "react";
import LabelInput from "../label-input/LabelInput";
import { ButtonJoin } from "../Button/Button";
import BackExpenses from "../../functions/LocalStoreSave/LocalSoreBack";
import { Link, useNavigate } from "react-router-dom";
import saveExpenses from "../../functions/LocalStoreSave/LocalStoreSave";
const BackUsers = BackExpenses("users");

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const validSiginIn = () => {
        BackUsers.map((e) => {
            if (e.email === email && e.password === password) {
                const token = e.id;
                saveExpenses(token, "token");
                navigate("/");
            }
        });
    };
    const SignUpMove = () => {
        return navigate("/signup");
    };
    return (
        <>
            <h1>sign in</h1>
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
            <ButtonJoin onClick={validSiginIn}>join</ButtonJoin>
            <ButtonJoin type="button" onClick={SignUpMove}>
                sign up
            </ButtonJoin>
        </>
    );
};
export default SignIn;
