import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import type { CertificateItem } from "../types/types";

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
      className="cursor-pointer transition-transform hover:scale-[1.10] w-[280px] h-[320px] flex flex-col justify-between bg-gray-800 border-gray-700"
    >
      <CardHeader>
        <CardTitle className="text-base text-gray-100">
          {certificate.title}
        </CardTitle>
        <CardDescription className="text-gray-400">
          {certificate.issuer} | {certificate.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center h-[180px] bg-gray-700 rounded-lg mx-2 mb-2">
        <img
          src={certificate.imageUrl}
          alt={certificate.title}
          className="object-contain max-h-full max-w-full"
        />
      </CardContent>
    </Card>
  );
}
