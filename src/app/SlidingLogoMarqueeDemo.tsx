import React from "react";
import { 
  Github, 
  Linkedin, 
  Youtube, 
  Facebook
} from "lucide-react";
import ProfileCard from "./ProfileCard";
import "./ProfileCard.css";

// Mock SlidingLogoMarqueeItem interface
interface SlidingLogoMarqueeItem {
  id: string;
  content: React.ReactNode;
}

// Mock SlidingLogoMarquee component since we don't have access to lightswind
const SlidingLogoMarquee = ({ 
  items, 
  height = "110px", 
  speed = 20, 
  enableBlur = true, 
  blurIntensity = 1.5, 
  gap = "1.5rem",
  className = ""
}: {
  items: SlidingLogoMarqueeItem[];
  height?: string;
  speed?: number;
  enableBlur?: boolean;
  blurIntensity?: number;
  gap?: string;
  className?: string;
}) => {
  const animationDuration = `${100 / speed}s`;
  
  return (
    <div 
      className={`overflow-hidden ${className}`}
      style={{ height }}
    >
      <div 
        className="flex animate-marquee"
        style={{ 
          gap,
          animationDuration
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <div 
            key={`${item.id}-${index}`}
            className={`flex-shrink-0 flex items-center justify-center text-4xl transition-all duration-300 hover:scale-110 ${
              enableBlur ? 'filter blur-[0.5px] hover:blur-none' : ''
            }`}
            style={{
              minWidth: '80px',
              filter: enableBlur ? `blur(${blurIntensity * 0.5}px)` : 'none'
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

const SlidingLogoMarqueeDemo = () => {
  // Sample logo data with improved icons
  const sampleLogos: SlidingLogoMarqueeItem[] = [
    { 
      id: "1", 
      content: <Facebook style={{ color: '#1877F3' }} fill="#1877F3" stroke="none" />
    },
    { 
      id: "2", 
      content: <Github style={{ color: '#181717' }} fill="#181717" stroke="none" />
    },
    { 
      id: "3", 
      content: <Linkedin style={{ color: '#0A66C2' }} fill="#0A66C2" stroke="none" />
    },
    { 
      id: "4", 
      content: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.94C18.2 6 12 6 12 6s-6.2 0-7.87.06A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.93 1.94C5.8 18 12 18 12 18s6.2 0 7.87-.06a2.75 2.75 0 0 0 1.93-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999z" fill="#FF0000"/>
          <polygon points="10 15 15 12 10 9 10 15" fill="#fff" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full flex justify-center mt-4">
      {/* Centered and shortened marquee container */}
      <div className="relative" style={{ maxWidth: '400px', width: '100%' }}>
        <SlidingLogoMarquee
          items={sampleLogos}
          height="110px"
          speed={20}
          enableBlur={false}
          blurIntensity={1.5}
          gap="0.5rem"
          className="mx-auto w-full"
        />
        {/* Profile Card centered below the marquee */}
        <div className="flex justify-center mt-8">
          <ProfileCard
            avatarUrl="/dp.jpeg"
            name="Utsho Heaven Chowdhury"
            title="Full Stack Developer"
            handle="utshodev"
            status="Online"
            contactText="Contact"
            showUserInfo={true}
          />
        </div>
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none" />
      </div>
    </div>
  );
};

export default SlidingLogoMarqueeDemo; 