import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: grey;
  display: inline-block;
  margin: 10px 15px;
  font-family: sans-serif;
  font-size: 14px;
  transition: .2s;
  &:hover {
    color: white;
  }
  text-align: center;
  &:focus, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

export default StyledLink;