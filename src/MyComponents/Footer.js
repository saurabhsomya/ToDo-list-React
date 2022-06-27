import React from "react";

export default function Footer() {
	let footerStyle = {
		position: "fixed",
		bottom: "0vh",
		width: "100%",
		borderTop: "2px solid red",
	};
	return (
		<div className="bg-dark text-light text-center py-2" style={footerStyle}>
			<span>Copyright &copy; MyTodoList.com</span>
		</div>
	);
}
