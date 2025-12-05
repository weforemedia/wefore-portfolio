import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    customBusinessType: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby2Z5D3FweIbX7RIFALDClRWw9u7izwXd13L53OZLM-YNb5LG4ksgQnHSpGWft-FCB5/exec";

    if (!GOOGLE_SCRIPT_URL) {
      toast({
        title: "Configuration Required",
        description: "Please set up your Google Sheets webhook URL in the code.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      // Use custom business type if "Other" is selected
      const finalBusinessType = formData.businessType === "Other"
        ? formData.customBusinessType
        : formData.businessType;

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          businessType: finalBusinessType, // Send the resolved business type
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        businessType: "",
        customBusinessType: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const businessTypes = [
    "E-commerce",
    "SaaS / Tech",
    "Restaurant / Food",
    "Fashion / Beauty",
    "Real Estate",
    "Healthcare",
    "Education",
    "Other",
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Start A <span className="text-gradient">Project</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Ready to transform your social media? Let's talk.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-secondary border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-secondary border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (234) 567-8900"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-secondary border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="businessType" className="text-foreground">Business Type</Label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="w-full h-10 px-3 rounded-lg bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            >
              <option value="" disabled>Select your business type</option>
              {businessTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {formData.businessType === "Other" && (
              <Input
                id="customBusinessType"
                name="customBusinessType"
                type="text"
                placeholder="Please specify your business type"
                value={formData.customBusinessType || ""}
                onChange={handleChange}
                required
                className="mt-2 bg-secondary border-border focus:border-primary animate-fade-in-up"
              />
            )}
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 animate-spin" size={18} />
                Sending...
              </>
            ) : (
              <>
                Send Request
                <Send className="ml-2" size={18} />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
