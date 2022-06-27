// import logo from './logo.svg'
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import ToDos from "./MyComponents/ToDos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";
import About from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	// database (array of objects)
	let inittodo;
	if (localStorage.getItem("todos") === null) {
		inittodo = [];
	} else {
		inittodo = JSON.parse(localStorage.getItem("todos"));
	}
	const [todos, setTodos] = useState(inittodo); //creating array with use state

	// adding a todo
	const onAdd = (title, description) => {
		let addedtodo = {
			title: title,
			description: description,
		};
		setTodos([...todos, addedtodo]); // added to array
		console.log("added item to array: ", addedtodo);
	};

	// removing a todo
	const onDelete = (todo) => {
		// let indexToBeDeleted = todos.indexOf(item)
		// todos.splice(indexToBeDeleted, 1)
		setTodos(
			todos.filter((e) => {
				return e !== todo; // imagine hourglass filter. Output will satisfy this condition
			})
		); // removed from array
		console.log("Deleted item from array: ", todo);
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos)); // added to localStorage
		console.log("local storage: ", localStorage.getItem("todos"));
	}, [todos]); // jese ही mere "todos" may kuch change हो. localStorage.setItem run kardo.

	return (
		// passing an array and a function to ToDos
		<Router>
			<Header searchBar={false} />
			<Routes>
				<Route exact path="/" element={
							<>
								<AddTodo onAdd={onAdd} />
								<p>{todos.length}</p>
								<hr style={{ margin: "auto 5%", border: "0.5px solid black" }} />
								<ToDos todos={todos} onDelete={onDelete} />
							</>
				}/>
				<Route exact path="/info" element={<About />}/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
