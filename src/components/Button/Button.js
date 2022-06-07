import PropTypes from "prop-types";
import { StyledButton } from "./styled";

const Button = ({
  children,
  color,
  bg,
  fontSize,
  loading,
  disabled,
  height,
  width,
  margin,
  padding,
  ...rest
}) => {
  return (
    <StyledButton
      color={color}
      background={bg}
      fontSize={fontSize}
      disabled={(loading && true) || disabled}
      height={height}
      margin={margin}
      width={width}
      padding={padding}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </StyledButton>
  );
};
Button.protoTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  bg: PropTypes.string,
  fontSize: PropTypes.string,
  loading: PropTypes.bool,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
