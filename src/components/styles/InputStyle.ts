import { styled } from "styled-components";

export const Input = styled.input<{ icon?: string }>`
  border: 1px solid black;
  padding: 15px;
  outline: none;
  margin: 1vw;

  background: ${(props) => (props?.icon ? `url(${props.icon})` : "none")};
  background-position: 10px center; /* Position the SVG on the left side */
  background-repeat: no-repeat;
  background-size: 27px 30px; /* Set the size of the SVG */

  padding-left: 45px;
`;

export const NameStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;

  & > input {
    width: 40%;
  }
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

export const StyledSelect = styled.select`
  padding: 13px;
  border: 1px solid black;
  margin: 1vw;
  background-color: transparent;
  width: 100%;

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

export const CheckboxLabel = styled.label`
  display: block;
  border: 1px solid black;
  padding: 15px;
  outline: none;
  margin: 0.2vw 1vw;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
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
  margin: 1vw;
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
