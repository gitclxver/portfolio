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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Briefcase, GraduationCap, Award } from "lucide-react";

// Updated interfaces
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

// New interface for certificates
interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  pdfUrl: string;
}

// Updated props interface to include certificates
interface ExperienceAndEducationProps {
  experience: ExperienceItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
}

function ExperienceAndEducation({
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
    <section id="experience-education" className="space-y-4">
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="experience">
            <Briefcase className="mr-2 h-4 w-4" /> Experience
          </TabsTrigger>
          <TabsTrigger value="education">
            <GraduationCap className="mr-2 h-4 w-4" /> Education
          </TabsTrigger>
          <TabsTrigger value="certificates">
            <Award className="mr-2 h-4 w-4" /> Certificates
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
        <TabsContent value="certificates" className="mt-4">
          <div className="space-y-4">
            {certificates.map((item, index) => (
              <Card
                key={index}
                className="cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => openCertDialog(item)}
              >
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>
                    {item.issuer} | {item.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Dialog for displaying the certificate PDF */}
      <Dialog open={isCertDialogOpen} onOpenChange={setIsCertDialogOpen}>
        <DialogContent className="max-w-[90vw] md:max-w-4xl h-[90vh] p-4">
          <DialogHeader>
            <DialogTitle className="text-black dark:text-white">
              {selectedCert?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              {selectedCert?.issuer} | {selectedCert?.date}
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow">
            {selectedCert?.pdfUrl && (
              <iframe
                src={selectedCert.pdfUrl}
                width="100%"
                height="100%"
                title={selectedCert.title}
                className="rounded-lg"
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default ExperienceAndEducation;
