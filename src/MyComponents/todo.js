import React from "react";

export default function Items({ todo, onDelete }) {
	return (
		<>
			<div className="my-3">
				<h4>{todo.title}</h4>
				<p>{todo.description}</p>
				<button type="button" className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>
					Delete
				</button>
				<hr />
			</div>
		</>
	);
}
