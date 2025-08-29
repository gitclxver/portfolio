import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import CertificateCard from "../components/CertificateCard";
import type {
  CertificateItem,
  ExperienceItem,
  EducationItem,
} from "../types/types";

interface ExperienceAndEducationProps {
  experience: ExperienceItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
}

export default function ExperienceAndEducation({
  experience,
  education,
  certificates,
}: ExperienceAndEducationProps) {
  const [isCertDialogOpen, setIsCertDialogOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(
    null
  );

  const openCertDialog = (certificate: CertificateItem) => {
    setSelectedCert(certificate);
    setIsCertDialogOpen(true);
  };

  return (
    <section id="experience-education" className="space-y-6">
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger
            value="experience"
            className="text-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
          >
            <Briefcase className="mr-2 h-4 w-4" /> Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="text-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
          >
            <GraduationCap className="mr-2 h-4 w-4" /> Education
          </TabsTrigger>
          <TabsTrigger
            value="certificates"
            className="text-gray-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
          >
            <Award className="mr-2 h-4 w-4" /> Certificates
          </TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="mt-6 space-y-4">
          {experience.map((item, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">{item.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {item.company} | {item.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="education" className="mt-6 space-y-4">
          {education.map((item, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">
                  {item.qualification}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {item.institution} | {item.year}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="certificates" className="mt-6">
          <div className="flex flex-wrap gap-4">
            {certificates.map((item, index) => (
              <CertificateCard
                key={index}
                certificate={item}
                onClick={() => openCertDialog(item)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isCertDialogOpen} onOpenChange={setIsCertDialogOpen}>
        <DialogContent className="max-w-[90vw] md:max-w-4xl h-[90vh] p-4 bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-gray-100">
              {selectedCert?.title}
            </DialogTitle>
            <p className="text-gray-400 mt-2">
              {selectedCert?.issuer} | {selectedCert?.date}
            </p>
          </DialogHeader>
          <div className="flex-grow overflow-auto">
            {selectedCert?.imageUrl && (
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="rounded-lg w-full h-auto"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
