import PropTypes from "prop-types";
import { AuthorStyle } from "./style";

export default function Author({ name, timestamp, color, fontSize }) {
  return (
    <AuthorStyle color={color} fontSize={fontSize}>
      By @{name} asked at: {new Date(timestamp).toLocaleDateString()}
    </AuthorStyle>
  );
}
Author.prototype = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  color: PropTypes.string,
};
