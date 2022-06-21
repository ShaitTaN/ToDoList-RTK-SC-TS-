import styled  from 'styled-components';

interface Props{
	color?: string;
}

export const Button = styled.div<Props>`
	padding: 5px 0;
	margin: 5px;
	color: ${props => props.color || '#51a2ff'};
	cursor: pointer;
	/* border-bottom: 1px solid ${props => props.color || '#51a2ff'}; */
	transition: text-shadow .3s ease-in-out;
	:hover{
		text-shadow: 0px 0px 9px ${props => props.color || '#51a2ff'};
	}
`