"use client";




import Navbar from '../Navbar';
import { useState } from "react";
import {
	Award,
	Calendar,
	BookOpen,
	Trophy,
} from "lucide-react";
import { motion, Variants } from "framer-motion";



const EducationSection: React.FC = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const educationData = [
		{
			degree: "Secondary School Certificate (SSC)",
			school: "Feni Alia Kamil - M.A Madrasah ",
			mascot: "📘",
			year: "2020",
			achievements: ["GPA: 4.0 (Out of 5)", "Subject: Science"],
			skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
			description:
				"Acquired a strong foundation in science and mathematics, fostering analytical and problem-solving skills.",
		},
		{
			degree: "Diploma in Computer Science (CSE)",
			school: "Institute of Computer Science and Technology (ICST)",
			mascot: "💻",
			year: "2020-2024",
			achievements: ["GPA: 3.47 (Out of 4)", "Subject: Computer Science"],
			skills: ["Web Development", "Data Structure", "Database Management Systems"],
			description:
				"Acquired foundational knowledge in computer science, programming languages, and software development principles.",
		},
	];

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants: Variants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
			{/* Grid Background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
				<div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
				<div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
			</div>

			<div className="max-w-6xl mx-auto px-4 relative z-10 capitalize">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
						Educational Journey
					</h2>
					<p className="text-gray-300 max-w-2xl mx-auto text-lg">
						My educational journey has been transformative, equipping me with the expertise to excel in my field.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
				>
					{educationData.map((edu, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
								hoveredIndex === index
									? "border-teal-500 scale-[1.02]"
									: "border-blue-400/20"
							}`}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<div className="space-y-6">
								<div className="space-y-2">
									<div className="flex items-center gap-3">
										<span className="text-3xl">{edu.mascot}</span>
										<h3 className="text-2xl font-bold text-white">
											{edu.degree}
										</h3>
									</div>
									<p className="text-lg text-gray-300 flex items-center gap-2">
										<BookOpen className="w-5 h-5 text-teal-500" />
										{edu.school}
									</p>
									<p className="text-gray-400 flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										{edu.year}
									</p>
								</div>

								<p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
									{edu.description}
								</p>

								<div className="space-y-3">
									<h4 className="text-sm font-semibold text-white flex items-center gap-2">
										<Trophy className="w-4 h-4 text-yellow-500" />
										Key Achievements
									</h4>
									<div className="flex flex-wrap gap-2">
										{edu.achievements.map((achievement, i) => (
											<div
												key={i}
												className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
											>
												<Award className="w-4 h-4" />
												<span>{achievement}</span>
											</div>
										))}
									</div>
								</div>

								<div className="flex flex-wrap gap-2">
									{edu.skills.map((skill, i) => (
										<span
											key={i}
											className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default function Education() {
	return (
		<>
			<Navbar />
			<EducationSection />
		</>
	);
}
