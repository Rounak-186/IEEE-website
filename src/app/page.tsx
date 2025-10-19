"use client"

import NavBar from "@/components/navBar";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const video = document.getElementById("bg-video") as HTMLVideoElement | null;
    if (video) {
      video.playbackRate = 0.5; // Slow down to 0.5x
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        id="bg-video"
      >
        {/* <source src="/videos/background.webm" type="video/webm" /> */}
        <source src="home-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
  );
}
