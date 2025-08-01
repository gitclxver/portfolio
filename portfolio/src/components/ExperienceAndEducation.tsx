import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface EducationItem {
  qualification: string;
  institution: string;
  year: string;
}

interface ExperienceAndEducationProps {
  experience: ExperienceItem[];
  education: EducationItem[];
}

function ExperienceAndEducation({
  experience,
  education,
}: ExperienceAndEducationProps) {
  return (
    <section id="experience-education" className="space-y-4">
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="experience">
            <Briefcase className="mr-2 h-4 w-4" /> Experience
          </TabsTrigger>
          <TabsTrigger value="education">
            <GraduationCap className="mr-2 h-4 w-4" /> Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="mt-4">
          <div className="space-y-4">
            {experience.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>
                    {item.company} | {item.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="education" className="mt-4">
          <div className="space-y-4">
            {education.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.qualification}</CardTitle>
                  <CardDescription>
                    {item.institution} | {item.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default ExperienceAndEducation;
