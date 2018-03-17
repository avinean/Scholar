import styled from 'styled-components';

const Button = styled.div`
  margin: 3vmin 0;
  padding: 2vmin;
  background-color: #f26c0d;
  color: #101826;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color .5s;
    &:focus {
        outline: none;
        background-color: #f2460d;
    }
`;

export default Button;