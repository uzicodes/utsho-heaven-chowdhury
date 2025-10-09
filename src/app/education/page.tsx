"use client";

import Navbar from '../Navbar';
import { useState } from "react";
import {
	Award,
	Calendar,
	BookOpen,
	Trophy,
	FileText,
	ExternalLink,
} from "lucide-react";
import { motion, Variants } from "framer-motion";



const EducationSection: React.FC = () => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const educationData = [
			{
				degree: "Higher Secondary Education (HSC)",
				school: "Cantonment Public College, Saidpur",
				year: "2018 - 2020",
				achievements: ["CGPA: 5.0 (Out of 5)", "Subject: Science"],
				skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
				description:
					"Acquired a strong foundation in Science and Mathematics, fostering analytical and problem-solving skills.",
				logo: "/cpscs.png",
			},
			{
				degree: "Bachelors in Computer Science (CS)",
				school: "BRAC University, Dhaka",
				year: "2022 - 2026",
				achievements: ["CGPA: 0.00 (Out of 4)", "Subject: Computer Science"],
				skills: ["Data Structures", "Algorithms", "DBMS", "OS", "Compiler Design"],
				description:
					"Acquired foundational knowledge in computer science, programming languages, and software development principles.",
				logo: "/brac.png",
			},
	];

	const certificationData = [
		{
			title: "AI ENGINEER FOR DEVELOPERS ASSOCIATE",
			issuer: "DataCamp",
			date: "August 2025",
			credentialId: "AIEDA0014623486342",
			skills: ["LLMs", "MLOPs", "LangChain"],
			certImage: "/certifications/1.png",
			fullViewUrl: "https://drive.google.com/file/d/1VjhvU30KzGRGuVRpZOBk7v78eyTww7mP/view?usp=sharing",
		},
		{
			title: "OCI 2025 Certified Data Science Professional",
			issuer: "Oracle",
			date: "August 2025",
			credentialId: "OCI25DSOCP",
			skills: ["OCI", "Vault & Conda", "OCI MLOPs"],
			certImage: "/certifications/2.png",
			fullViewUrl: "https://drive.google.com/file/d/1xGWSLvbODGYOYfrP4zBcy_KpAt-rdIbc/view?usp=sharing",
		},
		{
			title: "AI Engineer for Data Scientist- DataCamp",
			issuer: "DataCamp",
			date: "June 2025",
			credentialId: "AEDS0018077653709",
			skills: ["Pytorch", "CNN,RNN", "Llama 3"],
			certImage: "/certifications/3.png",
			fullViewUrl: "https://drive.google.com/file/d/1yJVLWXUgIGJJDrrejNTelkiqS0GaD6a-/view?usp=sharing",
		},
		{
			title: "AI+ Foundation Certificate",
			issuer: "AI CERTs",
			date: "June 2025",
			credentialId: "7d3694dfdedc",
			skills: ["Prompt Engineering", "Ethics", "GAN AI"],
			certImage: "/certifications/4.png",
			fullViewUrl: "https://drive.google.com/file/d/1pM-5PcxfzGN7QZhcvL4kwxU_IogNjln4/view?usp=sharing",
		},
		{
			title: "HTML5 - Coursera",
			issuer: "University of Michigan",
			date: "Mar 2024",
			credentialId: "https://coursera.org/verify/PW72RW7XK7YE",
			skills: ["Web-page Structure", "Tags & Syntax", "DOM & Hosting "],
			certImage: "/certifications/5.png",
			fullViewUrl: "https://drive.google.com/file/d/11FIJr7lgpvdk3eK8CgG_w8bf99hmkwL9/view?usp=sharing",
		},
		{
			title: "Machine Learning with Python- Coursera",
			issuer: "IBM",
			date: "Mar 2024",
			credentialId: "https://coursera.org/verify/ZVUEWPX28NAL",
			skills: ["scikit-learn", "KNN, SVM", "Model Evaluation"],
			certImage: "/certifications/6.png",
			fullViewUrl: "https://drive.google.com/file/d/13ud1g4NgBMpd3a3MFntaQmQ_g96DRvU1/view?usp=sharing",
		}











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
	<section className="min-h-screen relative overflow-hidden py-32 bg-[#04081A]">
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
					className="text-center mb-8 mt-0"
				>
					<p className="max-w-2xl mx-auto text-lg mt-0 lora-font" style={{ color: '#CC604B' }}>
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
								   <div className="space-y-2 text-center">
									   <div className="flex flex-col items-center gap-3">
										   <img
											   src={edu.logo}
											   alt={edu.school + ' logo'}
											   className="h-20 w-20 object-contain rounded-full bg-white/80 p-2 shadow"
											   style={{ maxWidth: '80px', maxHeight: '80px' }}
										   />
										   <h3 className="text-2xl font-bold colus-font" style={{ color: '#BD9082' }}>
											   {edu.degree}
										   </h3>
									   </div>
									   <p className="text-lg flex items-center justify-center gap-2 colus-font" style={{ color: '#73F527' }}>
										   {edu.school}
									   </p>
									   <p className="text-gray-400 flex items-center justify-center gap-2">
										   <Calendar className="w-4 h-4" />
										   {edu.year}
									   </p>
								   </div>
								   <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
									   {edu.description}
								   </p>
								   <div className="flex flex-wrap justify-center gap-2">
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

				   {/* Thesis Card Centered Below */}
				   <div className="flex justify-center mt-8">
					   <motion.div
						   variants={cardVariants}
						   initial="hidden"
						   animate="visible"
						   className="relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border-blue-400/20 w-full max-w-md"
					   >
						   <div className="space-y-6">
							   <div className="space-y-2 text-center">
								   <div className="flex flex-col items-center gap-3">
									   <img
										   src="/dummy.png"
										   alt="Dummy School logo"
										   className="h-20 w-20 object-contain rounded-full bg-white/80 p-2 shadow"
										   style={{ maxWidth: '80px', maxHeight: '80px' }}
									   />
									   <h3 className="text-2xl font-bold colus-font" style={{ color: '#BD9082' }}>
										   Thesis
									   </h3>
								   </div>
								   <p className="text-lg flex items-center justify-center gap-2 colus-font" style={{ color: '#73F527' }}>
									   BRAC University
								   </p>
								   <p className="text-gray-400 flex items-center justify-center gap-2">
									   <Calendar className="w-4 h-4" />
									   2026
								   </p>
							   </div>
							   <p className="text-gray-300 text-sm text-center">
								   "Multimodal Deep Learning for Medical Image<br />Segmentation"
							   </p>
							   <div className="flex flex-wrap justify-center gap-2">
								   <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">Dummy Skill 1</span>
								   <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">Dummy Skill 2</span>
								   <span className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300">Dummy Skill 3</span>
							   </div>
						   </div>
					   </motion.div>
				   </div>

				{/* Certifications Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-20"
				>
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 colus-font" style={{ color: '#CC604B' }}>
							Professional Certifications
						</h2>
						<p className="text-gray-300 max-w-2xl mx-auto text-lg lora-font">
							Professional Development through Industry-Recognized Certifications
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6">
						{certificationData.map((cert, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="group relative border border-blue-400/20 rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm hover:border-teal-500 transition-all duration-300"
							>
								<div className="flex flex-col md:flex-row">
									{/* PDF Preview Section */}
									<div className="md:w-2/5 bg-gradient-to-br from-gray-800 to-gray-900 p-6 flex items-center justify-center relative overflow-hidden">
										<div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />
										<div className="relative z-10 w-full h-64 bg-white rounded-lg overflow-hidden shadow-lg">
											<img
												src={cert.certImage}
												alt={cert.title}
												className="w-full h-full object-contain"
											/>
											<div className="absolute top-2 right-2 bg-teal-500/20 text-teal-400 px-2 py-1 rounded text-xs flex items-center gap-1">
												<Award className="w-3 h-3" />
												Verified
											</div>
										</div>
									</div>

									{/* Certificate Details Section */}
									<div className="md:w-3/5 p-6 flex flex-col justify-center">
										<div className="space-y-4">
											<div>
												<h3 className="text-2xl font-bold mb-2 colus-font group-hover:text-teal-400 transition-colors" style={{ color: '#BD9082' }}>
													{cert.title}
												</h3>
												<p className="text-lg flex items-center gap-2 colus-font" style={{ color: '#73F527' }}>
													<BookOpen className="w-4 h-4" />
													{cert.issuer}
												</p>
											</div>

											<div className="flex items-center gap-4 text-gray-400 text-sm">
												<span className="flex items-center gap-2">
													<Calendar className="w-4 h-4" />
													{cert.date}
												</span>
												<span className="flex items-center gap-2">
													<FileText className="w-4 h-4" />
													ID: {cert.credentialId}
												</span>
											</div>

											<div className="flex flex-wrap gap-2">
												{cert.skills.map((skill, i) => (
													<span
														key={i}
														className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
													>
														{skill}
													</span>
												))}
											</div>

											<a 
												href={cert.fullViewUrl} 
												target="_blank" 
												rel="noopener noreferrer"
												className="mt-4 flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm font-semibold"
											>
												<ExternalLink className="w-4 h-4" />
												View Full Certificate
											</a>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
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