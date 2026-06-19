import HeroSection from "@/components/HeroSection";
import ExperienceAndEducation from "@/components/ExperienceAndEducation";
import ProjectsSection from "@/components/ProjectsSection";
import BackgroundIcons from "@/components/BackgroundIcons";
import DailyQuote from "@/components/DailyQuote";
import portfolioData from "@/data/portfolioData";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#2a1045] overflow-x-hidden">
      <BackgroundIcons />
      <div className="relative z-10">
        <HeroSection
          data={portfolioData.hero}
          socialLinks={portfolioData.socialLinks}
          contactData={portfolioData.contact}
          profileImageUrl={portfolioData.hero.profileImageUrl}
        />
        <ExperienceAndEducation
          experience={portfolioData.experience}
          education={portfolioData.education}
          certificates={portfolioData.certificates}
        />
        <ProjectsSection projects={portfolioData.projects} />
      </div>
      <DailyQuote />
    </main>
  );
}
