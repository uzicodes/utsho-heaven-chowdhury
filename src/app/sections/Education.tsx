"use client";

import { useState } from "react";
import {
    Award,
    Calendar,
    ExternalLink,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

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
            school: "BRAC UNIVERSITY - DHAKA",
            year: "2022 - 2026",
            logo: "/bracu.png",
            className: "h-24 w-24",
            style: { maxWidth: '96px', maxHeight: '96px' }
        },
    ];

    const certificationData = [
        {
            title: "Software Engineering",
            issuer: "HACKERRANK",
            issuerLogo: "/icons/hacker.svg",
            date: "March 2026",
            skills: ["Clean Code", "API", "SDLC"],
            certImage: "/certifications/5.webp",
            fullViewUrl: "https://drive.google.com/file/d/1KO2fQrT4YBGHRwztapDMARmyiQEwvPbv/view?usp=drive_link",
        },
        {
            title: "Agile Project Management Professional",
            issuer: "ATLASSIAN",
            issuerLogo: "/icons/atlassian.svg",
            date: "December 2025",
            skills: ["Agile", "Kanban", "Scrum"],
            certImage: "/certifications/15.webp",
            fullViewUrl: "https://drive.google.com/file/d/1D_e54kJLyycpnQEVHbnrcAL7Fei2tdWR/view?usp=sharing",
        },
        {
            title: "DevOps Professional Certificate",
            issuer: "PAGERDUTY",
            issuerLogo: "/icons/pagerduty.svg",
            date: "December 2025",
            skills: ["CI / CD", "DevOps", "IaC"],
            certImage: "/certifications/11.webp",
            fullViewUrl: "https://drive.google.com/file/d/1fzXhMO1K_Cby79JkSioa2vlAfvGMa1Ez/view?usp=sharing",
        },
        {
            title: "Software Product Management",
            issuer: "UNIVERSITY OF ALBERTA",
            issuerLogo: "/icons/alberta.svg",
            date: "March 2026",
            skills: ["Agile", "Client ", "Product Lifecycle"],
            certImage: "/certifications/2.webp",
            fullViewUrl: "https://drive.google.com/file/d/1wRRbrow160c8ZBntPQWMCLAgaFGKOt09/view?usp=sharing",
        },
        {
            title: "Software Testing Professional",
            issuer: "LAMBDATEST",
            issuerLogo: "/icons/lamdatest.svg",
            date: "December 2025",
            skills: ["SQA", "Agile Testing", "SDLC"],
            certImage: "/certifications/12.webp",
            fullViewUrl: "https://drive.google.com/file/d/11Pu-_Oko9oUFc-NZfrH6LP-xjxCWM_am/view?usp=sharing",
        },
        {
            title: "Docker Foundations Professional",
            issuer: "DOCKER",
            issuerLogo: "/icons/cloud/docker.svg",
            date: "November 2025",
            skills: ["Containerization", "Image", "Docker Compose"],
            certImage: "/certifications/10.webp",
            fullViewUrl: "https://drive.google.com/file/d/1yBXVNV6GtR0qoVYNESu5xLgHa0AIhbDu/view?usp=sharing",
        },
        {
            title: "Introduction Software Engineering",
            issuer: "IBM",
            issuerLogo: "/icons/ibm.svg",
            date: "October 2025",
            skills: ["SDLC", "JQuery", "Design Patterns"],
            certImage: "/certifications/8.webp",
            fullViewUrl: "https://drive.google.com/file/d/1T05lfqIkMfn1nzfz_4oV5uvoS76LBm9q/view?usp=sharing",
        },
        {
            title: "Foundations Coding Full-Stack",
            issuer: "MICROSOFT",
            issuerLogo: "/icons/microsoft.svg",
            date: "October 2025",
            skills: ["CI / CD", "Graph Theory", "OOP"],
            certImage: "/certifications/7.webp",
            fullViewUrl: "https://drive.google.com/file/d/1Q3x_w_Iwlb0cohXrWVn4tm64VYKczhcn/view?usp=sharing",
        },
        {
            title: "AI Engineer For Developers Associate",
            issuer: "DATACAMP",
            issuerLogo: "/icons/datacamp.svg",
            date: "August 2025",
            skills: ["LLMs", "MLOPs", "LangChain"],
            certImage: "/certifications/1.webp",
            fullViewUrl: "https://drive.google.com/file/d/1VjhvU30KzGRGuVRpZOBk7v78eyTww7mP/view?usp=sharing",
        },
        {
            title: "Career Essentials in GitHub Professional",
            issuer: "GITHUB",
            issuerLogo: "/icons/cloud/github.svg",
            date: "December 2025",
            skills: ["Version Control", "Git Actions", "Code Review"],
            certImage: "/certifications/14.webp",
            fullViewUrl: "https://drive.google.com/file/d/1_v0_WsCgyhb-IArcvEaeMgbHAF_VrIjD/view?usp=sharing",
        },
        {
            title: "Machine Learning with Python",
            issuer: "ANACONDA",
            issuerLogo: "/icons/anaconda.svg",
            date: "December 2025",
            skills: ["Data Prep", "Regression", "Pandas"],
            certImage: "/certifications/13.webp",
            fullViewUrl: "https://drive.google.com/file/d/15EH6757BzDBdAjuKT_5_RCaLBjcFG9-U/view?usp=sharing",
        },
        {
            title: "Neural Networks & Deep Learning",
            issuer: "DEEPLEARNING",
            issuerLogo: "/icons/deeplearning.svg",
            date: "October 2025",
            skills: ["Vectorization", "Shallow NN", "Deep NN"],
            certImage: "/certifications/9.webp",
            fullViewUrl: "https://drive.google.com/file/d/1Rg5o2O7opV2ZF9K1-gyLWC9ZVAZE02Pl/view?usp=sharing",
        },
    ];



    // Container Animation:
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const cardVariants: Variants = {   //certs slide-in effect
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

    const educationCardVariants: Variants = {    // 3D "flip up" effect for Edu Cards
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
                stiffness: 1600,
                damping: 18,
                mass: 0.18
            }
        }
    };

    return (
        <section className="min-h-screen relative overflow-hidden overflow-x-clip py-20 bg-transparent">
            <div className="max-w-6xl mx-auto px-4 relative z-10 capitalize">
                <div className="text-center mb-12 pt-32">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#F5BE27', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                        EDUCATIONAL JOURNEY
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                        Academic background & achievements
                    </p>
                </div>


                {/* Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.school}
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
                                        <Image
                                            src={edu.logo}
                                            alt={edu.school + ' logo'}
                                            width={100}
                                            height={100}
                                            className={`${edu.className} object-contain`}
                                            style={edu.style}
                                        />
                                        <h3 className="text-xl font-bold" style={{ color: '#C94B76', fontFamily: 'var(--font-ubuntu), sans-serif' }}>
                                            {edu.degree}
                                        </h3>
                                    </div>
                                    <p className="text-base flex items-center justify-center gap-2 font-semibold" style={{ color: '#0CA81F', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                        {edu.school}
                                    </p>
                                    <p className="text-gray-400 flex items-center justify-center gap-2" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                        <Calendar className="w-4 h-4" />
                                        {edu.year}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


                <motion.div        // Certifications Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-60"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#F5BE27', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                            PROFESSIONAL CERTIFICATIONS
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                            Self-development through Industry Recognized Certifications
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
                                key={cert.title}
                                custom={index}
                                variants={cardVariants}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(100 + index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>

                                <div className={`relative h-full border rounded-xl overflow-hidden bg-gray-900 border-gray-800 p-2 sm:p-3 flex flex-col`}>

                                    <div className="w-full mb-1 sm:mb-2">
                                        <div className="relative w-full h-28 sm:h-40 bg-black rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <Image
                                                src={cert.certImage}
                                                alt={cert.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-full object-contain"
                                            />
                                            <div className="absolute top-2 right-2 bg-teal-500/20 text-teal-400 px-2 py-1 rounded text-xs flex items-center gap-1">
                                                <Award className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1 sm:space-y-2 px-1 pb-1 sm:pb-2 text-center flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3
                                                className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-1 group-hover:text-teal-400 transition-colors"
                                                style={{ color: '#c94b76', fontSize: '1rem', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                            >
                                                {cert.title}
                                            </h3>

                                            <div className="flex items-center justify-center gap-2">
                                                {cert.issuerLogo && (
                                                    <Image
                                                        src={cert.issuerLogo}
                                                        alt={`${cert.issuer} logo`}
                                                        width={20}
                                                        height={20}
                                                        className="w-5 h-5 object-contain"
                                                    />
                                                )}
                                                <p className="text-sm font-semibold" style={{ color: '#0ca81f', fontSize: '0.95rem', fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                                                    {cert.issuer}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center text-gray-400 text-xs mt-1 sm:mt-3" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    {cert.date}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap justify-center gap-1 mt-1 sm:mt-2">
                                                {cert.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-2 py-0.5 text-[0.7rem] rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                                        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
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
                                            className="mt-2 sm:mt-3 flex items-center justify-center gap-1 text-[10px] sm:text-xs font-semibold bg-transparent hover:bg-yellow-500/20 text-yellow-400/70 hover:text-blue-400 px-2 py-1 sm:px-3 sm:py-1.5 rounded-none transition-all w-fit mx-auto border border-cyan-400/40 hover:border-green-500"
                                            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                        >
                                            <ExternalLink className="w-3 h-3" />
                                            View Certificate
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

export default EducationSection;