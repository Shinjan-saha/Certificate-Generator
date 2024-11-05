"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CertificateForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const router = useRouter();

  const handleGenerate = async () => {
    router.push(`/generate?name=${name}&course=${course}`);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.postimg.cc/GmjG9Z8V/bg.avif')`,
        backgroundSize: "cover", // Ensures the image covers the entire screen
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Keeps the background fixed during scroll
      }}
    >
      <div className="max-w-md mx-auto p-6 bg-white/80 shadow-md rounded-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-6 text-black text-center">
          Generate Certificate
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:border-blue-400 text-black"
        />
        <input
          type="text"
          placeholder="Enter course name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border border-gray-300 p-3 mb-4 w-full rounded-lg focus:outline-none focus:border-blue-400 text-black"
        />
        <button
          onClick={handleGenerate}
          className="bg-blue-500 text-white p-3 rounded-lg w-full font-semibold hover:bg-blue-600 transition duration-300"
        >
          Generate Certificate
        </button>
      </div>
    </div>
  );
}
