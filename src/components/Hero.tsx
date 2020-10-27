import React from "react";

export default function Hero() {
	return (
		<div className="relative">
			{/* purple bar section */}
			<div className="absolute bottom-0 inset-x-0  h-64 bg-purple-700"></div>

			<div className="container px-6 py-24 mx-auto text-center lg:px-0">
				{/* heading */}
				<h1 className="mb-4 text-5xl lg:text-6xl font-extrabold">
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">Beginner</span>
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-600 to-purple-500">
						Tailwind
					</span>
				</h1>

				{/* paragraph */}
				<p className="mb-8 text-lg lg:text-2xl text-gray-700">
					Make good looking designs quickly. All without a single line of custom CSS.
				</p>

				{/* large c2a button */}
				<a
					href="#"
					className="inline-block px-12 py-3 mb-16 lg:mb-32 text-purple-100 hover:text-white bg-purple-400 rounded shadow-lg hover:shadow-2xl bg-gradient-to-br from-purple-400 to-purple-700 hover:to-purple-600 font-bold text-lg tracking-wide transition duration-500"
				>
					Get the Course
				</a>

				{/* teaser image */}
				<div className="relative">
					<img
						src="https://i.imgur.com/wysbBMS.png"
						alt="teaser image"
						className="rounded-lg shadow-2xl border-4 border-purple-400"
					/>
					{/* teaser image info box */}
					<div className="lg:absolute top-0 right-0 lg:transform lg:translate-x-4 lg:-translate-y-4 bg-yellow-100 text-left py-4 px-8 mt-8 lg:mt-0 rounded shadow-lg text-yellow-800 border-t-4 border-yellow-500">
						<p>
							<strong>We'll create BeginnerTailwind.com</strong>{" "}
							<span className="opacity-50">(it's the site you're on now)</span>
						</p>
						<p>We'll do it all without a single line of custom CSS!</p>
					</div>
				</div>
			</div>
		</div>
	);
}
