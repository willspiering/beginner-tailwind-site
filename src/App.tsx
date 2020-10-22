import React from "react";
import logo from "./logo.svg";

function App() {
	return (
		<div className="flex flex-col items-center justify-center py-20 px-40 bg-blue-800 min-h-screen">
			<img src={logo} alt="React logo" />
			<h1 className="text-center text-6xl font-bold text-blue-400">React with Tailwind</h1>
		</div>
	);
}

export default App;
