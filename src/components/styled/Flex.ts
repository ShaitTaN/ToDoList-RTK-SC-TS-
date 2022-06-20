import styled from "styled-components";

interface Props{
	justify?: string;
	align?: string;
	direction?: string;
}

export const Flex = styled.div<Props>`
	display: flex;
	justify-content: ${props => props.justify || 'center'};
	align-items: ${props => props.align || 'center'};
	flex-direction: ${props => props.direction || 'row'};
`