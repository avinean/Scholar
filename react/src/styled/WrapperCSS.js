import styled from 'styled-components';

const Wrapper = styled.div`
font-size: 16px;
margin: 0;
padding: 0;
font-family: sans-serif;
background-color: #101826;
min-height: 100vh;
min-width: 100vw;
position: relative;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-between;

*::selection,
* *::selection {
  background-color: snow; 
}
`;

export default Wrapper;
