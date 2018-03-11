import styled from 'styled-components';

const HeaderTag = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    padding: 3vmin;
    box-sizing: border-box;
    background: linear-gradient(90deg, #f26c0d, #fa6938);
    color: #101826;
`,

Title = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 1.75em;
    cursor: default;
`,

A = styled.a`
    color: inherit;
    cursor: help;
`;

export {HeaderTag, Title, A};
