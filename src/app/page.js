"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import StaffSection from '@/components/StaffSection';
import MissionVision from '@/components/MissionVision';
import Footer from '@/components/Footer';
import Services from "@/components/Services";
import FieldLevelServices from "@/components/FieldLevelServices";
import NewsSection from "@/components/NewsSection";
import Facility from "@/components/Facility";
import ImageGallery from "@/components/ImageGallery";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Staff", href: "#staff" },
  { label: "Services", href: "#services" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const emblemPlaceholders = [
  "/banner/affl1.jpeg",
  "/banner/affli2.jpeg",
  "/banner/affli3.jpeg",
  "/banner/affli4.jpeg",
  "/banner/affli5.jpeg",
];

const staffStats = [
  { title: "Assistant Surgeon", count: 3, description: "Provides surgical and clinical care at the centre" },
  { title: "Evening OP Doctor", count: 1, description: "Handles outpatient consultations during evening hours" },
  { title: "NHM Doctor", count: 2, description: "Delivers healthcare services under the NHM programme" },
  { title: "Senior Nursing Officer", count: 1, description: "Leads nursing services and patient care coordination" },

];

const missionVision = {
  mission:
    " To improve the health of those we serve with a commitment to excel in all that we do.",
  vision:
    "Be a model health institution by promoting healthier communities through compassion, comprehensive health and human services",
};

const serviceCategories = [
  {
    title: "Main Services",
    highlight: "bg-blue-100 text-blue-900",
    items: [
      { name: "Out-Patient Department Services", date: "All Days", timing: "09:00 AM – 06:00 PM" },
      { name: "IP Services", date: "All Days", timing: "24 hourse" },
      { name: "Laboratory Services", date: "All Days", timing: "09:00 AM – 04:00 PM" },
      { name: "Pharmacy ", date: "All Days", timing: "09:00 AM – 06:00 PM" },
    ],
  },

];

const fieldLevelServices = [
  "Registration Of Pregnant Women ,Antenatal And Postnatal Services ",
  "Registration Of New Born Babies , Screening ",
  "Immunization Programmes ",
  "Family Planning Services ",
  "Health Education Classes ",
  "House To House Outreach Services And Implementation Of Health Awareness ",
  "Implementation Of National Health Programmes ",
  "Disease Preventive Activities ",
  "Helps In Keeping Surroundings Clean ",
  "Water Chlorination ",
  "Distribution Of Ors Packets ",
  "Communicable Disease Preventive Activities"
];

const newsImages = [
  "/slide/slide1.jpeg",
  "/slide/slide2.jpeg",
  "/slide/slide3.jpeg",
  "/slide/slide4.jpeg",
  "/slide/slide5.jpeg",
  "/slide/slide6.jpeg",
  "/slide/slide7.jpeg",
  "/slide/slide8.jpeg",
  "/slide/slide9.jpeg",
  
];

const facilitySections = [
  {
    title: "PEST & ANIMAL CONTROL",
    images: [
      "/pest_controll/pest1.png",
      "/pest_controll/pest2.png",
      "/pest_controll/pest3.png",
    ],
    points: ["No Stray Animal", "Cattle Trap at the Entrance", "Pest Control","Anti-termite","Mosquito free Environment"],
  },
  
];

const gallerySections = [
  {
    title: "WASTE MANAGEMENT & INFECTION CONTROL",
    images: [
      "/waste_infection/w1.png",
      "/waste_infection/w2.png",
      "/waste_infection/w3.png",
      "/waste_infection/w4.png",
      "/waste_infection/w5.png",
      "/waste_infection/w6.png",
      "/waste_infection/w7.png",
      "/waste_infection/w8.png",
      "/waste_infection/w9.png",
      "/waste_infection/w10.png",
      "/waste_infection/w11.png",
      "/waste_infection/w12.png",
      "/waste_infection/w13.png",
      "/waste_infection/w14.png",
      "/waste_infection/w15.png", 
    ],
  },
  {
    title: "INFECTION CONTROL & SUPPORT SERVICES",
    images: [
     "/infection/inf1.png",
     "/infection/inf2.png",
     "/infection/inf3.png",
     "/infection/inf4.png",
     "/infection/inf5.png",
     "/infection/inf6.png",
     "/infection/inf7.png",
     "/infection/inf8.png",
     "/infection/inf9.png",
     "/infection/inf10.png",
     "/infection/inf11.png",
     "/infection/inf12.png",
     "/infection/inf13.png",
     "/infection/inf14.png",
     "/infection/inf15.png",
    
    ],
  },
  {
    title: "HYGIENE PROMOTION",
    images: [
      "/hyginee/hi1.png",
      "/hyginee/hi2.png",
      "/hyginee/hi3.png",
      "/hyginee/hi4.png",
      "/hyginee/hi5.png",
      "/hyginee/hi6.png",
    ],
  },
  {
    title: "BEYOND THE BOUNDARY",
    images: [
      "/beyond/be1.png",
      "/beyond/be2.png",
      "/beyond/be3.png",
      "/beyond/be4.png",
      "/beyond/be5.png",
      "/beyond/be6.png",
      "/beyond/be7.png",
      "/beyond/be8.png",
      "/beyond/be9.png",
      "/beyond/be10.png",
      "/beyond/be11.png",
      "/beyond/be12.png",
      "/beyond/be13.png",
      "/beyond/be14.png",
      "/beyond/be15.png",
      "/beyond/be17.png",
      "/beyond/be18.png",
      "/beyond/be19.png",
      "/beyond/be20.png",
      "/beyond/be21.png",
      "/beyond/be22.png",
      "/beyond/be23.png",
      "/beyond/be24.png",
      "/beyond/be25.png",
      "/beyond/be26.png",
      "/beyond/be27.png",
      "/beyond/be28.png",
      "/beyond/be29.png",
      "/beyond/be30.png",
      "/beyond/be31.png",
      "/beyond/be32.png",

    ],
  },
  {
    title: "ECO-FRIENDLY FACILITY",
    images: [
      "/eco/ec1.png",
      "/eco/ec2.png",
      "/eco/ec3.png",
      "/eco/ec4.png",
      "/eco/ec5.png",
      "/eco/ec6.png",
    ]
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-900">
      <Navbar />

      <div className="mx-auto flex w-full flex-col gap-20">
        {/* HERO */}
        <Banner emblemPlaceholders={emblemPlaceholders} />

        {/* STAFF DETAILS */}
        <div className="container-fixed">

          <StaffSection staffStats={staffStats} />
          <MissionVision mission={missionVision.mission} vision={missionVision.vision} />
          <Services serviceCategories={serviceCategories} fieldLevelServices={fieldLevelServices} />
          <FieldLevelServices services={fieldLevelServices} />
          <NewsSection newsImages={newsImages} />
          <Facility facilitySections={facilitySections}/>
          <ImageGallery gallerySections={gallerySections} />
      

          
        </div>

        {/* FOOTER */}
        <Footer />

      </div>

    </main>
  );
}
