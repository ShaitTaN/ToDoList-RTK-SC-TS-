import { createGlobalStyle } from 'styled-components';
export const Global = createGlobalStyle`
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	outline: 0;
	list-style: none;
	text-decoration: none;
}

body{
	background: linear-gradient(90deg, rgba(121,9,9,1) 0%, rgba(255,0,108,1) 77%);
}
`