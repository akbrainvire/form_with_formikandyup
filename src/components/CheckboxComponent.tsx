import React from "react";
import { CheckboxLabel, Input } from "./styles/InputStyle";

// interface Props {
//     type: string,

// }
const CheckboxComponent = (props: any) => {
  return (
    <>
      {props.type === "checkbox" ? (
        <CheckboxLabel htmlFor={props.htmlFor}>
          <Input
            id={props.id}
            onChange={props.onChange}
            type="checkbox"
            name={props.name}
          />
          {props.label}
        </CheckboxLabel>
      ) : (
        <Input
          id={props.id}
          onChange={props.onChange}
          type="text"
          name={props.name}
        />
      )}
    </>
  );
};

export default CheckboxComponent;
