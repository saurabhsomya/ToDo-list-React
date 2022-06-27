import React, { useState } from "react";

export const AddTodo = (props) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const submit = (e) => {
		e.preventDefault(); //so page doesn't reload
		if (!title || !description) {
			alert("title or description cannot be blank");
		} else {
			props.onAdd(title, description);
			setTitle("");
			setDescription("");
		}
	};

	return (
		<div className=" container text-center my-3" style={{ width: "70%" }}>
			<h2>
				<b>Add to List</b>
			</h2>
			<form onSubmit={submit}>
				<div>
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						className="form-control"
						id="title"
						style={{ width: "25ch", margin: "auto" }}
					/>
				</div>
				<div className="mt-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input
						type="text"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						className="form-control"
						id="description"
						style={{ width: "50ch", margin: "auto" }}
					/>
				</div>
				<button type="submit" className=" mt-3 px-3 btn btn-sm btn-primary">
					Add
				</button>
			</form>
		</div>
	);
};
