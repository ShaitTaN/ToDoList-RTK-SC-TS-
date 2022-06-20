import React, { FC } from "react";
import styled from "styled-components";
import { Flex } from "./styled/Flex";
import { AiOutlineClose } from 'react-icons/ai'
import { ITodo } from "../models/ITodo";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {actions} from '../store/Slices/TodoSlice'

interface IItemProps {
	active: boolean;
}

const StyledItem = styled.div<IItemProps>`
  border-bottom: 1px solid #a2cdff;
  flex-grow: 1;
	cursor: pointer;
	li{
		flex-grow: 1;
		position: relative;
		padding: 10px;
		overflow: hidden;
		font-size: 20px;
		&::before{
			content: '';
			position: absolute;
			display: block;
			height: 1px;
			background: #ff006c;
			left: 0;
			right: 0;
			top: 55%;
			transform: ${props => props.active ? 'translateX(0)' : 'translateX(-100%)'};
			transition: all .1s ease-in-out;
		}
	}
	svg{
		height: 24px;
		width: 24px;
	}
`;

const ListItem: FC<ITodo> = (props) => {
	const dispatch = useAppDispatch()

	const handleDelete = (e: React.MouseEvent,id:number) => {
		e.stopPropagation()
		dispatch(actions.removeTodo(id))
	}

	const handleComplete = (id:number) => {
		dispatch(actions.toggleCompleteTodo(id))
	}
  return (
    <StyledItem draggable active={props.completed} onClick={() => handleComplete(props.id)}>
      <Flex justify="space-around">
        <li>{props.title}</li>
        <AiOutlineClose  color="#ff006c" onClick={(e) => handleDelete(e, props.id)}/>
      </Flex>
    </StyledItem>
  );
};

export default ListItem;
