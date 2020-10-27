import React from "react";

export default function HeaderSection() {
	return (
		<div className="text-gray-600 relative">
			<div className="container flex justify-between px-10 py-6 mx-auto">
				{/* left header section */}
				<div className="flex items-center space-x-4">
					<a href="#" className="text-2xl font-bold text-teal-800">
						Beginner Tailwind
					</a>
					<a href="#" className="hidden hover:text-gray-900 lg:inline-block">
						About
					</a>
					<a href="#" className="hidden hover:text-gray-900 lg:inline-block">
						What You'll Learn
					</a>
					<a href="#" className="hidden hover:text-gray-900 lg:inline-block">
						Pricing
					</a>
					<a href="#" className="hidden hover:text-gray-900 lg:inline-block">
						Faq
					</a>
				</div>
				{/* Right header section */}
				<div className="flex items-center space-x-4">
					<a href="#" className="hover:text-gray-900">
						Login
					</a>
					<a
						href="#"
						className="hidden p-3 text-purple-700 transition duration-500 bg-purple-300 rounded shadow lg:inline-block hover:shadow-xl hover:text-purple-600 hover:bg-purple-200"
					>
						Get the Course
					</a>
				</div>
			</div>
		</div>
	);
}
