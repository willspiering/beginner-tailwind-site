import React from "react";

export default function Bubbles() {
	return (
		<>
			<div className="absolute bg-gradient-to-br from-teal-100 to-teal-200 w-64 h-64 rounded-full opacity-50"></div>
			<div className="absolute ml-10 mt-10 bg-gradient-to-br from-purple-100 to-purple-200 w-64 h-64 rounded-full opacity-50"></div>
			<div className="absolute ml-24 bg-gradient-to-br from-red-100 to-red-200 w-64 h-64 rounded-full opacity-50"></div>
		</>
	);
}
