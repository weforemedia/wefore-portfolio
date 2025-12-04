import React from "react";

const teamMembers = [
  {
    name: "Shriya Malode",
    role: "Managing Director and Founder",
    bio: "Leading the vision and growth of the agency.",
    image: "/images/team/shriya-malode.jpg",
  },
  {
    name: "Sanyog Swami",
    role: "Creative Director",
    bio: "Crafting compelling narratives and creative strategies.",
    image: "/images/team/sanyog-swami.jpg",
  },
  {
    name: "Parth Shinde",
    role: "Graphics Designer and Social Media Manager",
    bio: "Designing visual experiences and managing social presence.",
    image: "/images/team/parth-shinde.jpg",
  },
  {
    name: "Pranav Pawar",
    role: "Video Editor and Cinematographer",
    bio: "Capturing and editing stunning visual stories.",
    image: "/images/team/pranav-pawar.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Meet The <span className="text-gradient">Team</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          The creative minds behind your brand's success.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-full bg-gradient-primary p-[2px] group-hover:shadow-glow transition-all duration-300">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-xs md:text-sm mb-2">
                {member.role}
              </p>
              <p className="text-muted-foreground text-xs hidden md:block">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
