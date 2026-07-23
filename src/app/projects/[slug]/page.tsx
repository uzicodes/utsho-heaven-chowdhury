import * as React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectDetails, ProjectSlug } from "@/lib/projectDetails";
import BackToProjects from "./BackToProjects";
import NavigateLink from "./NavigateLink";
import ScrollToTop from "./ScrollToTop";
import FeatureSpotlight from "./FeatureSpotlight";
import { ReactLenis } from "lenis/react";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all project slugs
export async function generateStaticParams() {
    return Object.keys(projectDetails).map((slug) => ({ slug }));
}

// Dynamic metadata per project
export async function generateMetadata({ params }: ProjectPageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug as ProjectSlug;
    const project = projectDetails[slug];

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `${project.title} | Utsho Heaven Chowdhury`,
        description: project.shortDescription,
    };
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug as ProjectSlug;
    const project = projectDetails[slug];

    // If a user types a random URL, send them 404 page
    if (!project) notFound();

    // Extract YouTube video ID from URL
    const getYouTubeId = (url?: string) => {
        if (!url) return null;
        const match = url.match(
            /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/
        );
        return match ? match[1] : null;
    };

    const videoId = getYouTubeId(project.videoUrl);

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-[#0f1115] text-gray-300 font-sans selection:bg-blue-500/30">
                <ScrollToTop />

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-[#1a2e6b] via-[#1e3a8a] to-[#1e40af] text-white pt-16 pb-36 px-6 lg:px-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 z-10 relative">

                        {/* Left: Text Content */}
                        <div className="flex-1 space-y-5">
                            <BackToProjects slug={slug} />

                            <h1
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
                                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                            >
                                {project.title}
                            </h1>

                            <p className="text-lg text-blue-100/90 max-w-xl leading-relaxed">
                                {project.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-blue-900/40 text-white border border-blue-400/25 px-5 py-2.5 rounded-none font-bold text-sm hover:bg-[#06CC2D] hover:border-[#06CC2D] hover:text-black transition-colors backdrop-blur-sm"
                                        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                    >
                                        Live Site
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-blue-900/40 text-white border border-blue-400/25 px-5 py-2.5 rounded-none font-bold text-sm hover:bg-[#06CC2D] hover:border-[#06CC2D] hover:text-black transition-colors backdrop-blur-sm"
                                        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                    >
                                        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Codebase
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Right: Cover Image */}
                        <div className="flex-1 w-full relative group">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 transform transition-transform duration-500 group-hover:scale-[1.02]">
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

                    {/* SVG Wave Divider */}
                    <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none z-0">
                        <svg className="relative block w-[calc(100%+2px)] -ml-px h-[60px] md:h-[90px]" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,80 C120,110 240,50 360,70 C480,90 600,30 720,50 C840,70 960,100 1080,60 C1200,20 1360,80 1440,70 L1440,120 L0,120 Z" fill="#0f1115" />
                        </svg>
                    </div>
                </section>

                {/* MAIN CONTENT SECTION */}
                <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* LEFT COLUMN */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* The Problem */}
                            <div>
                                <h2
                                    className="text-3xl font-bold mb-6"
                                    style={{ color: '#F5BE27', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                >
                                    The Problem
                                </h2>
                                <p className="text-lg leading-relaxed text-gray-400">
                                    {project.theProblem}
                                </p>
                            </div>

                            {/* Development Process */}
                            <div>
                                <h2
                                    className="text-3xl font-bold mb-8"
                                    style={{ color: '#F5BE27', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                >
                                    Development Process
                                </h2>
                                <div className="space-y-10 border-l-2 border-gray-800 pl-8 ml-3">
                                    {project.developmentProcess.map((item, index) => (
                                        <div key={index} className="relative">
                                            <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 border-green-500 bg-[#0f1115] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                                            <h3
                                                className="text-xl font-bold text-white mb-2"
                                                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                            >
                                                {item.step}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed">{item.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* YouTube Video Embed */}
                            {videoId && (
                                <div>
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-gray-800">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title={`${project.title} - Video`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-10">

                            {/* Tech Stack */}
                            <div>
                                <h3
                                    className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4"
                                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                >
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2 max-w-[280px]">
                                    {(() => {
                                        // Map projectDetails techStack names to skillicons.dev slugs
                                        const techToSlug: Record<string, string> = {
                                            'Next.js': 'nextjs', 'Node.js': 'nodejs', 'React': 'react',
                                            'TypeScript': 'ts', 'Tailwind CSS': 'tailwind', 'MongoDB': 'mongodb',
                                            'Redis': 'redis', 'Prisma': 'prisma', 'Supabase': 'supabase',
                                            'Vercel': 'vercel', 'Cloudflare': 'cloudflare',
                                        };
                                        // Custom icons (same as Projects.tsx)
                                        const customIcons: Record<string, { src: string; alt: string; bg: string }> = {
                                            'GSAP': { src: '/icons/gsap.png', alt: 'GSAP', bg: 'bg-transparent' },
                                            'Clerk': { src: '/icons/tools/clerk.svg', alt: 'Clerk', bg: 'bg-[#1C1C1E]' },
                                            'Socket.io': { src: '/icons/socket.svg', alt: 'Socket.io', bg: 'bg-white' },
                                            'SSLCommerz': { src: '/icons/ssl.jpg', alt: 'SSLCommerz', bg: 'bg-white' },
                                            'Render': { src: '/icons/render.svg', alt: 'Render', bg: 'bg-white' },
                                            'Neon DB': { src: '/icons/database/neon.svg', alt: 'Neon DB', bg: 'bg-transparent' },
                                        };

                                        const elements: React.ReactNode[] = [];

                                        project.techStack.forEach((tech) => {
                                            const custom = customIcons[tech];
                                            if (custom) {
                                                elements.push(
                                                    <div key={tech} className={`w-10 h-10 ${custom.bg} rounded-lg flex items-center justify-center p-1`} title={tech}>
                                                        <Image src={custom.src} alt={custom.alt} width={32} height={32} className="w-full h-full object-contain" />
                                                    </div>
                                                );
                                            } else {
                                                const slug = techToSlug[tech];
                                                if (slug) {
                                                    elements.push(
                                                        <Image
                                                            key={tech}
                                                            src={`https://skillicons.dev/icons?i=${slug}`}
                                                            alt={tech}
                                                            width={40}
                                                            height={40}
                                                            className="w-10 h-10 rounded-lg"
                                                            unoptimized
                                                            title={tech}
                                                        />
                                                    );
                                                }
                                            }
                                        });

                                        return elements;
                                    })()}
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-gradient-to-b from-gray-900 to-[#0f1115] border border-gray-800 p-8 rounded-2xl text-center shadow-xl">
                                <h3
                                    className="text-xl font-bold text-white mb-3"
                                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                >
                                    Like this project?
                                </h3>
                                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                    I am actively looking for new opportunities to build brilliant things alongside brilliant people.
                                </p>
                                <Link
                                    href="/#contacts"
                                    className="inline-flex w-full justify-center items-center gap-2 bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-white hover:text-white font-bold py-3 px-6 rounded-none transition-colors"
                                    style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                >
                                    GET IN TOUCH
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* System Architecture Section */}
                {project.architecture && (
                    <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
                        <h2
                            className="text-3xl font-bold mb-6 text-[#F5BE27]"
                            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                        >
                            System Architecture
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-400 mb-10 max-w-3xl">
                            {project.architecture.description}
                        </p>
                        <div className="relative w-full max-w-4xl mx-auto flex justify-center items-center rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-gray-800 bg-[#0a0b0e] p-4 md:p-8">
                            <Image
                                src={project.architecture.diagramUrl}
                                alt={`${project.title} System Architecture`}
                                width={1200}
                                height={1200}
                                className="w-full max-w-5xl h-auto object-contain"
                                sizes="(max-width: 1280px) 100vw, 1280px"
                            />
                        </div>
                    </section>
                )}

                {/* Feature Spotlight Section */}
                {project.featureSpotlight && project.featureSpotlight.length > 0 && (
                    <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
                        <h2
                            className="text-3xl font-bold mb-10 text-[#F5BE27]"
                            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                        >
                            Feature Spotlight
                        </h2>
                        <FeatureSpotlight items={project.featureSpotlight} />
                    </section>
                )}

                {/* "Have an idea brewing?" CTA Banner */}
                <section className="relative bg-gradient-to-r from-[#0c2d48] via-[#14395e] to-[#0c2d48] py-24 px-6 lg:px-12 overflow-hidden">
                    {/* Top wavy border */}
                    <div className="absolute -top-px left-0 w-full overflow-hidden leading-none z-10">
                        <svg className="relative block w-[calc(100%+2px)] -ml-px h-[40px] md:h-[70px]" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,40 C120,10 240,70 360,50 C480,30 600,90 720,70 C840,50 960,20 1080,60 C1200,100 1360,40 1440,50 L1440,0 L0,0 Z" fill="#0f1115" />
                        </svg>
                    </div>

                    {/* Subtle decorative gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="space-y-3 max-w-2xl">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-white"
                                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                            >
                                Have an idea brewing?
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                Let&apos;s turn your vision into a production-ready reality. Scalable code, clean architecture, and the tech to make it happen for the greater good.
                            </p>
                        </div>
                        <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto md:ml-16 lg:ml-28 xl:ml-36">
                            <Link
                                href="/#contacts"
                                className="inline-flex justify-center items-center gap-2 bg-[#279CF5] border border-[#279CF5] text-black hover:bg-transparent hover:text-white font-bold py-3.5 px-8 rounded-none transition-colors shadow-lg shadow-blue-900/30 text-sm uppercase tracking-wider w-full sm:w-auto min-w-[200px]"
                                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                            >
                                Start a Project
                            </Link>
                            <a
                                href="https://calendly.com/utsho/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-2 bg-[#06CC2D] border border-[#06CC2D] text-black hover:bg-transparent hover:text-white font-bold py-3.5 px-8 rounded-none transition-colors text-sm uppercase tracking-wider w-full sm:w-auto min-w-[200px]"
                                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                            >
                                Book Consultation
                            </a>
                        </div>
                    </div>

                    {/* Bottom wavy border */}
                    <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none z-10">
                        <svg className="relative block w-[calc(100%+2px)] -ml-px h-[40px] md:h-[70px]" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0,80 C120,110 240,50 360,70 C480,90 600,30 720,50 C840,70 960,100 1080,60 C1200,20 1360,80 1440,70 L1440,120 L0,120 Z" fill="#0f1115" />
                        </svg>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="bg-[#0f1115] pt-20 pb-8 px-6 lg:px-12 overflow-hidden">
                    <div className="w-full max-w-7xl mx-auto text-center space-y-8">

                        {/* Big Heading */}
                        <h2
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-extrabold text-white leading-none tracking-tight md:whitespace-nowrap"
                            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                        >
                            LET&apos;S MAKE<span className="hidden md:inline"> </span><br className="md:hidden" />IT HAPPEN
                        </h2>

                        {/* Email */}
                        <a
                            href="mailto:utsho8chowdhury@gmail.com"
                            className="inline-block text-[#e07a3a] hover:text-[#06CC2D] text-lg sm:text-xl md:text-2xl font-bold tracking-wider transition-colors"
                            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                        >
                            utsho8chowdhury@gmail.com
                        </a>

                        {/* Navigation Links */}
                        <div className="space-y-4 pt-4">
                            <p className="text-xs text-gray-600 uppercase tracking-widest font-medium">Navigate</p>
                            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                                {["Home", "About", "Skills", "Projects", "Contacts"].map((item) => (
                                    <NavigateLink key={item} item={item} />
                                ))}
                            </nav>
                        </div>

                        {/* Social Icons */}
                        <div className="space-y-4 pt-2">
                            <p className="text-xs text-gray-600 uppercase tracking-widest font-medium">Socials</p>
                            <div className="flex justify-center gap-5">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/utsho-heaven-chowdhury/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#06CC2D] transition-colors" aria-label="LinkedIn">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/uzicodes" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#06CC2D] transition-colors" aria-label="GitHub">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                                {/* Facebook */}
                                <a href="https://www.facebook.com/utsh0chowdhury" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#06CC2D] transition-colors" aria-label="Facebook">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                {/* X (Twitter) */}
                                <a href="https://x.com/utsh0w" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#06CC2D] transition-colors" aria-label="X">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                {/* Instagram */}
                                <a href="https://instagram.com/utsh0_" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#06CC2D] transition-colors" aria-label="Instagram">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </ReactLenis>
    );
}

