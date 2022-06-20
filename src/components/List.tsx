import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import ListItem from "./ListItem";
import { Flex } from "./styled/Flex";
import { actions } from "../store/Slices/TodoSlice";

const StyledList = styled.div`
  width: 400px;
  min-height: 600px;
  margin: 0 auto;
  background-color: #e8e8e8;
	padding: 5px;
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  color: white;
  text-align: center;
  margin-top: 20px;
	margin-bottom: 20px;
`;

const StyledInput = styled.input`
  margin: 0 auto;
  width: 400px;
  height: 40px;
  font-size: 24px;
	border: none;
	background-color: #e8e8e8;
	padding: 5px;
	margin: 5px 0;
`;

const List: FC = () => {
  const { todos } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [searchedPosts, setSearchedPosts] = useState(todos);

  const createTodo = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value) {
      dispatch(
        actions.addTodo({
          id: Date.now(),
          title: value,
          completed: false,
        })
      );
      setValue("");
    }
  };

  const searchPosts = (query:string) => {
		const searchedPosts = todos.filter(todo => todo.title.includes(query.trim()))
		setSearchedPosts(searchedPosts)
	};

	useEffect(() => {
		searchPosts(query)
	}, [query, todos])

  return (
    <Flex direction="column">
      <StyledTitle>TODO LIST</StyledTitle>
      <StyledInput
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <StyledList>
        <ul>
          {searchedPosts.map((todo) => (
            <ListItem
              key={todo.id}
              title={todo.title}
              id={todo.id}
              completed={todo.completed}
            />
          ))}
        </ul>
      </StyledList>
			<StyledInput
        placeholder="add todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={createTodo}
      />
    </Flex>
  );
};

export default List;
