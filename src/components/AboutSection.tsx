import React from "react";

export default function AboutSection() {
	return (
		<div className="lg:pt-12 pb-24 bg-gray-300 lg:text-center">
			<div className="container mx-auto px-10">
				<h2 className="mb-3 text-3xl lg:text-6xl font-bold text-teal-900">About Me</h2>
				<p className="mb-12 text-base lg:text-xl leading-loose">
					Hey there! My name is Chris on Code and I founded a web dev tutorial site Scotch.io. We were able to grow to
					4M monthly pageviews and $300,000 yearly revenue. Scotch.io was acquired by DigitalOcean in November 2019.
					Nowadays I'm in search of the best ways to develop and design a business. Hope you enjoy this course and my
					other one MakeReactApps.com.
				</p>

				{/* videos */}
				<div className="lg:flex lg:space-x-8 space-y-8 lg:space-y-0 text-left">
					<div className="lg:w-1/2 bg-white border-2 border-gray-700 rounded shadow-xl">
						<p className="text-xl text-gray-700 p-4">
							I have a Getting started with Tailwind article on scotch.io and a 15 minute starter YouTube video.
						</p>
						<iframe
							className="w-full rounded-b"
							height="315"
							src="https://www.youtube.com/embed/6zIuAyLZPH0"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
					<div className="lg:w-1/2 bg-white border-2 border-gray-700 rounded shadow-xl">
						<p className="text-xl text-gray-700 p-4">
							I did a Build Your 1st Tailwind Site for Traversy Media on YouTube also.
						</p>
						<iframe
							className="w-full rounded-b"
							height="315"
							src="https://www.youtube.com/embed/6zIuAyLZPH0"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
