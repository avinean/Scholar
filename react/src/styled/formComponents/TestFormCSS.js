import styled from 'styled-components';

const TestWrap = styled.div`
	
`,

Title = styled.p`
    border-bottom: 1px solid grey;
    font-size: 20px;
`,

Text = styled.p`
    background: linear-gradient(0.25turn,#babae2, #fff);
`,

Area = styled.textarea`
    display: block;
    width: 100%;
    min-height: 100px;
    box-shadow: 0 0 5px 0 #58606b;
    padding: 10px;
    font-style: italic;
    word-wrap: break-word;
    user-select: text;
`;

export {TestWrap, Title, Text, Area};