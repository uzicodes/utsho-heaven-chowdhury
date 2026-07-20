import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectDetails, ProjectSlug } from "@/lib/projectDetails";
import Navbar from "@/app/Navbar";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug as ProjectSlug;
    const project = projectDetails[slug];

    // If a user types a random URL, send them to a 404 page
    if (!project) notFound();

    return (
        <div className="min-h-screen bg-[#0f1115] text-gray-300 font-sans selection:bg-blue-500/30">
            <Navbar />

            {/* 🔵 HERO SECTION (Blue Background with Wave) */}
            <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white pt-32 pb-32 px-6 lg:px-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 z-10 relative">

                    {/* Left: Text Content */}
                    <div className="flex-1 space-y-6">
                        <Link href="/#projects" className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm font-bold uppercase tracking-wider mb-4 transition-colors">
                            <i className="fas fa-arrow-left"></i> Back to Projects
                        </Link>

                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                            {project.title}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-xl leading-relaxed">
                            {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-black/20">
                                    Live Site <i className="fas fa-external-link-alt text-sm"></i>
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-900/50 text-white border border-blue-400/30 px-6 py-3 rounded-md font-bold hover:bg-blue-800/50 transition-colors">
                                    <i className="fab fa-github text-lg"></i> Source Code
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right: Cover Image */}
                    <div className="flex-1 w-full relative group">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src={project.coverImage}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* SVG Wave Divider at the bottom */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.9,132.8,202.14,124.23,243.68,119.23,283.51,96.6,321.39,56.44Z" fill="#0f1115"></path>
                    </svg>
                </div>
            </section>

            {/* ⚫ MAIN CONTENT SECTION (Dark Background) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* LEFT COLUMN (Spans 2/3) */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* The Problem */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>The Problem</h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                {project.theProblem}
                            </p>
                        </div>

                        {/* Development Process */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>Development Process</h2>
                            <div className="space-y-10 border-l-2 border-gray-800 pl-8 ml-3">
                                {project.developmentProcess.map((item, index) => (
                                    <div key={index} className="relative">
                                        <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 bg-[#0f1115] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.step}</h3>
                                        <p className="text-gray-400 leading-relaxed">{item.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Spans 1/3) */}
                    <div className="space-y-12">

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium text-gray-300 flex items-center gap-2 hover:border-gray-600 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Category</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.categories.map((cat) => (
                                    <span key={cat} className="px-3 py-1 bg-blue-900/20 text-blue-400 border border-blue-900/50 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="bg-gradient-to-b from-gray-900 to-[#0f1115] border border-gray-800 p-8 rounded-2xl text-center shadow-xl">
                            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>Like this project?</h3>
                            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                I am actively looking for opportunities to integrate intelligent systems into real-world solutions. Let's build something amazing together.
                            </p>
                            <Link href="/#contacts" className="inline-flex w-full justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                GET IN TOUCH <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}