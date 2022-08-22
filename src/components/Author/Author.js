import multiavatar from '@multiavatar/multiavatar'
import PropTypes from 'prop-types'
import { AuthorStyle, Avatar } from './style'

export default function Author({ name, timestamp, color, fontSize, seed }) {
  return (
    <AuthorStyle color={color} fontSize={fontSize}>
      {seed && (
        <Avatar
          fontSize={'0.1rem'}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(
            multiavatar(seed)
          )}`}
        />
      )}
      @{name} at: {new Date(timestamp).toLocaleDateString()}
    </AuthorStyle>
  )
}
Author.prototype = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
}
