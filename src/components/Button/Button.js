import PropTypes from "prop-types";
import { StyledButton } from "./styled";

const Button = ({ children, color, bg, fontSize, loading, height }) => {
  return (
    <StyledButton
      color={color}
      background={bg}
      fontSize={fontSize}
      disabled={loading && true}
      height={height}
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
};

export default Button;
