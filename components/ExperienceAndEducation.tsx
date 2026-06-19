"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import type { CertificateItem, ExperienceItem, EducationItem } from "@/types/types";
import { RoughNotation } from "react-rough-notation";

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
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const openCertDialog = (certificate: CertificateItem) => {
    setSelectedCert(certificate);
    setIsCertDialogOpen(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-32 py-20 px-4 md:px-8">
      
      {/* Experience Section */}
      <section className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-gloria text-amber-300">
          <RoughNotation type="underline" show={true} color="#fbbf24" strokeWidth={3}>
            Experience
          </RoughNotation>
        </h2>
        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.5 }}
              className="comic-panel border-4 border-black bg-[#3d1a6e] shadow-[8px_8px_0px_#000] p-6 md:p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl md:text-3xl text-amber-300 font-sans font-bold flex items-center gap-3 mb-2">
                <Briefcase className="h-6 w-6 shrink-0" />
                {item.title}
              </h3>
              <p className="text-xl text-purple-200 font-sans font-medium mb-4">
                {item.company} | <span className="text-amber-400">{item.duration}</span>
              </p>
              <p className="text-lg text-purple-50 font-sans leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-gloria text-amber-300">
          <RoughNotation type="box" show={true} color="#fbbf24" strokeWidth={3} padding={10}>
            Certificates
          </RoughNotation>
        </h2>
        <div className="space-y-8">
          {certificates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.5 }}
              className="comic-panel border-4 border-black bg-[#3d1a6e] shadow-[8px_8px_0px_#000] p-6 md:p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              onClick={() => openCertDialog(item)}
            >
              <div className="flex-1 w-full text-center md:text-left">
                <h3 className="text-2xl md:text-3xl text-amber-300 font-sans font-bold flex items-center justify-center md:justify-start gap-3 mb-2">
                  <Award className="h-6 w-6 shrink-0" />
                  {item.title}
                </h3>
                <p className="text-xl text-purple-200 font-sans font-medium">
                  {item.issuer} | <span className="text-amber-400">{item.date}</span>
                </p>
              </div>
              <div className="w-full md:w-1/3 h-48 bg-purple-950/50 rounded-lg border-2 border-black p-2 flex items-center justify-center comic-panel">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.imageUrl} alt={item.title} className="max-h-full max-w-full object-contain drop-shadow-md" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-gloria text-amber-300">
          <RoughNotation type="circle" show={true} color="#fbbf24" strokeWidth={3} padding={10}>
            Education
          </RoughNotation>
        </h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.5 }}
              className="comic-panel border-4 border-black bg-[#3d1a6e] shadow-[8px_8px_0px_#000] p-6 md:p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl md:text-3xl text-amber-300 font-sans font-bold flex items-center gap-3 mb-2">
                <GraduationCap className="h-6 w-6 shrink-0" />
                {item.qualification}
              </h3>
              <p className="text-xl text-purple-200 font-sans font-medium">
                {item.institution} | <span className="text-amber-400">{item.year}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificate Dialog */}
      <Dialog open={isCertDialogOpen} onOpenChange={setIsCertDialogOpen}>
        <DialogContent className="max-w-[90vw] md:max-w-4xl h-[90vh] p-4 comic-panel border-4 border-black bg-[#3d1a6e]">
          <DialogHeader>
            <DialogTitle className="font-sans text-2xl text-amber-300 flex items-center gap-2">
              <Award className="h-6 w-6" /> {selectedCert?.title}
            </DialogTitle>
            <p className="text-purple-200 font-sans mt-2">
              {selectedCert?.issuer} | {selectedCert?.date}
            </p>
          </DialogHeader>
          <div className="flex-grow overflow-auto flex items-center justify-center p-4 bg-purple-950/50 rounded-lg border-2 border-black comic-panel">
            {selectedCert?.imageUrl && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="rounded-lg max-w-full max-h-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
