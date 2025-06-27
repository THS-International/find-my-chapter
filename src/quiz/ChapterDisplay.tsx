import type { Chapters, ProgramType } from "../types";
import showChapterInfo from "./ChapterInfo";
import { exchangePrograms, programMap, type Program } from "./ProgramMap";

type Props = {
	programmeType?: string;
	setSurveyProgress: (progress: number) => void;
	programme: string;
};

function ChapterDisplay({
	setSurveyProgress,
	programmeType,
	programme,
}: Props) {

	const getChapter = (programmeType: ProgramType, programme: string) => {
		if (programmeType === "phd") {
			return "Dr";
		}
		if (programmeType === "exchange") {
			const exchangeProgram = exchangePrograms.find(
				(p) => p.name === programme
			) as { name: string; chapter: Chapters };
			return exchangeProgram.chapter as Chapters;
		}
		const program = (programMap[programmeType] as Program[]).find(
			(p: Program) => {
				return p.code === programme.slice(0, 5);
			}
		) as Program;
		console.log(program);
		return program.chapter as Chapters;
	};

	return (
		<div className="text-white flex justify-center mb-8 items-center place-self-center flex-col">
			<div>
				{showChapterInfo(getChapter(programmeType as ProgramType, programme))}
				<div className="flex justify-center">
					<button
						className="bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-8 mt-10 rounded-3xl text-4xl ml-4"
						onClick={() => setSurveyProgress(0)}
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}

export default ChapterDisplay;
