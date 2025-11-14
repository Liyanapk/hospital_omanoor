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
      className="relative min-h-[480px] overflow-hidden text-white sm:min-h-[540px] lg:min-h-[640px] flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
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
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
                COMMUNITY HEALTH CENTRE OMANUR
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Accessible healthcare with compassionate government services.
              </h1>
              <p className="text-lg text-slate-100 md:max-w-xl">
                Your trusted government healthcare center for safe and reliable medical services.
              </p>
              <div className="flex flex-wrap gap-4">
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
            {/* Empty div to maintain grid layout */}
            <div />
          </div>
        </div>
      </div>
      
      {/* Emblems container positioned at bottom right */}
      <div className="relative z-10">
        <div className="container-fixed w-full">
          <div className="flex justify-end pb-4 ">
            <div className="">
              <div className="grid grid-cols-5 gap-10">
                {emblemPlaceholders.map((src, idx) => (
                  <div
                    key={src}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg"
                  >
                    <Image
                      src={src}
                      alt={`Government emblem placeholder ${idx + 1}`}
                      width={48}
                      height={48}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
