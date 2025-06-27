import { useEffect } from "react";
import type { ProgramType } from "../types";
import { exchangePrograms, programMap, type Program } from "./ProgramMap";

type Props = {
	programmeType?: string;
	setSurveyProgress: (progress: number) => void;
	setProgramme: (type: string) => void;
	programme: string;
};

function ProgrammeSelector({
	setSurveyProgress,
	programmeType,
	setProgramme,
	programme = "",
}: Props) {
	useEffect(() => {
		if (programmeType === "exchange") {
			setProgramme(exchangePrograms[0].name);
		} else {
			const programList = programMap[programmeType as ProgramType] as Program[];
			if (programList.length > 0) {
				setProgramme(`${programList[0].code}0`);
			}
		}
	});
	const buildProgrammeList = (programmeType: ProgramType) => {
		if (programmeType === "exchange") {
			const exchangeList = exchangePrograms.map((program, index) => (
				<option key={index} value={program.name}>
					{`${program.name}`}
				</option>
			));
			return <>{exchangeList}</>;
		}
		const programList = programMap[programmeType] as Program[];
		let count = 0;
		const returnlist = programList
			.sort((a, b) => a.name.localeCompare(b.name))
			.map((program) => {
				count++;
				return (
					<option key={count + program.code} value={`${program.code}${count}`}>
						{`${program.name} (${program.code})`}
					</option>
				);
			});
		return <>{returnlist}</>;
	};

	return (
		<div className="text-white flex justify-center mb-8 items-center place-self-center flex-col">
			<p>Select your programme</p>
			{/* if the text at select is long, instead of extending past the screen, put it over multiple lines */}
			<select
				className="text-ellipsis rounded bg-amber-300 dark:bg-amber-600 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 mt-4 mb-8 text-s md:text-l lg:text-xl mx-6 m-24 max-w-[75vw]"
				value={programme}
				onChange={(e) => {
					// console.log(e.target.value);
					setProgramme(e.target.value);
				}}
			>
				{buildProgrammeList(programmeType as ProgramType)}
			</select>
			<div>
				<button
					className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-3xl text-4xl"
					onClick={() => {
						setSurveyProgress(3);
					}}
				>
					Select
				</button>
				<button
					className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-3xl text-4xl ml-4"
					onClick={() => setSurveyProgress(1)}
				>
					Back
				</button>
			</div>
		</div>
	);
}

export default ProgrammeSelector;
