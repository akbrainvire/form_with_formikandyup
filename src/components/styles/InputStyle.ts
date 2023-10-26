import { Field } from "formik";
import { styled } from "styled-components";

export const Input = styled.input<{ icon?: string }>`
  border: 1px solid black;
  padding: 15px;
  outline: none;
  margin: 1vw 0;
  box-sizing: border-box;

  background: ${(props) => (props?.icon ? `url(${props.icon})` : "none")};
  background-position: 10px center;
  background-repeat: no-repeat;
  background-size: 27px 30px;

  padding-left: 45px;
`;

export const SingleCheckBox = styled(Field)`
  appearance: none;
  width: 1.2em;
  margin-right: 10px;
  height: 1.2em;
  border: 1px solid #fff;
  border-radius: 40%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #000;
    border-color: white;
  }
`;

export const NameStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;

  & > input {
    width: 40%;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 15px;
  margin-bottom: 20px;
`;
export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  /* & > input {
    width: 22vw;
  } */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label<{ mb?: string }>`
  color: #313131;
  font-size: 18px;
  margin-bottom: ${(props) => (props?.mb ? `${props.mb}` : null)};
`;

export const StyledSelect = styled.select<{ icon?: string }>`
  padding: 13px;
  padding-left: 45px;
  border: 1px solid black;
  margin: 1vw 0;
  background-color: transparent;
  background: ${(props) => (props?.icon ? `url(${props.icon})` : "none")};
  background-position: 10px center;
  background-repeat: no-repeat;
  background-size: 27px 30px;
  &:focus {
    outline: none;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;

  & > input {
    width: 40%;
  }
`;

export const CheckboxLabel = styled.label<{ border?: string }>`
  display: flex;
  border: ${(props) => (props.border ? props.border : `1px solid black`)};
  padding: 15px 0;
  flex-direction: row;
  outline: none;
  margin: 0.5vw 0;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 1.2em;
  margin-right: 10px;
  height: 1.2em;
  border: 1px solid #000;
  border-radius: 40%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #000;
    border-color: white;
  }
`;

export const TandCondition = styled.div`
  margin-top: 1.5vw;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  color: ${(props) => (props.disabled ? "black" : "white")};
  background-color: ${(props) => (props.disabled ? "grey" : "black")};
  outline: none;
  margin: 1vw 0;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: 1px solid black;
`;

export const ErrorBox = styled.span`
  color: red;
  font-size: 14px;
  position: relative;
  left: 15px;
`;
export const TANDC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;
