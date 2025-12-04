const clients = [
  { name: "Student Council", logo: "/images/clients/student-council.png" },
  { name: "Tumbledry", logo: "/images/clients/tumbledry-new.png" },
  { name: "Treat Studio", logo: "/images/clients/treat-studio-new.png" },
  { name: "Platinum Events", logo: "/images/clients/platinum-new.png" },
  { name: "Komal Electronics", logo: "/images/clients/komal-electronics-new.png" },
  { name: "Prakriti", logo: "/images/clients/prakriti-new.png" },
  { name: "Dent O Clock", logo: "/images/clients/dent-o-clock-new.png" },
  { name: "Orbit", logo: "/images/clients/orbit-new.png" },
];

const ClientLogos = () => {
  return (
    <section id="about" className="py-16 border-y border-border bg-card/30">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Clients</h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee">
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mx-8 md:mx-12 shrink-0"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
