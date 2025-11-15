"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Banner({ emblemPlaceholders }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const preload = new window.Image();
    preload.src = "/banner/banner.jpeg";
    preload.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <motion.section
      id="about"
      className="relative flex flex-col overflow-hidden text-white min-h-[480px] sm:min-h-[540px] lg:min-h-[680px] py-4"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-slate-200 transition-opacity duration-500 ${
            isImageLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
        <Image
          src="/banner/banner.jpeg"
          alt="Hospital building"
          fill
          priority
          quality={85}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-700 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-fixed w-full">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
                COMMUNITY HEALTH CENTRE OMANUR
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Accessible healthcare with compassionate government services.
              </h1>
              <p className="text-lg text-slate-100 sm:text-lg lg:max-w-xl mx-auto lg:mx-0">
                Your trusted government healthcare center for safe and reliable medical services.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#services"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-lg transition hover:-translate-y-0.5"
                >
                  View Services
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Desk
                </a>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      
      {/* Emblems container positioned at bottom right */}
      <div className="relative z-10">
        <div className="container-fixed w-full">
          <div className="flex justify-center pb-6 lg:justify-end ">
            <div className="flex  justify-center gap-4 sm:gap-6 mt-4">
              {emblemPlaceholders.map((src, idx) => (
                <div
                  key={src}
                  className="flex w-12 h-12 md:h-14 md:w-14 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`Government emblem placeholder ${idx + 1}`}
                    width={48}
                    height={48}
                    className="md:h-10 md:w-10 h-8 w-8 rounded-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
