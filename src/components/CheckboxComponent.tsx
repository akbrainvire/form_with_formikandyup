import React, { ChangeEvent } from "react";
import { CheckboxInput, CheckboxLabel, Input } from "./styles/InputStyle";

const CheckboxComponent = (props: any) => {
  //   let togglev = props.values;
  //   console.log(togglev);
  //   const [toggleValue, setToggleValue] = useState("");

  //   const handleToggleChange = (data: string) => {
  //     console.log(data);
  //     if (toggleValue === data) {
  //       setToggleValue("");
  //     } else {
  //       setToggleValue(data);
  //     }
  //   };
  return (
    <>
      {/* {console.log(props.values, props.label)} */}
      {props.type === "checkbox" ? (
        <CheckboxLabel htmlFor={props.htmlFor}>
          <CheckboxInput
            value={props.label}
            id={props.id}
            onChange={(e) => {
              //   handleToggleChange(props.label);
              props.handleChange(e);
            }}
            type="checkbox"
            name={props.name}
            checked={props.values.toggle[0] === props.label}
          />
          {props.label}
        </CheckboxLabel>
      ) : (
        <Input
          id={props.id}
          onChange={props.handleChange}
          type="text"
          name={props.name}
        />
      )}
    </>
  );
};

export default CheckboxComponent;
