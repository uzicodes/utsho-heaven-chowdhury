"use client";

import Navbar from '../Navbar';
import { useState } from "react";
import {
    Award,
    Calendar,
    ExternalLink,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const EducationSection: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const educationData = [
        {
            degree: "Higher Secondary Certificate (HSC)",
            school: "Cantonment Public College, Saidpur",
            year: "2018 - 2020",
            description:
                "Acquired a strong foundation in Science and Mathematics, fostering analytical and problem-solving skills.",
            logo: "/cpscs.png",
        },
        {
            degree: "Bachelors in Computer Science (CS)",
            school: "BRAC University, Dhaka",
            year: "2022 - 2026",
            description:
                "Acquired foundational knowledge in computer science, programming languages, and software development principles.",
            logo: "/brac.png",
        },
    ];

    const certificationData = [

        {
            title: "Agile Project Management Professional Certificate",
            issuer: "Atlassian",
            date: "December 2025",
            skills: ["Agile", "Kanban", "Scrum"],
            certImage: "/certifications/15.png",
            fullViewUrl: "https://drive.google.com/file/d/1D_e54kJLyycpnQEVHbnrcAL7Fei2tdWR/view?usp=sharing",
        },
        {
            title: "Career Essentials in GitHub Professional",
            issuer: "Github",
            date: "December 2025",
            skills: ["Git Version Control", "Github Actions", "Collaboration"],
            certImage: "/certifications/14.png",
            fullViewUrl: "https://drive.google.com/file/d/1_v0_WsCgyhb-IArcvEaeMgbHAF_VrIjD/view?usp=sharing",
        },

        {
            title: "DevOps Professional Certificate",
            issuer: "PagerDuty",
            date: "December 2025",
            skills: ["CI / CD", "DevOps", "IaC"],
            certImage: "/certifications/11.png",
            fullViewUrl: "https://drive.google.com/file/d/1fzXhMO1K_Cby79JkSioa2vlAfvGMa1Ez/view?usp=sharing",
        },
        {
            title: "Software Testing Professional Certificate",
            issuer: "LAMBDATEST",
            date: "December 2025",
            skills: ["SQA", "Agile Testing", "SDLC"],
            certImage: "/certifications/12.png",
            fullViewUrl: "https://drive.google.com/file/d/11Pu-_Oko9oUFc-NZfrH6LP-xjxCWM_am/view?usp=sharing",
        },
        {
            title: "Machine Learning with Python Professional",
            issuer: "Annaconda",
            date: "December 2025",
            skills: ["Data Prep", "Regression", "Pandas"],
            certImage: "/certifications/13.png",
            fullViewUrl: "https://drive.google.com/file/d/15EH6757BzDBdAjuKT_5_RCaLBjcFG9-U/view?usp=sharing",
        },
        {
            title: "Foundations Coding Full-Stack",
            issuer: "Microsoft",
            date: "October 2025",
            skills: ["CI / CD", "Graph Theory", "OOP"],
            certImage: "/certifications/7.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1Q3x_w_Iwlb0cohXrWVn4tm64VYKczhcn/view?usp=sharing",
        },
        {
            title: "AI Engineer For Developers Associate",
            issuer: "DataCamp",
            date: "August 2025",
            skills: ["LLMs", "MLOPs", "LangChain"],
            certImage: "/certifications/1.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1VjhvU30KzGRGuVRpZOBk7v78eyTww7mP/view?usp=sharing",
        },
        {
            title: "Introduction Software Engineering",
            issuer: "IBM",
            date: "October 2025",
            skills: ["SDLC", "JQuery", "Design Patterns"],
            certImage: "/certifications/8.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1T05lfqIkMfn1nzfz_4oV5uvoS76LBm9q/view?usp=sharing",
        },
        {
            title: "Docker Foundations Professional",
            issuer: "LinkedIn",
            date: "November 2025",
            skills: ["Containerization", "Docker Compose", "Docker Image"],
            certImage: "/certifications/10.png",
            fullViewUrl: "https://drive.google.com/file/d/1yBXVNV6GtR0qoVYNESu5xLgHa0AIhbDu/view?usp=sharing",
        },
        {
            title: "OCI Data Science Professional",
            issuer: "Oracle",
            date: "August 2025",
            skills: ["OCI", "Vault & Conda", "OCI MLOPs"],
            certImage: "/certifications/2.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1xGWSLvbODGYOYfrP4zBcy_KpAt-rdIbc/view?usp=sharing",
        },
        {
            title: "AI Engineer for Data Scientists",
            issuer: "DataCamp",
            date: "June 2025",
            skills: ["Pytorch", "CNN,RNN", "Llama 3"],
            certImage: "/certifications/3.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1yJVLWXUgIGJJDrrejNTelkiqS0GaD6a-/view?usp=sharing",
        },
        {
            title: "Neural Networks & Deep Learning",
            issuer: "Deep Learning",
            date: "October 2025",
            skills: ["Vectorization", "Shallow NN", "Deep NN"],
            certImage: "/certifications/9.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1Rg5o2O7opV2ZF9K1-gyLWC9ZVAZE02Pl/view?usp=sharing",
        },
        {
            title: "Machine Learning with Python",
            issuer: "IBM",
            date: "Mar 2024",
            skills: ["scikit-learn", "KNN, SVM", "Model Evaluation"],
            certImage: "/certifications/6.jpg",
            fullViewUrl: "https://drive.google.com/file/d/13ud1g4NgBMpd3a3MFntaQmQ_g96DRvU1/view?usp=sharing",
        },
        {
            title: "HTML 5",
            issuer: "University of Michigan",
            date: "Mar 2024",
            skills: ["Web-page Structure", "Tags & Syntax", "DOM & Hosting "],
            certImage: "/certifications/5.jpg",
            fullViewUrl: "https://drive.google.com/file/d/11FIJr7lgpvdk3eK8CgG_w8bf99hmkwL9/view?usp=sharing",
        },
        {
            title: "AI+ Foundation Certificate",
            issuer: "AI CERTs",
            date: "June 2025",
            skills: ["Prompt Engineering", "Ethics", "GAN AI"],
            certImage: "/certifications/4.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1pM-5PcxfzGN7QZhcvL4kwxU_IogNjln4/view?usp=sharing",
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
        <section className="min-h-screen relative overflow-hidden py-20 bg-transparent">
            {/* UPDATED: Registered Aoboshi One font here */}
            <style>{`
                @font-face {
                    font-family: 'It-Valtrisse';
                    src: url('/fonts/it-valtrisse.otf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                }
            `}</style>

            {/* Grid Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10 capitalize">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 mt-0"
                >
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
                            className={`relative border rounded-xl p-6 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${hoveredIndex === index
                                ? "border-teal-500 scale-[1.02]"
                                : "border-blue-400/20"
                                }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="space-y-4">
                                <div className="space-y-2 text-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <img
                                            src={edu.logo}
                                            alt={edu.school + ' logo'}
                                            className="h-16 w-16 object-contain rounded-full bg-white/80 p-2 shadow"
                                            style={{ maxWidth: '64px', maxHeight: '64px' }}
                                        />
                                        <h3 className="text-xl font-bold colus-font" style={{ color: '#DB5151' }}>
                                            {edu.degree}
                                        </h3>
                                    </div>
                                    <p className="text-base flex items-center justify-center gap-2 colus-font" style={{ color: '#73F527' }}>
                                        {edu.school}
                                    </p>
                                    <p className="text-gray-400 flex items-center justify-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {edu.year}
                                    </p>
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
                        className={`relative border rounded-xl p-5 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm w-full max-w-sm ${hoveredIndex === 99 ? "border-teal-500 scale-[1.02]" : "border-blue-400/20"}`}
                        onMouseEnter={() => setHoveredIndex(99)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="space-y-4">
                            <div className="space-y-2 text-center">
                                <div className="flex flex-col items-center gap-2">
                                    <img
                                        src="/thesis.png"
                                        alt="Thesis logo"
                                        className="h-14 w-14 object-contain rounded-full bg-white/80 p-2 shadow"
                                        style={{ maxWidth: '56px', maxHeight: '56px' }}
                                    />
                                    <h3 className="text-lg font-bold colus-font" style={{ color: '#DB5151' }}>
                                        Thesis
                                    </h3>
                                </div>
                                <p className="text-base flex items-center justify-center gap-2 colus-font" style={{ color: '#73F527' }}>
                                    BRAC University
                                </p>
                                <p className="text-gray-400 flex items-center justify-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    2026
                                </p>
                            </div>
                            <p className="text-gray-300 text-sm text-center">
                                "Multimodal Deep Learning for Medical Image Segmentation"
                            </p>
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
                        <h2 className="text-4xl font-bold mb-4 colus-font" style={{ color: '#F5BE27' }}>
                            Professional Certifications
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg lora-font">
                            Professional Development through Industry-Recognized Certifications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificationData.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative border rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm transition-all duration-300 ${hoveredIndex === (100 + index) ? "border-teal-500 scale-[1.02]" : "border-blue-400/20"
                                    } p-3`}
                                onMouseEnter={() => setHoveredIndex(100 + index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Certificate Preview at Top */}
                                <div className="w-full mb-2">
                                    <div className="relative w-full h-40 bg-white rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
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
                                {/* Certificate Details Below */}
                                <div className="space-y-2 px-1 pb-2 text-center">
                                    
                                    {/* UPDATED: Applied Aoboshi One font here */}
                                    <h3 
                                        className="text-lg font-bold mb-1 group-hover:text-teal-400 transition-colors" 
                                        style={{ fontFamily: 'It-Valtrisse', color: '#DB5151', fontSize: '1rem' }}
                                    >
                                        {cert.title}
                                    </h3>

                                    <p className="text-sm flex items-center justify-center gap-2 colus-font" style={{ color: '#73F527', fontSize: '0.95rem' }}>
                                        {cert.issuer}
                                    </p>
                                    <div className="flex items-center justify-center text-gray-400 text-xs">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {cert.date}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-1 mt-1">
                                        {cert.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-0.5 text-[0.7rem] rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Link Button */}
                                    <a
                                        href={cert.fullViewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 flex items-center justify-center gap-1 text-xs font-semibold bg-green-500/10 hover:bg-green-500/20 text-green-400 hover:text-green-300 px-3 py-1.5 rounded-full transition-all w-fit mx-auto"
                                    >
                                        <ExternalLink className="w-3 h-3" />
                                        View Full Certificate
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div >
            </div >
        </section >
    );
};

export default function Education() {
    return (
        <div className="relative min-h-screen bg-transparent">
            {/* Content with Navbar */}
            <div className="relative z-10">
                <Navbar />
                <EducationSection />
            </div>
        </div>
    );
}