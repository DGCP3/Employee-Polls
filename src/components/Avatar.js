import multiavatar from "@multiavatar/multiavatar";
import React from "react";
import styled from "styled-components";
const AvatarImage = styled.img`
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "50px"};
  border-radius: 50%;
`;

const Avatar = ({ seed, width, height }) => {
  return (
    <AvatarImage
      width={width}
      height={height}
      src={`data:image/svg+xml;utf8,${encodeURIComponent(multiavatar(seed))}`}
    />
  );
};

export default Avatar;
