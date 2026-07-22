export interface Project {
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
}

export const projectDetails: Record<string, Project> = {
    "lamb-falcons": {
        title: "LAMB FALCONS",
        tagline: "Modern, Dynamic & Central Online hub.",
        shortDescription: "A central online hub providing public visitors with club details and offering a secure member portal for private access and community engagement.",
        coverImage: "/projects/lamb-falcons.webp",
        theProblem: "The club needed a centralized digital presence to handle both public-facing information and a secure, private community space for members to engage without relying on fragmented third-party social groups.",
        developmentProcess: [
            {
                step: "Platform Architecture",
                details: "Built the foundation serving as the modern, dynamic online hub for the club."
            },
            {
                step: "Authentication & Security",
                details: "Implemented a secure login and dedicated member portal for private access and community engagement using Clerk."
            },
            {
                step: "Interactive UI/UX",
                details: "Utilized animated libraries and interactive UI elements (GSAP) for a smooth, modern user experience."
            },
            {
                step: "Deployment & Maintenance",
                details: "Made the platform production-ready with CI/CD pipelines via Vercel for seamless updates."
            }
        ],
        techStack: ["Next.js", "Node.js", "React", "TypeScript", "Clerk", "GSAP", "Tailwind CSS"],
        liveUrl: "https://lambfalcons.vercel.app/",
        githubUrl: "https://github.com/uzicodes/lamb-falcons",
        featureSpotlight: [
            { imageUrl: "/projects/lamb-falcons.webp", caption: "Feature Spotlight 1" },
            { imageUrl: "/projects/lamb-falcons.webp", caption: "Feature Spotlight 2" },
            { imageUrl: "/projects/lamb-falcons.webp", caption: "Feature Spotlight 3" },
            { imageUrl: "/projects/lamb-falcons.webp", caption: "Feature Spotlight 4" },
            { imageUrl: "/projects/lamb-falcons.webp", caption: "Feature Spotlight 5" },
            { imageUrl: "/projects/lamb-falcons.webp", caption: "Feature Spotlight 6" }
        ]
    },

    "dhaka-basha": {
        title: "ঢাকা-বাসা",
        tagline: "Comprehensive rental platform for Dhaka.",
        shortDescription: "A localized rental platform streamlining property searches and To-Let posting in Dhaka with native Bengali language support.",
        coverImage: "/projects/dhaka-basha.webp",
        theProblem: "Finding a rental property in Dhaka often relies on fragmented Facebook groups or physical signs. There was a need for a dedicated, localized web platform that allowed detailed filtering by sub-locations and supported the native Bengali language.",
        developmentProcess: [
            {
                step: "Advanced Search & Filtering",
                details: "Engineered advanced filtering by specific Dhaka areas, sub-locations, and property types."
            },
            {
                step: "Database Architecture",
                details: "Integrated Prisma ORM with Neon PostgreSQL for highly efficient and scalable data fetching."
            },
            {
                step: "Secure Authentication",
                details: "Set up Clerk for secure authentication, Google SSO, and automated database syncing via Webhooks."
            },
            {
                step: "Data Validation",
                details: "Built robust property posting forms with strict validations using React Hook Form and Zod."
            },
            {
                step: "User Dashboard & Localization",
                details: "Created personalized user dashboards and designed a responsive, modern UI with native Bengali language support."
            }
        ],
        techStack: ["Next.js", "Node.js", "React", "TypeScript", "Neon DB", "Redis", "Socket.io", "Prisma", "Clerk", "Tailwind CSS"],
        liveUrl: "https://dhaka-basha.vercel.app/",
        githubUrl: "https://github.com/uzicodes/Dhaka-Basha",
        featureSpotlight: [
            { imageUrl: "/projects/detailed-page/dhaka-basha/1.webp", caption: "Device Responsive Interface" },
            { imageUrl: "/projects/detailed-page/dhaka-basha/2.webp", caption: "Advanced Filtering System" },
            { imageUrl: "/projects/detailed-page/dhaka-basha/3.webp", caption: "Rental Posting Form" },
            { imageUrl: "/projects/detailed-page/dhaka-basha/4.webp", caption: "User Dashboard Management (Posts, Chats, Saved)" },
            { imageUrl: "/projects/detailed-page/dhaka-basha/5.webp", caption: "Chat UI with Rental Post Owners" },
            { imageUrl: "/projects/detailed-page/dhaka-basha/6.webp", caption: "Post View with Detailed Info" }
        ]
    },

    "culinary-canvas": {
        title: "Culinary Canvas",
        tagline: "Secure food delivery and administration platform.",
        shortDescription: "Production-ready modern web platform offering a seamless ordering experience for users and efficient operations management for admins.",
        coverImage: "/projects/culinary-canvas.webp",
        theProblem: "Local culinary businesses struggle to manage online orders, track revenue, and process payments securely without paying hefty fees to third-party delivery aggregators.",
        developmentProcess: [
            {
                step: "Real-time Ordering Flow",
                details: "Created an intuitive ordering flow with categorized food items fetched in real-time from MongoDB."
            },
            {
                step: "User Profile Management",
                details: "Implemented user profile management allowing customers to securely track their previous order history."
            },
            {
                step: "Admin Control Panel",
                details: "Developed a comprehensive Admin Dashboard with full CRUD operations for menu items and sections."
            },
            {
                step: "Business Analytics",
                details: "Built analytical tools for admins to track orders, daily/monthly revenue, restaurant metrics, and user feedback."
            },
            {
                step: "Payment Integration",
                details: "Integrated SSLcommerz for secure payment processing and automated invoice generation."
            }
        ],
        techStack: ["Next.js", "Node.js", "React", "TypeScript", "MongoDB", "Redis", "SSLCommerz", "Tailwind CSS"],
        liveUrl: "https://culinarycanvaas.vercel.app/",
        githubUrl: "https://github.com/uzicodes/culinary-canvas",
        featureSpotlight: [
            { imageUrl: "/projects/culinary-canvas.webp", caption: "Menu Interface (Mock)" },
            { imageUrl: "/projects/culinary-canvas.webp", caption: "Cart Summary (Mock)" },
            { imageUrl: "/projects/culinary-canvas.webp", caption: "Checkout Flow (Mock)" },
            { imageUrl: "/projects/culinary-canvas.webp", caption: "Order Tracking (Mock)" },
            { imageUrl: "/projects/culinary-canvas.webp", caption: "Admin Dashboard (Mock)" },
            { imageUrl: "/projects/culinary-canvas.webp", caption: "Analytics (Mock)" }
        ]
    },

    "northern-paribahan": {
        title: "Northern Paribahan",
        tagline: "Comprehensive transport and ticket management.",
        shortDescription: "A seamless ticket booking system with real-time seat availability, instant ticket confirmation, and robust admin controls.",
        coverImage: "/projects/northern-paribahan.webp",
        theProblem: "Transport companies require a reliable, real-time system to prevent double-booking of seats while giving administrators full control over routes, schedules, and dynamic ticketing.",
        developmentProcess: [
            {
                step: "Real-time Booking Engine",
                details: "Developed seamless ticket booking with real-time seat availability and instant confirmation."
            },
            {
                step: "Live Data Seeding",
                details: "Implemented Socket.io to stream real-time updates for buses and timetables directly to the client."
            },
            {
                step: "Authentication Integration",
                details: "Utilized Supabase for secure user authentication and personalized travel history management."
            },
            {
                step: "Admin & Route Management",
                details: "Created robust admin controls for managing dynamic routes, transport schedules, fares, and user data."
            },
            {
                step: "Checkout & Delivery",
                details: "Integrated SSLCommerz checkout for secure transactions, followed by automated Mail and PDF ticket delivery."
            }
        ],
        techStack: ["Next.js", "Node.js", "React", "TypeScript", "Socket.io", "Prisma", "Supabase", "SSLCommerz", "Render"],
        liveUrl: "https://northern-paribahan.onrender.com",
        githubUrl: "https://github.com/uzicodes/northern-paribahan",
        featureSpotlight: [
            { imageUrl: "/projects/northern-paribahan.webp", caption: "Search Routes (Mock)" },
            { imageUrl: "/projects/northern-paribahan.webp", caption: "Seat Selection (Mock)" },
            { imageUrl: "/projects/northern-paribahan.webp", caption: "Payment Gateway (Mock)" },
            { imageUrl: "/projects/northern-paribahan.webp", caption: "Ticket PDF (Mock)" },
            { imageUrl: "/projects/northern-paribahan.webp", caption: "Admin Controls (Mock)" },
            { imageUrl: "/projects/northern-paribahan.webp", caption: "Real-time Updates (Mock)" }
        ]
    },

    "aura-force": {
        title: "Aura Force",
        tagline: "Robust fitness platform for gym operations.",
        shortDescription: "A complete fitness platform streamlining gym operations, enhancing member experiences, and offering personalized workout tracking.",
        coverImage: "/projects/aura-force.webp",
        theProblem: "Gyms often manage memberships, trainer schedules, and member progress across different, disjointed software tools, leading to administrative overhead and poor member experience.",
        developmentProcess: [
            {
                step: "Scheduling & Booking",
                details: "Engineered real-time class scheduling with capabilities for members to book classes and personal trainers."
            },
            {
                step: "Database & Real-time Feedback",
                details: "Used Prisma to fetch data from Supabase, alongside real-time user feedback integration from the database."
            },
            {
                step: "Member Personalization",
                details: "Implemented Clerk for authentication and developed features for tracking user BMI and personalized diet plans."
            },
            {
                step: "Gym Administration",
                details: "Built an admin dashboard for efficiently managing active memberships, trainers, and facility classes."
            },
            {
                step: "UI & Transactions",
                details: "Designed an animated, highly responsive UI and secured all financial transactions via SSLCommerz."
            }
        ],
        techStack: ["Next.js", "React", "TypeScript", "Supabase", "Prisma", "Redis", "Clerk", "Tailwind CSS"],
        liveUrl: "https://auraforce.vercel.app/",
        githubUrl: "https://github.com/uzicodes/AuraForce",
        featureSpotlight: [
            { imageUrl: "/projects/aura-force.webp", caption: "Class Booking (Mock)" },
            { imageUrl: "/projects/aura-force.webp", caption: "Trainer Profiles (Mock)" },
            { imageUrl: "/projects/aura-force.webp", caption: "Workout Tracking (Mock)" },
            { imageUrl: "/projects/aura-force.webp", caption: "Member Dashboard (Mock)" },
            { imageUrl: "/projects/aura-force.webp", caption: "Diet Plan Generator (Mock)" },
            { imageUrl: "/projects/aura-force.webp", caption: "Admin Overview (Mock)" }
        ]
    },

    "alora": {
        title: "ALORA",
        tagline: "Premium fragrance e-commerce platform.",
        shortDescription: "A luxurious full-stack e-commerce platform offering an exquisite collection of premium fragrances with a heavily optimized backend.",
        coverImage: "/projects/alora.webp",
        theProblem: "Premium e-commerce brands require high-performance, visually stunning storefronts that can handle traffic spikes while protecting API routes from malicious scraping and spam.",
        developmentProcess: [
            {
                step: "Dynamic Inventory",
                details: "Built dynamic real-time stock updates, product categorizations, and an automated image sanitization pipeline via Cloudinary."
            },
            {
                step: "High-Performance Admin",
                details: "Developed an admin dashboard utilizing static caching for instant inventory management and product editing."
            },
            {
                step: "Database & Auth",
                details: "Integrated Prisma ORM with Neon PostgreSQL for scalability, and used Clerk for seamless user profiles and webhook syncing."
            },
            {
                step: "API Security",
                details: "Implemented Upstash Redis rate-limiting to protect critical API endpoints against spam and abuse."
            },
            {
                step: "Checkout Integration",
                details: "Secured the smooth checkout process and order management by integrating the SSLCommerz gateway."
            }
        ],
        techStack: ["Next.js", "Node.js", "React", "TypeScript", "Neon DB", "Redis", "Clerk", "SSLCommerz", "Tailwind CSS"],
        liveUrl: "https://aloraa.vercel.app/",
        githubUrl: "https://github.com/uzicodes/Alora",
        featureSpotlight: [
            { imageUrl: "/projects/detailed-page/alora/1.webp", caption: "Device Responsive Interface" },
            { imageUrl: "/projects/detailed-page/alora/2.webp", caption: "Product Page Interface" },
            { imageUrl: "/projects/detailed-page/alora/3.webp", caption: "User Profile Management" },
            { imageUrl: "/projects/detailed-page/alora/4.webp", caption: "Customizable Cart Page" },
            { imageUrl: "/projects/detailed-page/alora/5.webp", caption: "Secured Checkout Page" },
            { imageUrl: "/projects/detailed-page/alora/6.webp", caption: "Dynamic Inventory Management" }
        ]
    }
};

export type ProjectSlug = keyof typeof projectDetails;