import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/weforeofficial/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/wefore-media/?viewAsMember=true", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-foreground">
              WE<span className="text-gradient">FORE</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 WeFore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
