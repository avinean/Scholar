import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    
    input {
		border: none;
		border-bottom: 1px solid #f1a3d4;
		min-height: 23px;
		width: 400px;
		line-height: 23px;
		padding-left: 10px;
		outline: none;
		word-wrap: break-word;
	}
`,
CheckBox = styled.div`
	position: relative;
	min-width: 20px;
	width: 20px;
	height: 20px;
	margin: 0 10px;
	box-shadow: 0 0 5px 0 #713131;
	border-radius: 4px;
	
	&:hover {
		box-shadow: 0 0 10px 0 #0a25c0;
	}
`,
RadioBox = styled.div`
	min-width: 20px;
    width: 20px;
    height: 20px;
    padding: 3px;
    margin: 0 10px;
    box-shadow: 0 0 5px 0 #713131;
    border-radius: 50%;
    
    &:hover {
		box-shadow: 0 0 10px 0 #0a25c0;
	}
`,
CI = styled.i`
	position: absolute;
	top: -4px;
	left: -1px;
	text-align: center;
	font-size: 25px;
	color: green;
`,
RI = styled.i`
	display: block;
	text-align: center;
	font-size: 14px;
	color: #713131;
`;

export {Wrapper, CheckBox, RadioBox, CI, RI};