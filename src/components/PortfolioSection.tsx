import { Play, Image, Film, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useState, useRef } from "react";

const reels = [
  "/videos/reels/sizzling-brownie.mp4",
  "/videos/reels/platinum-events.mp4",
  "/videos/reels/treat-studio-madam-ji.mp4",
  "/videos/reels/treat-studio-reel.mp4",
  "/videos/reels/tumble-dry-final.mp4",
  "/videos/reels/tumble-reel-3.mp4",
  "/videos/reels/reel-1.mp4",
  "/videos/reels/reel-2.mov",
  "/videos/reels/reel-3.mp4",
  "/videos/reels/reel-4.mp4",
  "/videos/reels/reel-5.mp4",
  "/videos/reels/reel-6.mp4",
  "/videos/reels/reel-7.mp4",
  "/videos/reels/reel-8.mp4",
  "/videos/reels/reel-9.mp4",
  "/videos/reels/reel-10.mov",
  "/videos/reels/reel-11.mp4",
  "/videos/reels/reel-12.mp4",
  "/videos/reels/reel-13.mp4",
  "/videos/reels/reel-14.mp4",
  "/videos/reels/reel-15.mp4",
  "/videos/reels/reel-16.mp4",
  "/videos/reels/reel-17.mp4",
  "/videos/reels/reel-18.mp4",
  "/videos/reels/reel-19.mp4",
  "/videos/reels/reel-20.mp4",
  "/videos/reels/reel-21.mp4",
  "/videos/reels/reel-22.mov",
  "/videos/reels/reel-23.mp4",
  "/videos/reels/reel-24.mp4",
  "/videos/reels/reel-25.mp4",
  "/videos/reels/reel-26.mp4",
];

const posters = [
  "/images/posters/poster-1.jpg",
  "/images/posters/poster-2.jpg",
  "/images/posters/poster-3.jpg",
  "/images/posters/poster-4.jpg",
  "/images/posters/poster-5.jpg",
  "/images/posters/poster-6.png",
  "/images/posters/poster-7.jpg",
  "/images/posters/poster-8.jpg",
  "/images/posters/poster-9.png",
  "/images/posters/poster-10.jpg",
];
const stories = [
  "/videos/stories/fries.mp4",
  "/videos/stories/garlic-potato-pops.mp4",
  "/videos/stories/honey-chilli-potato.mp4",
  "/videos/stories/honey-chilli-story.mp4",
  "/videos/stories/korean-fries.mp4",
  "/videos/stories/nacho-stories.mp4",
  "/videos/stories/pancake.mp4",
  "/videos/stories/pasta-story.mp4",
  "/videos/stories/pink-alfredo-pasta.mp4",
  "/videos/stories/potato-twister-story.mp4",
  "/videos/stories/potato-twister-story-2.mp4",
  "/videos/stories/tumble-dry-post.mp4",
  "/videos/stories/story.mp4",
  "/videos/stories/story-20250807.mp4",
];

interface PortfolioRowProps {
  title: string;
  icon: React.ReactNode;
  items: string[] | null[];
  isVertical?: boolean;
  animationClass?: string;
  isVideo?: boolean;
}

const PortfolioRow = ({ title, icon, items, isVertical = false, animationClass = "animate-scroll-left", isVideo = false }: PortfolioRowProps) => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4 px-4">
        <div className="text-primary">{icon}</div>
        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
          {title}
        </h3>
      </div>

      <div className="overflow-hidden">
        <div className={`flex gap-4 ${animationClass}`}>
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className={`shrink-0 ${isVertical ? "w-32 md:w-40 aspect-[9/16]" : "w-40 md:w-52 aspect-square"
                } bg-secondary rounded-xl border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center group cursor-pointer hover:scale-105 overflow-hidden relative`}
            >
              {item && typeof item === 'string' ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-full h-full relative">
                      {isVideo ? (
                        <video
                          src={item}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                      ) : (
                        <img src={item} alt={`Portfolio item ${index}`} className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500" />
                      )}
                      {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none">
                          <Play className="text-white opacity-80 group-hover:opacity-0 transition-opacity" size={32} />
                        </div>
                      )}
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {isVideo ? (
                        <video
                          src={item}
                          className="max-w-full max-h-[90vh] rounded-md"
                          controls
                          autoPlay
                        />
                      ) : (
                        <img src={item} alt={`Portfolio item ${index}`} className="max-w-full max-h-[90vh] object-contain rounded-md" />
                      )}
                      <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors z-50">
                        <X size={24} />
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Play className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-card/20">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 px-4">
          Our <span className="text-gradient">Work</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto px-4">
          Scroll through our latest creations — viral reels, stunning posters, and captivating motion stories.
        </p>

        <div className="space-y-8">
          <PortfolioRow
            title="Reels"
            icon={<Play size={24} />}
            items={reels}
            isVertical={true}
            isVideo={true}
          />

          <PortfolioRow
            title="Creative Posters"
            icon={<Image size={24} />}
            items={posters}
            isVertical={false}
          />

          <PortfolioRow
            title="Motion Stories"
            icon={<Film size={24} />}
            items={stories}
            isVertical={true}
            isVideo={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
