import HeroSection from "../components/HeroSection";
import ExperienceAndEducation from "../components/ExperienceAndEducation";
import TechnologyCarousel from "../components/TechnologyCarousel";
import ProjectsSection from "../components/ProjectsSection";
import NeuralNetBackground from "../components/NeuralNetBackground";
import TileBackground from "../components/TileBackground";
import portfolioData from "../data/portfolioData";

function Home() {
  return (
    <div className="relative min-h-screen min-w-screen">
      <TileBackground />
      <NeuralNetBackground />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center py-12 px-6 md:px-12 text-gray-50">
        <div className="max-w-4xl w-full space-y-12">
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
          <TechnologyCarousel technologies={portfolioData.technologies} />
          <ProjectsSection projects={portfolioData.projects} />
        </div>
      </div>
    </div>
  );
}

export default Home;
