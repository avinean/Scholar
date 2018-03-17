import styled from 'styled-components';

const Input = styled.input`
  width: calc(30vmin + 50px);
  border: none;
  padding: 1.5vmin;
  background-color: #9ea6ae;
  border-bottom: 2px solid transparent;
  color: #101826;
  font-size: 1.2rem;
  transition: border .5s;
    &:focus {
        outline: none;
        border-bottom: 2px solid #f26c0d;
    }
`;

export default Input;