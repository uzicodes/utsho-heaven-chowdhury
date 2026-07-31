export interface Tool {
    title: string;
    tagline: string;
    shortDescription: string;
    coverImage: string;
    liveUrl?: string;
    githubUrl?: string;
    videoUrl?: string;
    theProblem: string;
    developmentProcess: {
        step: string;
        details: string;
    }[];
    techStack: string[];
    featureSpotlight?: {
        imageUrl: string;
        caption: string;
    }[];
    architecture?: {
        diagramUrl: string;
        description: string;
    };
}

export const toolDetails: Record<string, Tool> = {
    "scan-react": {
        title: "SCAN-REACT",
        tagline: "Static React code analysis platform.",
        shortDescription: "Static React code analysis platform engineered to optimize repositories for the native React Compiler.",
        coverImage: "/projects/Tools/scan-react/scan-react.webp",
        theProblem: "Developers needed an interactive diagnostic dashboard featuring atomic, ready-to-use AI-Prompt for rapid IDE refinement to prepare for React Compiler.",
        developmentProcess: [
            {
                step: "Code Diagnostics",
                details: "Programmatic AST-based code diagnostics running on a custom serverless-ready Node.js analysis engine."
            },
            {
                step: "Performance Optimization",
                details: "Featuring V8 engine memory guards & GitHub API metadata pre-flight checks."
            },
            {
                step: "API Security",
                details: "API protection with Redis rate-limiting."
            },
            {
                step: "GitHub Integration",
                details: "GitHub REST API for Source Control Interface utilized for pre-flight repository size metadata."
            },
            {
                step: "Cloud Architecture",
                details: "Decoupled cloud architecture, Vercel for the Next.js frontend and Render for backend execution containers."
            }
        ],
        techStack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Redis", "Render", "V8 Engine", "REST API"],
        liveUrl: "https://scanreact.vercel.app",
        githubUrl: "https://github.com/uzicodes/Scan-React",
        architecture: {
            diagramUrl: "/projects/Tools/scan-react/scan-react.webp",
            description: "The architecture of Scan-React, utilizing decoupled cloud architecture for frontend and backend execution containers."
        },
        featureSpotlight: [
            { imageUrl: "/projects/Tools/scan-react/1.webp", caption: "Device Responsive Interface" },
            { imageUrl: "/projects/Tools/scan-react/2.webp", caption: "Scanning Architechture Pipeline" },
            { imageUrl: "/projects/Tools/scan-react/3.webp", caption: "Analysis Engine Breakdown as Loader" },
            { imageUrl: "/projects/Tools/scan-react/4.webp", caption: "Scan Result Dashboard" },
            { imageUrl: "/projects/Tools/scan-react/5.webp", caption: "Issues in proper Details with Copyable AI Prompt" },
            { imageUrl: "/projects/Tools/scan-react/6.webp", caption: "Dynamic Bug Report From (Web3) " }
        ]
    },

    "stats-tube": {
        title: "STATS-TUBE",
        tagline: "High-performance YouTube analytics.",
        shortDescription: "High-performance YouTube analytics and competitor intelligence platform engineered to uncover deep engagement metrics & channel momentum.",
        coverImage: "/projects/Tools/stats-tube/stats-tube.webp",
        theProblem: "Deep content strategy analysis and engagement metrics are hard to uncover effectively using native tools.",
        developmentProcess: [
            {
                step: "Proxy Routing",
                details: "Server-side proxy routing for YouTube Data API v3."
            },
            {
                step: "API Security",
                details: "Endpoint protection & API quota managing from Redis."
            },
            {
                step: "Data Pipeline",
                details: "Highly optimized data pipeline using batch fetching for extensive video statistics with sub-second latency."
            },
            {
                step: "Data Visualization",
                details: "Interactive data visualization by React-Recharts library."
            },
            {
                step: "AI Matchup",
                details: "Algorithmic head-to-head comparison featuring AI matchup summaries and engagement scoring."
            }
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Redis", "YouTube", "Recharts"],
        liveUrl: "https://stats-tube.vercel.app",
        githubUrl: "https://github.com/uzicodes/Stats-Tube",
        architecture: {
            diagramUrl: "/projects/Tools/stats-tube/stats-tube.webp",
            description: "The architecture of Stats-Tube, featuring high-performance proxy routing and batch fetching data pipeline."
        },
        featureSpotlight: [
            { imageUrl: "/projects/Tools/stats-tube/1.webp", caption: "Device Responsive Interphase" },
            { imageUrl: "/projects/Tools/stats-tube/2.webp", caption: "Creator Dashboard detailed with channel stats" },
            { imageUrl: "/projects/Tools/stats-tube/3.webp", caption: "Analytics Visualization with recharts package" },
            { imageUrl: "/projects/Tools/stats-tube/4.webp", caption: "Momentum Graph (Video vs Millions)" },
            { imageUrl: "/projects/Tools/stats-tube/5.webp", caption: "Video Library detailed with video analytics." },
            { imageUrl: "/projects/Tools/stats-tube/6.webp", caption: "Creator Head-to-Head Comparison with metrics." }
        ]
    }
};

export type ToolSlug = keyof typeof toolDetails;
