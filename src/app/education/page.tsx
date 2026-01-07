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
            school: "CANTONEMENT PUBLIC COLLEGE, SAIDPUR",
            year: "2018 - 2020",
            logo: "/cpscs.png",
            className: "h-21 w-21",
            style: { maxWidth: '85px', maxHeight: '85px' }
        },
        {
            degree: "Bachelor's in Computer Science (CS)",
            school: "BRAC UNIVERSITY,  DHAKA",
            year: "2022 - 2026",
            logo: "/bracu.png",
            className: "h-24 w-24",
            style: { maxWidth: '96px', maxHeight: '96px' }
        },
    ];

    const certificationData = [
        {
            title: "Agile Project Management Professional",
            issuer: "Atlassian",
            issuerLogo: "/icons/atlassian.svg",
            date: "December 2025",
            skills: ["Agile", "Kanban", "Scrum"],
            certImage: "/certifications/15.png",
            fullViewUrl: "https://drive.google.com/file/d/1D_e54kJLyycpnQEVHbnrcAL7Fei2tdWR/view?usp=sharing",
        },
        {
            title: "DevOps Professional Certificate",
            issuer: "PagerDuty",
            issuerLogo: "/icons/pagerduty.svg",
            date: "December 2025",
            skills: ["CI / CD", "DevOps", "IaC"],
            certImage: "/certifications/11.png",
            fullViewUrl: "https://drive.google.com/file/d/1fzXhMO1K_Cby79JkSioa2vlAfvGMa1Ez/view?usp=sharing",
        },
        {
            title: "Introduction Software Engineering",
            issuer: "IBM",
            issuerLogo: "/icons/ibm.svg",
            date: "October 2025",
            skills: ["SDLC", "JQuery", "Design Patterns"],
            certImage: "/certifications/8.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1T05lfqIkMfn1nzfz_4oV5uvoS76LBm9q/view?usp=sharing",
        },
        {
            title: "Software Testing Professional",
            issuer: "LAMBDATEST",
            issuerLogo: "/icons/lamdatest.svg",
            date: "December 2025",
            skills: ["SQA", "Agile Testing", "SDLC"],
            certImage: "/certifications/12.png",
            fullViewUrl: "https://drive.google.com/file/d/11Pu-_Oko9oUFc-NZfrH6LP-xjxCWM_am/view?usp=sharing",
        },
        {
            title: "Docker Foundations Professional",
            issuer: "Docker",
            issuerLogo: "/icons/cloud/docker.svg",
            date: "November 2025",
            skills: ["Containerization", "Docker Compose", "Docker Image"],
            certImage: "/certifications/10.png",
            fullViewUrl: "https://drive.google.com/file/d/1yBXVNV6GtR0qoVYNESu5xLgHa0AIhbDu/view?usp=sharing",
        },
        {
            title: "Foundations Coding Full-Stack",
            issuer: "Microsoft",
            issuerLogo: "/icons/microsoft.svg",
            date: "October 2025",
            skills: ["CI / CD", "Graph Theory", "OOP"],
            certImage: "/certifications/7.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1Q3x_w_Iwlb0cohXrWVn4tm64VYKczhcn/view?usp=sharing",
        },
        {
            title: "AI Engineer For Developers Associate",
            issuer: "DataCamp",
            issuerLogo: "/icons/datacamp.svg",
            date: "August 2025",
            skills: ["LLMs", "MLOPs", "LangChain"],
            certImage: "/certifications/1.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1VjhvU30KzGRGuVRpZOBk7v78eyTww7mP/view?usp=sharing",
        },
        {
            title: "Career Essentials in GitHub Professional",
            issuer: "Github",
            issuerLogo: "/icons/cloud/github.svg",
            date: "December 2025",
            skills: ["Git Version Control", "Github Actions", "Collaboration"],
            certImage: "/certifications/14.png",
            fullViewUrl: "https://drive.google.com/file/d/1_v0_WsCgyhb-IArcvEaeMgbHAF_VrIjD/view?usp=sharing",
        },
        {
            title: "Machine Learning with Python",
            issuer: "Anaconda",
            issuerLogo: "/icons/anaconda.svg",
            date: "December 2025",
            skills: ["Data Prep", "Regression", "Pandas"],
            certImage: "/certifications/13.png",
            fullViewUrl: "https://drive.google.com/file/d/15EH6757BzDBdAjuKT_5_RCaLBjcFG9-U/view?usp=sharing",
        },
        {
            title: "OCI Data Science Professional",
            issuer: "Oracle",
            issuerLogo: "/icons/oracle.svg",
            date: "August 2025",
            skills: ["OCI", "Vault & Conda", "OCI MLOPs"],
            certImage: "/certifications/2.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1xGWSLvbODGYOYfrP4zBcy_KpAt-rdIbc/view?usp=sharing",
        },
        {
            title: "Neural Networks & Deep Learning",
            issuer: "Deep Learning",
            issuerLogo: "/icons/deeplearning.svg",
            date: "October 2025",
            skills: ["Vectorization", "Shallow NN", "Deep NN"],
            certImage: "/certifications/9.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1Rg5o2O7opV2ZF9K1-gyLWC9ZVAZE02Pl/view?usp=sharing",
        },
        {
            title: "HTML 5",
            issuer: "University of Michigan",
            issuerLogo: "/icons/michigan.svg",
            date: "Mar 2024",
            skills: ["Web-page Structure", "Tags & Syntax", "DOM & Hosting "],
            certImage: "/certifications/5.jpg",
            fullViewUrl: "https://drive.google.com/file/d/11FIJr7lgpvdk3eK8CgG_w8bf99hmkwL9/view?usp=sharing",
        },
    ];

    // Variants for the Certifications section
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: (index: number) => ({
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100, 
            y: 0,
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            },
        },
    };

    const educationCardVariants: Variants = {
        hidden: { 
            opacity: 0, 
            scale: 0.5, 
            rotateX: -90 
        },
        visible: { 
            opacity: 1, 
            scale: 1, 
            rotateX: 0,
            transition: { 
                type: "spring", 
                stiffness: 600, 
                damping: 18,
                mass: 0.5
            } 
        }
    };

    return (
        // UPDATED: Added overflow-x-clip to prevent horizontal widening
        <section className="min-h-screen relative overflow-hidden overflow-x-clip py-20 bg-transparent">
            <style>{`
                @font-face {
                    font-family: 'TestTiemposText-Medium';
                    src: url('/TestTiemposText-Medium.otf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                }
            `}</style>

            <div className="max-w-6xl mx-auto px-4 relative z-10 capitalize">
                <div className="text-center mb-12 pt-32">
                    <h2 className="text-4xl font-bold mb-4 colus-font" style={{ color: '#F5BE27' }}>
                        Educational Journey
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg lora-font">
                        My academic background & achievements
                    </p>
                </div>

                {/* Education Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            variants={educationCardVariants}
                            className={`relative border rounded-xl p-6 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm cursor-none ${hoveredIndex === index
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
                                            className={`${edu.className} object-contain`}
                                            style={edu.style}
                                        />
                                        <h3 className="text-xl font-bold tiempos-font" style={{ color: '#A8325A' }}>
                                            {edu.degree}
                                        </h3>
                                    </div>
                                    <p className="text-base flex items-center justify-center gap-2 tiempos-font" style={{ color: '#73F527' }}>
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
                </div>

                {/* Thesis Card */}
                <div className="flex justify-center mt-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={educationCardVariants}
                        className={`relative border rounded-xl p-5 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm w-full max-w-sm cursor-none ${hoveredIndex === 99 ? "border-teal-500 scale-[1.02]" : "border-blue-400/20"}`}
                        onMouseEnter={() => setHoveredIndex(99)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="space-y-4">
                            <div className="space-y-2 text-center">
                                <div className="flex flex-col items-center gap-2">
                                    <img
                                        src="/thesis.png"
                                        alt="Thesis logo"
                                        className="h-14 w-14 object-contain"
                                        style={{ maxWidth: '56px', maxHeight: '56px' }}
                                    />
                                    <h3 className="text-lg font-bold tiempos-font" style={{ color: '#A8325A' }}>
                                        THESIS
                                    </h3>
                                </div>
                                <p className="text-base flex items-center justify-center gap-2 tiempos-font" style={{ color: '#73F527' }}>
                                    BRAC UNIVERSITY
                                </p>
                                <p className="text-gray-400 flex items-center justify-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    2026
                                </p>
                            </div>
                            <p className="text-gray-300 text-[12.5px] text-center">
                                Multimodal Deep Learning for Medical Image Segmentation
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }} 
                    transition={{ duration: 0.4, delay: 0.1 }}
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

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }} 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {certificationData.map((cert, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(100 + index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* THE GLOWING EFFECT BEHIND THE CARD */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>

                                {/* Main Card Content */}
                                <div className={`relative h-full border rounded-xl overflow-hidden bg-gray-900 border-gray-800 p-3 flex flex-col`}>
                                    
                                    {/* Certificate Preview */}
                                    <div className="w-full mb-2">
                                        <div className="relative w-full h-40 bg-black rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img
                                                src={cert.certImage}
                                                alt={cert.title}
                                                className="w-full h-full object-contain"
                                            />
                                            <div className="absolute top-2 right-2 bg-teal-500/20 text-teal-400 px-2 py-1 rounded text-xs flex items-center gap-1">
                                                <Award className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="space-y-2 px-1 pb-2 text-center flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3
                                                className="text-lg font-bold mb-1 group-hover:text-teal-400 transition-colors tiempos-font"
                                                style={{ color: '#A8325A', fontSize: '1rem' }}
                                            >
                                                {cert.title}
                                            </h3>

                                            <div className="flex items-center justify-center gap-2">
                                                {cert.issuerLogo && (
                                                    <img
                                                        src={cert.issuerLogo}
                                                        alt={`${cert.issuer} logo`}
                                                        className="w-5 h-5 object-contain"
                                                    />
                                                )}
                                                <p className="text-sm colus-font" style={{ color: '#73F527', fontSize: '0.95rem' }}>
                                                    {cert.issuer}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center text-gray-400 text-xs mt-3"> {/* Margin added for spacing */}
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {cert.date}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap justify-center gap-1 mt-2">
                                                {cert.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-0.5 text-[0.7rem] rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

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
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
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