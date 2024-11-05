"use client";

import { useEffect, useRef, useState } from "react";
import { generateCertificateImage } from "../utils/generateCertificateImage";
import { Certificate as CertificateType } from "../models/Certificate";

interface Props {
  searchParams: { name: string; course: string };
}

export default function GeneratePage({ searchParams }: Props) {
  const { name, course } = searchParams;
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleGenerateImage = async () => {
    if (certificateRef.current) {
      const image = await generateCertificateImage(certificateRef.current);
      setImageSrc(image);
    }
  };

  useEffect(() => {
    if (name && course) handleGenerateImage();
  }, [name, course]);

  if (!name || !course) return <div>Invalid parameters</div>;

  return (
    <div className="p-4 flex flex-col items-center">
      <div
        ref={certificateRef}
        className="p-10 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 border border-gray-500 rounded-lg shadow-xl text-center text-white w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold mb-2 tracking-wide text-yellow-400">
          Certificate of Completion
        </h2>
        <p className="text-lg mt-4 text-gray-300">This certifies that</p>
        <h3 className="text-2xl font-semibold mt-4 underline decoration-yellow-400">
          {name}
        </h3>
        <p className="text-lg mt-4 text-gray-300">has successfully completed the course</p>
        <h3 className="text-2xl font-semibold mt-4 uppercase text-yellow-400">
          {course}
        </h3>
        <p className="text-sm mt-6 text-gray-400">{new Date().toLocaleDateString()}</p>
      </div>
      
      {imageSrc ? (
        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold text-white">Generated Certificate:</h3>
          <img src={imageSrc} alt="Certificate" className="border mt-4 rounded-lg" />
          <a
            href={imageSrc}
            download="certificate.png"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
          >
            Download Certificate
          </a>
        </div>
      ) : (
        <p className="mt-6 text-gray-300">Generating certificate...</p>
      )}
    </div>
  );
}
