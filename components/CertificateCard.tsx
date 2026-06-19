import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CertificateItem } from "@/types/types";

interface CertificateCardProps {
  certificate: CertificateItem;
  onClick: () => void;
}

export default function CertificateCard({
  certificate,
  onClick,
}: CertificateCardProps) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer w-[280px] h-[320px] flex flex-col justify-between border-none shadow-none bg-transparent"
    >
      <CardHeader className="bg-[#3d1a6e] border-b-2 border-black">
        <CardTitle className="text-base text-amber-300 font-gloria">
          {certificate.title}
        </CardTitle>
        <CardDescription className="font-sans text-purple-200 text-sm mt-1">
          {certificate.issuer} | <span className="font-bold">{certificate.date}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center h-[180px] bg-purple-950/40 p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={certificate.imageUrl}
          alt={certificate.title}
          className="object-contain max-h-full max-w-full drop-shadow-lg"
        />
      </CardContent>
    </Card>
  );
}
