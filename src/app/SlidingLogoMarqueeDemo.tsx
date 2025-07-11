import React from "react";
import { 
  Github, 
  Linkedin, 
  Youtube, 
  Facebook
} from "lucide-react";

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
      content: <Facebook className="text-blue-600 hover:text-blue-700 transition-colors" /> 
    },
    { 
      id: "2", 
      content: <Github className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors" /> 
    },
    { 
      id: "3", 
      content: <Linkedin className="text-blue-700 hover:text-blue-800 transition-colors" /> 
    },
    { 
      id: "4", 
      content: <Youtube className="text-red-600 hover:text-red-700 transition-colors" /> 
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
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none" />
      </div>
    </div>
  );
};

export default SlidingLogoMarqueeDemo; 