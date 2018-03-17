import styled from 'styled-components';

const RegFormTag = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  * { margin: 1vmin 0 }
`,

H2 = styled.h2`
  color: #B5B9BD;
  font-size: 1.5rem;
`,

Message = styled.span`
  min-height: 25px;
  font-size: 1rem;
  color: #f2460d;
`,

Input = styled.input`
  width: calc(25vmin + 50px);
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

export {RegFormTag, H2, Message};