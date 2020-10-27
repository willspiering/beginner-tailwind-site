import React from "react";
import AboutSection from "./components/AboutSection";
import Bubbles from "./components/Bubbles";
import HeaderSection from "./components/HeaderSection";
import Hero from "./components/Hero";
import OverviewSection from "./components/OverviewSection";

function App() {
	return (
		<div className="">
			{/* ============================================ */}
			{/* Top Section (nav, header, hero)  ============================================ */}
			{/* ============================================ */}
			<div className="bg-gradient-to-br from-white to-gray-300">
				{/* left circle decoration */}
				<div className="absolute top-0 left-0 transform translate-x-4 translate-y-4">
					<Bubbles />
				</div>
				{/* right circle decoration */}
				<div className="hidden lg:block absolute top-0 right-0 mr-48 transform -translate-x-64 translate-y-64">
					<Bubbles />
				</div>
				<HeaderSection />
				<Hero />
			</div>

			{/* ============================================ */}
			{/* overview section  ============================================ */}
			{/* ============================================ */}
			<OverviewSection />

			{/* ============================================ */}
			{/* about me section  ============================================ */}
			{/* ============================================ */}
			<AboutSection />

			{/* ============================================ */}
			{/* what you'll learn  ============================================ */}
			{/* ============================================ */}
			<div className="py-32 bg-gray-200 text-gray-700">
				<div className="container mx-auto px-10">
					<div className="relative">
						<h2 className="mb-24 text-4xl lg:text-6xl text-center font-bold text-purple-900">
							What You'll Learn In This Course
						</h2>
						<div className="absolute top-0 left-0 h-2 w-1/3 rounded bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-4"></div>
						<div className="absolute bottom-0 right-0 h-2 w-1/3 rounded bg-gradient-to-r from-purple-400 to-blue-400 transform translate-y-4"></div>
					</div>

					{/* grid area of things */}
					<div className="lg:grid grid-cols-6 gap-10 space-y-8 lg:space-y-0">
						<div className="col-span-2 border border-gray-700 rounded shadow-lg">
							<div className="flex items-center justify-between relative p-4 border-b border-gray-700">
								<h3 className="font-bold text-lg truncate">How to use Tailwind classes</h3>
								<div className="flex space-x-2">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
								</div>
							</div>
							<p className="p-4">We'll dive into the most important Tailwind classes and use them a TON.</p>
						</div>
						<div className="col-span-2 border border-gray-700 rounded shadow-lg">
							<div className="flex items-center justify-between relative p-4 border-b border-gray-700">
								<h3 className="font-bold text-lg truncate">How to use Tailwind classes</h3>
								<div className="flex space-x-2">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
								</div>
							</div>
							<p className="p-4">We'll dive into the most important Tailwind classes and use them a TON.</p>
						</div>
						<div className="col-span-2 border border-gray-700 rounded shadow-lg">
							<div className="flex items-center justify-between relative p-4 border-b border-gray-700">
								<h3 className="font-bold text-lg truncate">How to use Tailwind classes</h3>
								<div className="flex space-x-2">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
								</div>
							</div>
							<p className="p-4">We'll dive into the most important Tailwind classes and use them a TON.</p>
						</div>
						<div className="col-span-3 border border-gray-700 rounded shadow-lg">
							<div className="flex items-center justify-between relative p-4 border-b border-gray-700">
								<h3 className="font-bold text-lg truncate">How to use Tailwind classes</h3>
								<div className="flex space-x-2">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
								</div>
							</div>
							<p className="p-4">We'll dive into the most important Tailwind classes and use them a TON.</p>
						</div>
						<div className="col-span-3 border border-gray-700 rounded shadow-lg">
							<div className="flex items-center justify-between relative p-4 border-b border-gray-700">
								<h3 className="font-bold text-lg truncate">How to use Tailwind classes</h3>
								<div className="flex space-x-2">
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
								</div>
							</div>
							<p className="p-4">We'll dive into the most important Tailwind classes and use them a TON.</p>
						</div>
					</div>
				</div>
			</div>

			{/* ============================================ */}
			{/* what you'll build  ============================================ */}
			{/* ============================================ */}
			<div className="py-24 bg-gray-300 text-gray-600">
				<div className="container mx-auto px-10">
					<div className="mb-8 text-center">
						<h2 className="mb-2 text-5xl text-gray-800">What We'll Build</h2>
						<p className="text-lg text-gray-700">
							These components are things you'll have to create in every project.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
						<div className="flex bg-white rounded shadow">
							<div className="w-1/5 flex items-center justify-center text-3xl bg-red-500 rounded-l">😍</div>
							<div className="p-4">Buttons</div>
						</div>
						<div className="flex bg-white rounded shadow">
							<div className="w-1/5 flex items-center justify-center text-3xl bg-green-500 rounded-l">😍</div>
							<div className="p-4">Cards</div>
						</div>
						<div className="flex bg-white rounded shadow">
							<div className="w-1/5 flex items-center justify-center text-3xl bg-purple-500 rounded-l">😍</div>
							<div className="p-4">Header</div>
						</div>
						<div className="flex bg-white rounded shadow">
							<div className="w-1/5 flex items-center justify-center text-3xl bg-blue-500 rounded-l">😍</div>
							<div className="p-4">Footer</div>
						</div>
					</div>
				</div>
			</div>

			{/* ============================================ */}
			{/* pricing section  ============================================ */}
			{/* ============================================ */}
			<div className="relative bg-blue-600 py-32 text-blue-200">
				{/* gray divider box */}
				<div className="absolute top-0 inset-x-0 h-48 bg-gray-300"></div>

				<div className="container mx-auto px-10 flex flex-col lg:flex-row items-center lg:space-x-8 space-y-4 lg:space-y-0">
					{/* left box */}
					<div className="order-2 lg:order-1 w-full lg:w-1/3 pt-12 text-center lg:text-right space-y-2 text-lg">
						<p>
							<strong className="font-bold text-white text-xl">75 videos</strong> at a smooth pace
						</p>
						<p>
							<strong className="font-bold text-white text-xl">9.25 hours</strong> of learning + building
						</p>
						<p>
							<strong className="font-bold text-white text-xl">Source code</strong> and CodePens
						</p>
					</div>

					{/* pricing box */}
					<div className="relative order-1 lg:order-2 w-full lg:w-1/3 bg-white p-8 text-gray-800 rounded shadow-2xl border-8 border-purple-700 text-center space-y-4 transform hover:scale-105 transition duration-500">
						<div className="absolute top-0 inset-x-0 transform -translate-y-full flex items-end justify-center space-x-8">
							<div className="w-2 h-16 bg-red-500 mb-8 rounded transform -rotate-45 origin-bottom"></div>
							<div className="w-2 h-24 bg-yellow-500 mb-8 rounded"></div>
							<div className="w-2 h-16 bg-green-500 mb-8 rounded transform rotate-45 origin-bottom"></div>
						</div>

						<h4 className="text-gray-600 text-sm">
							Start Tailwind<span className="italic">-ing</span>!
						</h4>
						<div className="text-6xl text-purple-800 font-bold">
							<span className="opacity-25">$</span>47
						</div>
						<a
							href="#"
							className="block p-3 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 text-purple-800 rounded shadow hover:shadow-2xl transition duration-300"
						>
							Buy the Course
						</a>
					</div>

					{/* right box */}
					<div className="order-3 w-full lg:w-1/3 pt-12 space-y-2 text-lg text-center lg:text-left">
						<p>
							Use the code in <strong className="font-bold text-white text-xl">your projects</strong>
						</p>
						<p>
							<strong className="font-bold text-white text-xl">Access to Discord</strong> for support
						</p>
						<p>
							<strong className="font-bold text-white text-xl">Lifetime</strong> refund guarantee
						</p>
					</div>
				</div>
			</div>

			{/* ============================================ */}
			{/* faq section  ============================================ */}
			{/* ============================================ */}
			<div className="bg-gray-800 py-32 text-gray-400">
				<div className="container mx-auto px-10">
					<h2 className="text-3xl text-center font-bold mb-12">Frequently Asked Questions</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
						<div className="p-8 border-2 border-gray-500 rounded-lg">
							<h3 className="mb-3 text-gray-200 font-bold text-xl">Do I need to know CSS?</h3>
							<p>
								This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk
								through CSS concepts and why we're using certain classes all throughout the course so you don't
								need to be a CSS expert.
							</p>
						</div>
						<div className="p-8 border-2 border-gray-500 rounded-lg">
							<h3 className="mb-3 text-gray-200 font-bold text-xl">Do I need to know CSS?</h3>
							<p>
								This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk
								through CSS concepts and why we're using certain classes all throughout the course so you don't
								need to be a CSS expert.
							</p>
						</div>
						<div className="p-8 border-2 border-gray-500 rounded-lg">
							<h3 className="mb-3 text-gray-200 font-bold text-xl">Do I need to know CSS?</h3>
							<p>
								This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk
								through CSS concepts and why we're using certain classes all throughout the course so you don't
								need to be a CSS expert.
							</p>
						</div>
						<div className="p-8 border-2 border-gray-500 rounded-lg">
							<h3 className="mb-3 text-gray-200 font-bold text-xl">Do I need to know CSS?</h3>
							<p>
								This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk
								through CSS concepts and why we're using certain classes all throughout the course so you don't
								need to be a CSS expert.
							</p>
						</div>
						<div className="p-8 border-2 border-gray-500 rounded-lg">
							<h3 className="mb-3 text-gray-200 font-bold text-xl">Do I need to know CSS?</h3>
							<p>
								This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk
								through CSS concepts and why we're using certain classes all throughout the course so you don't
								need to be a CSS expert.
							</p>
						</div>
						<div className="p-8 border-2 border-gray-500 rounded-lg">
							<h3 className="mb-3 text-gray-200 font-bold text-xl">Do I need to know CSS?</h3>
							<p>
								This course is aimed at people that have some CSS knowledge and want to learn Tailwind. I do talk
								through CSS concepts and why we're using certain classes all throughout the course so you don't
								need to be a CSS expert.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* ============================================ */}
			{/* footer/newsletter section  ============================================ */}
			{/* ============================================ */}
			<div className="relative py-24 text-gray-700 bg-gradient-to-br from-white to-gray-300">
				<div className="absolute top-0 left-0 tranform translate-y-6 translate-x-6">
					<Bubbles />
				</div>
				<div className="relative container mx-auto px-10">
					{/* top footer */}
					<div className="lg:flex justify-between space-y-6 lg:space-y-0">
						{/* newsletter */}
						<div className="flex flex-col justify-center">
							<h4 className="mb-4 font-bold text-2xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
								Get updates on the course.
							</h4>
							<form action="" className="flex">
								<input
									type="email"
									className="w-full p-3 rounded-l outline-none border-2 border-r-0 border-gray-400 focus:border-purple-400 placeholder-gray-400"
								/>
								<button className="p-3 bg-purple-400 text-purple-100 rounded-r">Subscribe</button>
							</form>
						</div>
						{/* links */}
						<div className="text-center lg:text-right flex justify-center space-x-8">
							<div className="space-y-2">
								<p className="mb-3 font-bold text-gray-400 uppercase tracking-widest">Company</p>
								<a href="#" className="block hover:underline hover:text-gray-900">
									About
								</a>
								<a href="#" className="block hover:underline hover:text-gray-900">
									Blog
								</a>
								<a href="#" className="block hover:underline hover:text-gray-900">
									Careers
								</a>
							</div>
							<div className="space-y-2">
								<p className="mb-3 font-bold text-gray-400 uppercase tracking-widest">Company</p>
								<a href="#" className="block hover:underline hover:text-gray-900">
									About
								</a>
								<a href="#" className="block hover:underline hover:text-gray-900">
									Blog
								</a>
								<a href="#" className="block hover:underline hover:text-gray-900">
									Careers
								</a>
							</div>
						</div>
					</div>
					{/* bottom footer */}
					<div className="pt-4 mt-16 md:flex justify-between border-t border-gray-300 text-gray-600 text-sm text-center md:text-left space-y-4 md:space-y-0">
						{/* copyright */}
						<div>Copyright &copy; 2020</div>
						{/* links */}
						<div className="space-x-4">
							<a href="#">Discord</a>
							<a href="#">Twitter</a>
							<a href="#">Youtube</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
