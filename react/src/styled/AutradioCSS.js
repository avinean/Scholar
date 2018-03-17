import styled from 'styled-components';

const Autradio = styled.div`
width: calc(30vmin + 50px);
padding: 1.5vmin;
display: flex;
flex=flow: row nowrap;
justify-content: space-between;
font-size: 1.2rem;
color: #B5B9BD;

label {
  cursor: pointer;
}

input {
  cursor: pointer;
  transform: scale(2);
}
`;

export default Autradio;