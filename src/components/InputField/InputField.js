import React from "react";
import PropTypes from "prop-types";
import { Input, Label } from "./styled";

const InputField = ({
  label,
  onchange,
  value = "",
  name,
  placeHolder,
  type,
  height,
  marginBlock,
  marginInline,
  ...rest
}) => {
  return (
    <>
      <Label mb={marginBlock}>
        {label}
        <Input
          placeholder={placeHolder}
          onChange={onchange}
          value={value}
          name={name || label}
          type={type}
          height={height}
          marginInline={marginInline}
          {...rest}
        />
      </Label>
    </>
  );
};
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.string,
  marginBlock: PropTypes.string,
  marginInline: PropTypes.string,
};
export default InputField;
