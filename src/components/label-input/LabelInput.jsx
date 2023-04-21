import { LabelStyled, InputStyled } from "./LabelInputStyled";

const LabelInput = (props) => {
    return (
        <LabelStyled id={props.id} name={props.name}>
            {props.text}
            <InputStyled
                name={props.name}
                type={props.type}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
            ></InputStyled>
        </LabelStyled>
    );
};
export default LabelInput;
