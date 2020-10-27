import React from "react";

export default function OverviewSection() {
	return (
		<div className="bg-purple-700 pt-0 lg:pt-12 pb-24 relative">
			{/* grey bar section transition */}
			<div className="absolute bottom-0 inset-x-0 h-64 bg-gray-300"></div>

			<div className="relative container mx-auto px-10">
				<h2 className="mb-10 text-4xl lg:text-6xl font-bold text-purple-100">Writing CSS is tough stuff!</h2>
				<div className="lg:flex lg:space-x-16 space-y-8 lg:space-y-0">
					{/* left column */}
					<div className="lg:w-2/3 bg-white p-12 lg:p-16 rounded shadow-2xl text-gray-800 text-lg space-y-8 leading-relaxed">
						<p>
							Tailwind makes writing CSS easier and lets us customize our designs faster than any other CSS
							framework. If you want a CSS framework that has pre-built components, then Tailwind may not be for
							you. If you want a CSS framework that lets you design quickly and customize your site, then
							<strong className="font-bold text-teal-500"> Tailwind is gonna be a lot of fun.</strong>
						</p>
						<p>
							After using Bulma to build{" "}
							<a href="#" className="text-blue-500 hover:underline">
								Scotch.io
							</a>
							, my CSS files became littered with my own{" "}
							<code className="inline-block px-1 rounded bg-gray-200 text-red-700 font-mono text-xs">
								!important
							</code>{" "}
							classes to override the framework's styles. Tailwind doesn't have the{" "}
							<code className="inline-block px-1 rounded bg-gray-200 text-red-700 font-mono text-xs">
								!important
							</code>{" "}
							problem since all our elements are designed on the fly.
						</p>
						<p>
							<strong className="font-bold">Important Note</strong>: Tailwind lets us design quickly, but this
							doesn't mean that you don't need CSS knowledge however. To use Tailwind, you need to have a good
							understanding of CSS properties. In this course, we will learn Tailwind and we'll also learn CSS
							concepts to create good looking designs.{" "}
							<strong className="font-bold">Tailwind is the ultimate CSS shorthand</strong>, but we still need to
							learn the CSS, which we'll do in this course.
						</p>
						<p className="text-3xl italic relative">
							<span className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 scale-150 opacity-50 text-purple-600 text-6xl">
								"
							</span>
							This isn't just a Tailwind course. This is also a "learn how to design with CSS" course.
						</p>
						<p>
							The hardest things about learning Tailwind is memorizing the classes and also knowing which classes go
							well together. We'll be writing a lot of Tailwind in this course so that the repetition will help us
							commit Tailwind classes to memory.
						</p>
					</div>
					{/* right column */}
					<div className="flex-grow space-y-4 text-lg italic">
						<div className="p-10 rounded-lg bg-purple-800 text-purple-200">What classes should I use?</div>
						<div className="p-10 rounded-lg bg-purple-800 text-purple-200">How do I make things look good?</div>
						<div className="p-10 rounded-lg bg-purple-800 text-purple-200">My design looks basic?</div>
						<div className="p-10 rounded-lg bg-purple-800 text-purple-200">How do I do responsive?</div>
						<div className="p-10 rounded-lg bg-purple-800 text-purple-200">My typography looks bad?</div>
					</div>
				</div>
			</div>
		</div>
	);
}
