import "./App.css";
import ChapterFinder from "./quiz/ChapterFinder";

function App() {
	return (
		<div className="min-h-screen flex flex-col bg-gray-300 dark:bg-gray-800">
			<h1 className="text-6xl font-bold dark:text-cyan-100 text-cyan-800 text-center mt-8">
				Find your THS Chapter!
			</h1>

			<div className="flex-grow flex items-start justify-center">
				<ChapterFinder />
			</div>

			<footer className="w-full flex flex-col items-center mt-8">
				<img
					src="/ths-logo.png"
					alt="THS Logo"
					className="mx-auto w-48 sm:w-75 h-auto"
				/>
				<p className="text-center text-gray-700 dark:text-gray-200 mt-2 mb-4 w-full px-4">
					Created by Dylan Horn Kreiner in 2025. For any issues (like your
					programme not being listed), please contact{" "}
					<a href="mailto:international@ths.kth.se" className="underline">
						international@ths.kth.se
					</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
