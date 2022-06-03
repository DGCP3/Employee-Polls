import PropTypes from "prop-types";
import { Label, Radio } from "./style";

const InputRadio = ({
  value,
  label,
  name,
  disabled,
  onChange,
  checked,
  optColor,
}) => {
  console.log(optColor);
  return (
    <div style={{ position: "relative" }}>
      <Radio
        type={"radio"}
        value={value}
        id={value}
        name={name}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
      />
      <Label htmlFor={value} optColor={optColor}>
        {label}
      </Label>
    </div>
  );
};
InputRadio.prototype = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default InputRadio;
