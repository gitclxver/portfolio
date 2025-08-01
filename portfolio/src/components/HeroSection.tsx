import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface HeroData {
  name: string;
  jobTitle: string;
  location: string;
  age: number | string;
}

interface SocialLinks {
  github: string;
  linkedin: string;
}

interface ContactData {
  email: string;
  phone: string;
}

interface HeroSectionProps {
  data: HeroData;
  socialLinks: SocialLinks;
  contactData: ContactData;
  profileImageUrl?: string; // Prop for the profile image URL
}

function HeroSection({
  data,
  socialLinks,
  contactData,
  profileImageUrl,
}: HeroSectionProps) {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-6 md:space-y-0 md:space-x-8"
    >
      {/* Profile Image or Placeholder */}
      {profileImageUrl ? (
        <img
          src={profileImageUrl}
          alt={`Profile picture of ${data.name}`}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-5xl md:text-8xl flex-shrink-0">
          TM
        </div>
      )}

      <div className="space-y-4">
        {/* Name and Job Title */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Who is...<span className="text-blue-500">{data.name}</span>
        </h1>

        {/* Job Title, Location, and Age on a single line */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-lg text-gray-600 dark:text-gray-400">
          <span>{data.age} year old</span>
          <span className="h-6 w-px bg-gray-400 dark:bg-gray-600"></span>
          <span>{data.jobTitle}</span>
          <span className="h-6 w-px bg-gray-400 dark:bg-gray-600"></span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {data.location}
          </span>
        </div>

        {/* Icons and Contact Button below the text */}
        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-400">
          {/* Contact Dialog Button with Phone icon */}
          <Dialog
            open={isContactDialogOpen}
            onOpenChange={setIsContactDialogOpen}
          >
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Contact Me"
                className="text-gray-600 dark:text-gray-400"
              >
                <Phone className="h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Get in Touch</DialogTitle>
                <DialogDescription>
                  Feel free to reach out to me through any of these platforms.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5" />
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {contactData.email}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5" />
                  <span>{contactData.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="h-5 w-5" />
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-5 w-5" />
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </Button>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
