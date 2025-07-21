import type { ProgramType, Chapters } from "../types";
export interface Program {
	code: string;
	name: string;
	chapter: Chapters;
}
const programMap: Partial<Record<ProgramType, Program[]>> = {
	bachelor: [
		{
			code: "TCOMK",
			name: "Information and Communication Technology",
			chapter: "IT",
		},
		{
			code: "TFAFK",
			name: "Property Development and Agency",
			chapter: "S",
		},
		{
			code: "TFOFK",
			name: "Real Estate and Finance",
			chapter: "S",
		},
	],
	hogskol: [
		{
			code: "TIDAB",
			name: "Computer Engineering",
			chapter: "IT",
		},
		{
			code: "TIBYH",
			name: "Constructional Engineering and Design",
			chapter: "IsB",
		},
		{
			code: "TIDAA",
			name: "Computer Engineering",
			chapter: "IsF",
		},
		{
			code: "TIELA",
			name: "Electrical Engineering",
			chapter: "IsF",
		},
		{
			code: "TIMEL",
			name: "Medical Technology",
			chapter: "IsF",
		},
		{
			code: "TITEH",
			name: "Engineering and Economics",
			chapter: "IsF",
		},
		{
			code: "TIKED",
			name: "Chemical Engineering",
			chapter: "K",
		},
		{
			code: "TINTE",
			name: "Industrial Technology",
			chapter: "P",
		},
		{
			code: "CTKMK",
			name: "Engineering Chemistry, Mid Sweden University - KTH",
			chapter: "K",
		},
		{
			code: "TITEH_TIED",
			name: "Engineering and Economics - Electronics and Computer Engineering track",
			chapter: "IT",
		},
		{
			code: "TITEH_TIDB",
			name: "Engineering and Economics - Computer Engineering track",
			chapter: "IT",
		},
		{
			code: "TITEH_TIBY",
			name: "Engineering and Economics - Construction Engineering and Design track",
			chapter: "IsB",
		},
	],
	civil: [
		{
			code: "CMATD",
			name: "Materials Design and Engineering",
			chapter: "B",
		},
		{
			code: "CDATE",
			name: "Computer Science and Technology",
			chapter: "D",
		},
		{
			code: "CELTE",
			name: "Electrical Engineering",
			chapter: "E",
		},
		{
			code: "CTFYS",
			name: "Engineering Physics",
			chapter: "F",
		},
		{
			code: "CINEK",
			name: "Industrial Engineering and Management",
			chapter: "I",
		},
		{
			code: "CINTE",
			name: "Information and Communication Technology",
			chapter: "IT",
		},
		{
			code: "CBIOT",
			name: "Biotechnology",
			chapter: "K",
		},
		{
			code: "CTKEM",
			name: "Engineering Chemistry",
			chapter: "K",
		},
		{
			code: "CDEPR",
			name: "Design and Product Realisation",
			chapter: "M",
		},
		{
			code: "CMAST",
			name: "Mechanical Engineering",
			chapter: "M",
		},
		{
			code: "CMETE",
			name: "Media Technology",
			chapter: "Me",
		},
		{
			code: "CMEDT",
			name: "Medical Engineering",
			chapter: "MiT",
		},
		{
			code: "COPEN",
			name: "Open Entrance",
			chapter: "OPEN",
		},
		{
			code: "CSAMH",
			name: "Civil Engineering and Urban Management",
			chapter: "S",
		},
		{
			code: "CFATE",
			name: "Vehicle Engineering",
			chapter: "T",
		},
		{
			code: "CITEH",
			name: "Industrial Technology and Sustainability",
			chapter: "P",
		},
		{
			code: "CENMI",
			name: "Energy and Environment",
			chapter: "W",
		},
		{
			code: "CTMAT",
			name: "Engineering Mathematics",
			chapter: "F",
		},
	],
	double: [
		{
			code: "CBIOT",
			name: "Biotechnology",
			chapter: "K",
		},
		{
			code: "CDATE",
			name: "Computer Science and Engineering",
			chapter: "D",
		},
		{
			code: "CELTE",
			name: "Electrical Engineering",
			chapter: "E",
		},
		{
			code: "CFATE",
			name: "Vehicle Engineering",
			chapter: "T",
		},
		{
			code: "CINEK",
			name: "Industrial Engineering and Management",
			chapter: "I",
		},
		{
			code: "CINTE",
			name: "Information and Communication Technology",
			chapter: "IT",
		},
		{
			code: "CMAST",
			name: "Mechanical Engineering",
			chapter: "M",
		},
		{
			code: "CMEDT",
			name: "Medical Engineering",
			chapter: "MiT",
		},
		{
			code: "CSAMH",
			name: "Civil Engineering and Urban Management",
			chapter: "S",
		},
		{
			code: "CTFYS",
			name: "Engineering Physics",
			chapter: "F",
		},
		{
			code: "CTKEM",
			name: "Engineering Chemistry",
			chapter: "K",
		},
	],
	dual: [
		{
			code: "TAEEM",
			name: "Aerospace Engineering",
			chapter: "T",
		},
		{
			code: "TTMAM",
			name: "Applied and Computational Mathematics",
			chapter: "F",
		},
		{
			code: "TIPUM",
			name: "Engineering Design",
			chapter: "M",
		},
		{
			code: "TTMVM",
			name: "Engineering Materials Science",
			chapter: "B",
		},
		{
			code: "TTFYM",
			name: "Engineeering Physics",
			chapter: "F",
		},
		{
			code: "TNEEM",
			name: "Nuclear Energy Engineering",
			chapter: "F",
		},
		{
			code: "TPRMM",
			name: "Production Engineering and Management",
			chapter: "M",
		},
		{
			code: "TSUEM",
			name: "Sustainable Energy Engineering",
			chapter: "W",
		},
		{
			code: "TSCRM",
			name: "Systems, Control and Robotics",
			chapter: "E",
		},
		{
			code: "TFORM",
			name: "Vehicle Engineering",
			chapter: "T",
		},
	],
	joint: [
		{
			code: "TDSEM",
			name: "Decentralized Smart Energy Systems",
			chapter: "W",
		},
		{
			code: "TIVNM",
			name: "ICT Innovation (EIT Digital)",
			chapter: "IT",
		},
		{
			code: "TTMIM",
			name: "Transport, Mobility and Innovation (EIT Urban Mobility)",
			chapter: "S",
		},
		{
			code: "TIHLM",
			name: "Innovative Technology for Healthy Living (EIT Health)",
			chapter: "MiT",
		},
		{
			code: "TIETM",
			name: "Smart Electrical Networks and Systems (EIT InnoEnergy)",
			chapter: "W",
		},
		{
			code: "TIETM",
			name: "Renewable Energy (EIT InnoEnergy)",
			chapter: "W",
		},
		{
			code: "TMESM",
			name: "Environomical Pathways for Sustainable Energy Systems (EIT InnoEnergy)",
			chapter: "W",
		},
		{
			code: "TIEEM",
			name: "Innovative Sustainable Energy Engineering (Nordic Five Tech)",
			chapter: "W",
		},
		{
			code: "TDTNM",
			name: "Computer Simulations for Science and Engineering (COSSE)",
			chapter: "F",
		},
		{
			code: "TCOMM",
			name: "Security and Cloud Computing (SECCLO)",
			chapter: "IT",
		},
		{
			code: "TMMMM",
			name: "Polymer Technology (Nordic Five Tech)",
			chapter: "K",
		},
		{
			code: "TDSEM",
			name: "Decentralized Smart Energy Systems (DENSYS)",
			chapter: "W",
		},
	],
	master: [
		{
			code: "TLODM",
			name: "Architectural Lighting Design",
			chapter: "A",
		},
		{
			code: "TARKM",
			name: "Architecture",
			chapter: "A",
		},
		{
			code: "TTMVM",
			name: "Engineering Materials Science",
			chapter: "B",
		},
		{
			code: "TCSCM",
			name: "Computer Science",
			chapter: "D",
		},
		{
			code: "TMAIM",
			name: "Machine Learning",
			chapter: "D",
		},
		{
			code: "TELPM",
			name: "Electric Power Engineering",
			chapter: "E",
		},
		{
			code: "TSCRM",
			name: "Systems, Control and Robotics",
			chapter: "E",
		},
		{
			code: "TINNM",
			name: "Information and Network Engineering",
			chapter: "E",
		},
		{
			code: "TNTEM",
			name: "Nanotechnology",
			chapter: "E",
		},
		{
			code: "TEFRM",
			name: "Electromagnetics, Fusion and Space Engineering",
			chapter: "E",
		},
		{
			code: "TMAKM",
			name: "Mathematics",
			chapter: "F",
		},
		{
			code: "TNEEM",
			name: "Nuclear Energy Engineering",
			chapter: "F",
		},
		{
			code: "TTFYM",
			name: "Engineeering Physics",
			chapter: "F",
		},
		{
			code: "TTMAM",
			name: "Applied and Computational Mathematics",
			chapter: "F",
		},
		{
			code: "TIEMM",
			name: "Industrial Engineering and Management",
			chapter: "I",
		},
		{
			code: "TIVNM",
			name: "ICT Innovation",
			chapter: "IT",
		},
		{
			code: "TEBSM",
			name: "Embedded Systems",
			chapter: "IT",
		},
		{
			code: "TSEDM",
			name: "Software Engineering of Distributed Systems",
			chapter: "IT",
		},
		{
			code: "TCOMM",
			name: "Communication Systems",
			chapter: "IT",
		},
		{
			code: "TMTLM",
			name: "Molecular Techniques in Life Science",
			chapter: "K",
		},
		{
			code: "TIMBM",
			name: "Industrial and Environmental Biotechnology",
			chapter: "K",
		},
		{
			code: "TKEMM",
			name: "Chemical Engineering for Energy and Environment",
			chapter: "K",
		},
		{
			code: "TMBIM",
			name: "Medical Biotechnology",
			chapter: "K",
		},
		{
			code: "TMMMM",
			name: "Macromolecular Materials",
			chapter: "K",
		},
		{
			code: "TMVTM",
			name: "Molecular Science and Engineering",
			chapter: "K",
		},
		{
			code: "TINEM",
			name: "Industrial Management",
			chapter: "M",
		},
		{
			code: "TIPDM",
			name: "Integrated Product Design",
			chapter: "M",
		},
		{
			code: "TIPUM",
			name: "Engineering Design",
			chapter: "M",
		},
		{
			code: "TPRMM",
			name: "Production Engineering and Management",
			chapter: "M",
		},
		{
			code: "TIMTM",
			name: "Interactive Media Technology",
			chapter: "Me",
		},
		{
			code: "TMLEM",
			name: "Medical Engineering",
			chapter: "MiT",
		},
		{
			code: "TTAHM",
			name: "Technology, work and health",
			chapter: "MiT",
		},
		{
			code: "TCAEM",
			name: "Civil and Architectural Engineering",
			chapter: "S",
		},
		{
			code: "TFOBM",
			name: "Real Estate and Construction Management",
			chapter: "S",
		},
		{
			code: "THSSM",
			name: "Sustainable Urban Planning and Design",
			chapter: "S",
		},
		{
			code: "TMHIM",
			name: "Environmental Engineering and Sustainable Infrastructure",
			chapter: "S",
		},
		{
			code: "TTGTM",
			name: "Transport and Geoinformation Technology",
			chapter: "S",
		},
		{
			code: "TDTNM",
			name: "Computer Simulation for Science and Engineering",
			chapter: "F",
		},
		{
			code: "TAEEM",
			name: "Aerospace Engineering",
			chapter: "T",
		},
		{
			code: "TFORM",
			name: "Vehicle Engineering",
			chapter: "T",
		},
		{
			code: "TMRSM",
			name: "Naval Architecture",
			chapter: "T",
		},
		{
			code: "TTEMM",
			name: "Engineering Mechanics",
			chapter: "T",
		},
		{
			code: "TJVTM",
			name: "Railway Engineering",
			chapter: "T",
		},
		{
			code: "TITHM",
			name: "Sustainable Production Development",
			chapter: "P",
		},
		{
			code: "TMESM",
			name: "Environomical Pathways for Sustainable Energy Systems",
			chapter: "W",
		},
		{
			code: "TSUTM",
			name: "Sustainable Technology",
			chapter: "W",
		},
		{
			code: "TIETM",
			name: "Energy innovation",
			chapter: "W",
		},
		{
			code: "TIEEM",
			name: "Innovative Sustainable Energy Engineering",
			chapter: "W",
		},
		{
			code: "TSUEM",
			name: "Sustainable Energy Engineering",
			chapter: "W",
		},
		{
			code: "TIDTM",
			name: "Sports Technology",
			chapter: "MiT",
		},
		{
			code: "TIHLM",
			name: "Innovative Technology for Healthy Living",
			chapter: "MiT",
		},
		{
			code: "TTMIM",
			name: "Transport, Mobility and Innovation",
			chapter: "S",
		},
		{
			code: "TBDVM",
			name: "Biostatistics and data science",
			chapter: "F",
		},
		{
			code: "TDIGM",
			name: "Sustainable digitalisation",
			chapter: "Me",
		},
		{
			code: "TMEKM",
			name: "Mechatronics",
			chapter: "M",
		},
		{
			code: "TTBEM",
			name: "Technology-based Entrepreneurship",
			chapter: "I",
		},
		{
			code: "TCYSM",
			name: "Cybersecurity",
			chapter: "D",
		},
		{
			code: "TMSKM",
			name: "Machine Design",
			chapter: "M",
		},
		{
			code: "TDDHM",
			name: "Data-driven Health",
			chapter: "MiT",
		},
	],
};
const exchangePrograms = [
	{ name: "Architecture", chapter: "A" },
	{ name: "Biotechnology", chapter: "K" },
	{ name: "Civil Engineering and Urban Management", chapter: "S" },
	{ name: "Computer Science and Technology", chapter: "D" },
	{ name: "Design and Product Realisation", chapter: "M" },
	{ name: "Electrical Engineering", chapter: "E" },
	{ name: "Energy and Environment", chapter: "W" },
	{ name: "Engineering Physics", chapter: "F" },
	{ name: "Engineering Chemistry", chapter: "K" },
	{ name: "Engineering Mathematics", chapter: "F" },
	{ name: "Vehicle Engineering", chapter: "T" },
	{ name: "Industrial Engineering and Management", chapter: "I" },
	{ name: "Industrial Technology and Sustainability", chapter: "W" },
	{ name: "Information and Communication Technology", chapter: "IT" },
	{ name: "Mechanical Engineering", chapter: "M" },
	{ name: "Materials Design and Engineering", chapter: "B" },
	{ name: "Medical Engineering", chapter: "MiT" },
	{ name: "Media Technology", chapter: "Me" },
];

export { programMap, exchangePrograms };
