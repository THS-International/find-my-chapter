import { useState } from "react";
import ProgrammeTypeSelector from "./ProgrammeType";
import type { ProgramType } from "../types";
import ProgrammeSelector from "./ProgramSelect";
import ChapterDisplay from "./ChapterDisplay";

function ChapterFinder() {
	const [surveyProgress, setSurveyProgress] = useState(0);
	const [programmeType, setProgrammeType] = useState<ProgramType>("master");
	const [programme, setProgramme] = useState<string>("");

	const returnStage = () => {
		if (surveyProgress === 0) {
			return (
				<button
					className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-3xl text-4xl"
					onClick={() => setSurveyProgress(1)}
				>
					Start
				</button>
			);
		}
		if (surveyProgress === 1) {
			return (
				<ProgrammeTypeSelector
					setProgrammeType={setProgrammeType}
					programmeType={programmeType}
					setSurveyProgress={setSurveyProgress}
				/>
			);
		}
		if (surveyProgress === 2) {
			return (
				<ProgrammeSelector
					setSurveyProgress={setSurveyProgress}
					programmeType={programmeType}
					setProgramme={setProgramme}
					programme={programme}
				/>
			);
		}
		if (surveyProgress === 3) {
			return (
				<ChapterDisplay
					setSurveyProgress={setSurveyProgress}
					programmeType={programmeType}
					programme={programme}
				/>
			);
		}
		return <></>;
	};

	return (
		<div className="flex justify-center mt-8 items-center place-self-center">
			{returnStage()}
		</div>
	);
}

export default ChapterFinder;
