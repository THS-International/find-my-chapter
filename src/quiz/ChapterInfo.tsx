import type { Chapters } from "../types";

const showChapterInfo = (chapter: Chapters) => {
	if (chapter === "A") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Architecture Chapter
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					Arkitektursektionen (A), is created by architectural students at KTH.
					The purpose is to improve education and create a good atmosphere
					during your study time. It is about meeting new people and finding new
					contexts, but above all, having fun. Arkitektursektionen (A) is there
					to help you realize your ideas.
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p>
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://arkitektursektionen.se/en/english/"
							target="_blank"
							rel="noopener noreferrer"
						>
							arkitektursektionen.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						Email:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="mailto:internationellstudent@arkitektursektionen.se"
							target="_blank"
							rel="noopener noreferrer"
						>
							internationellstudent@arkitektursektionen.se
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "B") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Material Design Chapter (B)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					Bergssektionen (B), was founded in 1819 in Falun. In 1866, the
					education was moved to KTH where it is still present today.
					Bergssektionen (B) is part of THS Student Union at KTH and you are
					part of the chapter if you are studying Material Design. In 1943, Tore
					“Pekka” Norén founded Konglig Bergs Spectacle Sellskap, which is the
					oldest running student farce in Sweden. All students at Bergssektionen
					(B) are called “Bergsmänn” and their partners for “Hüttor”. The
					purpose of Bergssektionen (B) is to improve the education and study
					environment during your time at KTH. The chapter has very good
					relations with companies primary within manufacturing industry.
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://https://bergssektionen.se"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://bergssektionen.se
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "CL") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Teacher's Chapter
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					Lärarsektionen (CL) is the chapter for students in the Teacher's
					programme at KTH. The chapter is a part of THS and works to improve
					the education and study environment for all students in the programme.
					Lärarsektionen (CL) also organise social activities and events for its
					members. You will be contacted closer to study start by the chapter
					for your reception.
				</p>
			</div>
		);
	}
	if (chapter === "D") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Computer Science Chapter (D)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					Datasektionen, or the Computer Science Chapter is a non-profit student
					chapter under THS which exists to give all CS students at KTH the best
					study time possible. We achieve this in part by monitoring the courses
					in the programme, and in part by organising activities outside of the
					studies themselves. We’re a bit like a watchdog, and a bit like a
					fraternity (but more open). In the chapter there are several groups
					doing specific stuff that interests them.
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://https://datasektionen.se"
							target="_blank"
							rel="noopener noreferrer"
						>
							datasektionen.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						META Student Website (between D and Me Chapters):{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://metastudent.se"
							target="_blank"
							rel="noopener noreferrer"
						>
							metastudent.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						Email:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="mailto:isc@datasektionen.se"
							target="_blank"
							rel="noopener noreferrer"
						>
							isc@datasektionen.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						Discord:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://dsekt.se/discord"
							target="_blank"
							rel="noopener noreferrer"
						>
							dsekt.se/discord (/verify begin {"<email>"} code:R1U7XMW)
						</a>
					</p>
					<p className="break-all">
						{" "}
						WhatsApp:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://dsekt.se/whatsapp"
							target="_blank"
							rel="noopener noreferrer"
						>
							dsekt.se/whatsapp
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "E") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Electrical Engineering Chapter (E)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The Chapter of Electrical Engineering shares its reception together
					with the chapter of Medical Engineering. Check our communication
					channels for info about upcoming events!
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://elektrosektionen.se/?lang=en"
							target="_blank"
							rel="noopener noreferrer"
						>
							elektrosektionen.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						WhatsApp:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://chat.whatsapp.com/ByO9eqVVnjE2e2UkoyFfqM"
							target="_blank"
							rel="noopener noreferrer"
						>
							chat.whatsapp.com/ByO9eqVVnjE2e2UkoyFfqM
						</a>
					</p>
					<p className="break-all">
						{" "}
						Instagram:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.instagram.com/emit_international/"
							target="_blank"
							rel="noopener noreferrer"
						>
							@emit_international
						</a>
					</p>
					<p className="break-all">
						{" "}
						Facebook:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.facebook.com/share/1CSaAi1AFF/?mibextid=wwXIfr"
							target="_blank"
							rel="noopener noreferrer"
						>
							@emit-international
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "MiT") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Medical Technology Chapter (MiT)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The chapter of Medical Engineering shares its reception with
					Electrical engineering! Check our communication channels for info
					about upcoming events!
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://mit-kth.se/en/"
							target="_blank"
							rel="noopener noreferrer"
						>
							mit-kth.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						WhatsApp:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://chat.whatsapp.com/ByO9eqVVnjE2e2UkoyFfqM"
							target="_blank"
							rel="noopener noreferrer"
						>
							chat.whatsapp.com/ByO9eqVVnjE2e2UkoyFfqM
						</a>
					</p>
					<p className="break-all">
						{" "}
						Instagram:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.instagram.com/emit_international/"
							target="_blank"
							rel="noopener noreferrer"
						>
							@emit_international
						</a>
					</p>
					<p className="break-all">
						{" "}
						Facebook:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.facebook.com/share/1CSaAi1AFF/?mibextid=wwXIfr"
							target="_blank"
							rel="noopener noreferrer"
						>
							@emit-international
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "I") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Industrial Management Chapter (I)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					Industriell Ekonomi (I) is the chapter for students in the Industrial
					Management programme at KTH. The chapter is a part of THS and works to
					improve the education and study environment for all students in the
					programme. Industriell Ekonomi (I) also organises social activities
					and events for its members. Join our Whatsapp group! There we publish
					all fun events happening 😎
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.iare.se/en/"
							target="_blank"
							rel="noopener noreferrer"
						>
							iare.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						Facebook:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.facebook.com/share/g/16D9GewDKh/?mibextid=wwXIfr"
							target="_blank"
							rel="noopener noreferrer"
						>
							Facebook Group
						</a>
					</p>
					<p className="break-all">
						{" "}
						WhatsApp:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://chat.whatsapp.com/H7FKvX1a7p84XL9yASyC8y"
							target="_blank"
							rel="noopener noreferrer"
						>
							Iare WhatsApp Group
						</a>
					</p>
					<p className="break-all">
						{" "}
						Email:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="mailto:international@iare.nu"
						>
							international@iare.nu
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "T") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Flight Chapter (T)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The Flight Chapter — the Student Union chapter for the Vehicle
					Engineering program and its associated masters! For events, check out
					our calendar and/or follow our bar & international group Instagram
					pages. For access to the community group, reach out to an admin or
					someone else in the chapter!
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://flygsektionen.se/the-flight-chapter/"
							target="_blank"
							rel="noopener noreferrer"
						>
							flygsektionen.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						Instagram:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.instagram.com/flygsektionen/"
							target="_blank"
							rel="noopener noreferrer"
						>
							@flygsektionen
						</a>
					</p>
					<p className="break-all">
						{" "}
						Facebook:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.facebook.com/flygsektionen"
							target="_blank"
							rel="noopener noreferrer"
						>
							flygsektionen
						</a>
					</p>
					<p className="break-all">
						{" "}
						Event Calendar:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://flygsektionen.se/events/"
							target="_blank"
							rel="noopener noreferrer"
						>
							flygsektionen.se/events
						</a>
					</p>
					<p className="break-all">
						{" "}
						Bar:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.instagram.com/kfk_flyg/"
							target="_blank"
							rel="noopener noreferrer"
						>
							@kfk_flyg
						</a>
					</p>
					<p className="break-all">
						{" "}
						International Group:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.instagram.com/integrflightchapter/"
							target="_blank"
							rel="noopener noreferrer"
						>
							@integrflightchapter
						</a>
					</p>
					<p className="break-all">
						{" "}
						Community Group:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.facebook.com/groups/kulmedflyg/"
							target="_blank"
							rel="noopener noreferrer"
						>
							kulmedflyg
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "S") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Civil Engineering Chapter (S)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					Welcome to the Samhällsbyggnadssektion, more famously known as the
					S-chapter! Join our socials and check our website calendar to stay up
					to date on all the fun events, from craft nights to the legendary
					oaSen pub nights. 💚💚
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://s-sektionen.se/en/hem-english"
							target="_blank"
							rel="noopener noreferrer"
						>
							s-sektionen.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						Instagram:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.instagram.com/ssektionen/"
							target="_blank"
							rel="noopener noreferrer"
						>
							@ssektionen
						</a>
					</p>
					<p className="break-all">
						{" "}
						Facebook:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.facebook.com/samhallsbyggnad/"
							target="_blank"
							rel="noopener noreferrer"
						>
							samhallsbyggnad
						</a>
					</p>
					<p className="break-all">
						S-chapter international reception (AMBA) 2025 WhatsApp group:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://chat.whatsapp.com/ChYdVhbDoxz36fLmA7f5pz"
							target="_blank"
							rel="noopener noreferrer"
						>
							S-chapter WhatsApp Group
						</a>
					</p>
					<p className="break-all">
						Facebook group:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.facebook.com/groups/470758369396181/"
							target="_blank"
							rel="noopener noreferrer"
						>
							S-chapter Facebook Group
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "F") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Physics Chapter (F)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The Physics Chapter (F) is part of THS and brings together all
					students studying in the Master of Science in Engineering Physics,
					Technical Mathematics, the master’s programs in Technical Physics,
					Nuclear Technology, Applied Mathematics and Computational Mathematics
					and Mathematics. The purpose of the chapter is to safeguard the
					students’ interests by actively working for a better study time. This
					is done, among other things, by monitoring study and work environment
					issues, arranging parties, spex, sports activities, company
					presentations and much more. For more information about our section,
					go to our website and read more!
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://f.kth.se/en/"
							target="_blank"
							rel="noopener noreferrer"
						>
							f.kth.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						Instagram:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.instagram.com/fysiksektionen/"
							target="_blank"
							rel="noopener noreferrer"
						>
							@fysiksektionen
						</a>
					</p>
					<p className="break-all">
						Facebook group:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.facebook.com/groups/physicschapter/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Facebook Group
						</a>
					</p>
					<p className="break-all">
						{" "}
						Email:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="mailto:international@f.kth.se"
						>
							international@f.kth.se
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "Dr") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					PhD Chapter (Dr)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The PhD chapter is the chapter for all PhD students at KTH. The
					chapter is a part of THS and works to improve the education and study
					environment for all PhD students at KTH. The chapter also organises
					social activities and events for its members.
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.dr.kth.se"
							target="_blank"
							rel="noopener noreferrer"
						>
							dr.kth.se
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "IT") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Chapter for Information Technology (IT)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The Chapter of Information Technology (Sektionen för
					Informationsteknik) is one of the largest chapters under Tekniska
					Högskolans Studentkår. We’re here to help students in their studies
					and to help shape a better future career. The chapter committees
					arrange a series of activities – reception activities for new
					students, sports events, LAN weekends as well as recurring pubs and
					alcohol-free evenings with activities. Our chapter includes the only
					bachelor programe taught in English at KTH, which is the bachelors in
					Information and Communication Technology (TCOMK) (These students join
					the regular Swedish reception, which in our case is held in English).
					We also have a few other Swedish programmes, such as the 5-year
					programe in Information Technology (CINTE) and a 3-year bachelor
					programe in Computer Engineering (TIDAB). Every single one of our
					chapter events is hosted in English, or will swap to English in an
					instant, so don't hesitate to join us!
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.kth.it/en"
							target="_blank"
							rel="noopener noreferrer"
						>
							kth.it
						</a>
					</p>
					<p className="break-all">
						{" "}
						Instagram:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.instagram.com/itsektionenkth/"
							target="_blank"
							rel="noopener noreferrer"
						>
							itsektionenkth
						</a>
					</p>
					<p className="break-all">
						{" "}
						Discord:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://discord.com/invite/TcddkaByD8"
							target="_blank"
							rel="noopener noreferrer"
						>
							TcddkaByD8
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "Fria") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Free Chapter (Fria)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The Free Chapter is a chapter for students who are not part of any
					other chapter at KTH. If you are studying a degree or exchange
					programme at KTH, and not simply reading individual courses, you
					should never be put into this chapter, and should contact THS to
					rectify it.
				</p>
			</div>
		);
	}
	if (chapter === "K") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Chemistry Chapter (K)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					Kongliga Kemisektionen (The Chemistry Chapter), a part of THS (Student
					Union at KTH) is the chapter for the composition of the students
					studying the Master programs in Chemistry and Biotechnology and the
					Bachelor program in Chemistry at KTH. The purpose of the Chapter is to
					support studies and the student life for its members. Education
					influence, social activities, business connections, and student
					welfare are examples of things we strive and work for. The Chapter
					were founded in 1910 and the chapter color is golden yellow. Our
					emblem is a salamander clutching a chemical vessel with our motto:
					Vertias Hermetica. Our Chapter Hall is Draget, short for Dragskåpet
					and you can find us at Campus.
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://kongligkemi.com/en/home"
							target="_blank"
							rel="noopener noreferrer"
						>
							kongligkemi.com/
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "M") {
		return (
			<div className="text-green-500">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					The Chapter of Mechanical Engineering (M)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The Mechanical Engineering Chapter (M) is the chapter for students in
					the Mechanical Engineering related programmes at KTH. The chapter is a
					part of THS and works to improve the education and study environment
					for all students in the programmes. We also organise social activities
					and events for our members.
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.maskinsektionen.se/en"
							target="_blank"
							rel="noopener noreferrer"
						>
							www.maskinsektionen.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						Email:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="mailto:internationellagruppen@maskinsektionen.se"
						>
							internationellagruppen@maskinsektionen.se
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "Me") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Media Technology Chapter (Me)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The Media Technology Chapter (Me) is the chapter for students in the
					Media Technology programme at KTH. The chapter is a part of THS and
					works to improve the education and study environment for all students
					in the programme. The chapter also organises social activities and
					events for its members.
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.medieteknik.com/en"
							target="_blank"
							rel="noopener noreferrer"
						>
							www.medieteknik.com
						</a>
					</p>
					{/* https://metastudent.se */}
					<p className="break-all">
						{" "}
						META Student Website (between D and Me Chapter):{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://metastudent.se"
							target="_blank"
							rel="noopener noreferrer"
						>
							metastudent.se
						</a>
					</p>
					<p className="break-all">
						{" "}
						Email:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="mailto:international@medieteknik.com"
						>
							international@medieteknik.com
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "W") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Chapter for Energy and Environment (W)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The chapter for Energy and Environment is part of KTH’s Student Union
					(THS) and represents all students studying engineering and environment
					at KTH. The chapter works to safeguard students’ best interests by
					monitoring educational standards, organizing activities to promote
					contact-building and highlight career opportunities, or generally
					ensuring that student experiences are positive. The Chapter is a
					meeting place for students of the same program where you can engage in
					different activities and committees. W-Inter is our international
					group and hosts events for everyone!
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://w-sektionen.se/en/front-page/"
							target="_blank"
							rel="noopener noreferrer"
						>
							w-sektionen.se
						</a>
					</p>
					{/* w-inter@w-sektionen.se */}
					<p className="break-all">
						{" "}
						Email:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="mailto:w-inter@w-sektionen.se"
						>
							w-inter@w-sektionen.se
						</a>
					</p>
					{/* @w_international_ */}
					<p className="break-all">
						{" "}
						Instagram:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.instagram.com/w_international_/"
							target="_blank"
							rel="noopener noreferrer"
						>
							@w_international_
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "P") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Production Chapter (P)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The Production Chapter (P) is responsible for study representation and
					social activities for students from the chapter.
				</p>
				{/* https://p-sektionen.se */}
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://p-sektionen.se/"
							target="_blank"
							rel="noopener noreferrer"
						>
							p-sektionen.se
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "IsB") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Ingenjörssektionen Bygg (IsB)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					Ingenjörssektionen Bygg (IsB), is the chapter for students in
					Construction Technology and Production programme. We are a non-profit
					organisation connected with THS at KTH. We work to ensure that
					students studying get a wonderful study time and the opportunity
					evolve.
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://www.isbygg.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							www.isbygg.com
						</a>
					</p>
				</div>
			</div>
		);
	}
	if (chapter === "OPEN") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Open Chapter
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The chapter for Open Entrance, also called OPEN, is for all students
					at the Royal Institute of Technology who started their studies at the
					Civil Engineering program Open Entrance. The chapter also belongs to
					the Technical University Student Union, THS, since its inception in
					2003. The background to both the chapter and the program is to offer
					students the opportunity to try the civil engineering studies before
					the final choice of specialization. A year in the civil engineering
					program Open Entrance means that you read one year without a
					specialization and then this spring you can choose one of the programs
					that many others chose before they started at KTH. This does not mean
					that you read an extra year, but instead you start the second year on
					the chosen program. From Open Entrance you can choose all the civil
					engineering programs offered at KTH. As a chapter, OPEN is very unique
					as the students are members for a maximum of one year and then move on
					to a new program and its associated section. As a result, the section
					is replaced every year by those who have started the education.
					However, this does not hinder the work on which the section is based;
					to present the student’s case and to defend their interests regarding
					both study and leisure. The chapter regularly organizes gas kits,
					joint trips and activities for the section members.
				</p>
			</div>
		);
	}
	if (chapter === "TBas") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					TBas Chapter
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					The chapter for Technical Prepatory Year (TBas) is a chapter under THS
					Student Union at KTH for students studying the Technical Prepatory
					Year at KTH Campus Valhallavägen. The chapters is led by a board
					consisting of students from the program.
				</p>
			</div>
		);
	}
	if (chapter === "IsF") {
		return (
			<div className="text-black dark:text-white">
				<h1 className="text-4xl font-bold text-center dark:text-orange-400 text-cyan-800 mt-8 mb-6">
					Ingenjörssektionen Flemingsberg (IsF)
				</h1>
				<p className="text-center text-lg mb-4 justify-self-center container">
					We are the chapter at THS, which is responsible for student life for
					everybody who studies computer science, electrical and medical
					technology at Campus Flemingsberg.
				</p>
				<div className="text-center text-lg border-2 dark:border-orange-400 border-amber-600 rounded-lg p-4 mb-8 mr-8 ml-8 justify-self-center container">
					<p className="break-all">
						{" "}
						Website:{" "}
						<a
							className="dark:text-orange-400 text-cyan-600 underline"
							href="https://isflemingsberg.se"
							target="_blank"
							rel="noopener noreferrer"
						>
							isflemingsberg.se
						</a>
					</p>
				</div>
			</div>
		);
	}
	return (
		<>
			<p>
				Something went wrong, if this persists whenever you choose this
				programme, please report this to it@thsint.se (including the programme)
				so that we can rectify it as soon as possible
			</p>
		</>
	);
};

export default showChapterInfo;
