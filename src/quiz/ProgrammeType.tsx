import type { ProgramType } from "../types";

type Props = {
	setProgrammeType: (type: ProgramType) => void;
	programmeType?: ProgramType;
	setSurveyProgress: (progress: number) => void;
};

function ProgrammeTypeSelector({
	setProgrammeType,
	setSurveyProgress,
	programmeType,
}: Props) {
	return (
		<div className="text-white flex justify-center mb-8 items-center place-self-center flex-col">
			<p className="w-screen text-center">
				Select your programme type. eg if you are studying a Master's degree,
				select Master's Degree
			</p>
			<select
				className="rounded bg-amber-300 dark:bg-amber-600 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 mt-4 mb-8 text-xl mx-6 m-24 max-w-[75vw]"
				value={programmeType}
				onChange={(e) => setProgrammeType(e.target.value as ProgramType)}
			>
				<option value="master">Full Master's Degree at KTH</option>
				<option value="exchange">Exchange Student</option>
				<option value="joint">Joint Programme (EIT, Nordic, etc.)</option>
				<option value="dual">Dual Degree</option>
				<option value="double">Double Degree</option>
				<option value="bachelor">3 year Bachelor's Degree</option>
				<option value="civil">5 year Civilingenjör</option>
				<option value="hogskol">3 year Högskolingenjör</option>
				<option value="phd">PhD Student</option>
			</select>
			<div>
				<button
					className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-3xl text-4xl"
					onClick={() => {
						if (programmeType === "phd") {
							setSurveyProgress(3);
						} else {
							setSurveyProgress(2);
						}
					}}
				>
					Next
				</button>
				<button
					className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-3xl text-4xl ml-4"
					onClick={() => setSurveyProgress(0)}
				>
					Back
				</button>
			</div>
		</div>
	);
}

export default ProgrammeTypeSelector;
