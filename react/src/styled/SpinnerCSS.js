import styled, {keyframes} from 'styled-components';

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  font-size: 35px;
  color: #f26c0d;
  animation: ${rotate360} 2s linear infinite;
`;




export default Spinner;
