import React from "react";
import Items from "./todo";

export default function ToDos(props) {
	return (
		<div className=" container mt-3 mb-5" style={{ width: "70%" }}>
			<h2>
				<b>List</b>
			</h2>
			{props.todos.length === 0
				? ("wow such empty :)", localStorage.clear())
				: props.todos.map((todo) => {
						return (<Items todo={todo} key={todo.sno} onDelete={props.onDelete}/>);
				})}
		</div>
	);
}
