import React, { ChangeEvent } from "react";
import { CheckboxInput, CheckboxLabel } from "./styles/InputStyle";

interface Props {
  type: string;
  id: string;
  htmlFor: string;
  name: string;
  values: any;
  label: string;
  handleChange: (e: ChangeEvent) => void;
}

const RadioButtonComponent = (props: Props) => {
  return (
    <CheckboxLabel htmlFor={props.htmlFor}>
      <CheckboxInput
        value={props.label}
        id={props.id}
        onChange={(e) => {
          //   handleToggleChange(props.label);
          props.handleChange(e);
        }}
        type="radio"
        name={props.name}
        checked={props.values.selectedRadioOption === props.label}
      />
      {props.label}
    </CheckboxLabel>
  );
};

export default RadioButtonComponent;
