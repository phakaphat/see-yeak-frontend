import React from "react";
import { Button, Input } from "react-rainbow-components";

function InputField({lable, placeholder}) {
  return (
    <div style={{margin: "20px 0px 10px 0"}}>
      <Input
        className="rainbow-p-around_medium"
        label={lable}
        labelAlignment="left"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
