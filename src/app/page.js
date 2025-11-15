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
  "https://images.unsplash.com/photo-1526251102802-70478d67c135?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1580281657521-6b958980c38d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1580281789409-7c98c79c0ac0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1579154203451-e0a4b58f9fdd?auto=format&fit=crop&w=900&q=80",
];

const facilitySections = [
  {
    title: "PEST & ANIMAL CONTROL",
    images: [
      "https://images.unsplash.com/photo-1414446483597-8d8f792bfe39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1474533410427-a23da4fd49e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    ],
    points: ["Monthly fogging & vector monitoring", "Secure waste holding units", "Partnership with local health inspectors"],
  },
  
];

const gallerySections = [
  {
    title: "Waste Management",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=700&q=80",
    ],
  },
  {
    title: "Infection Control",
    images: [
      "https://images.unsplash.com/photo-1526251107390-1c43c096cedc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80",
    ],
  },
  {
    title: "Hygiene Promotion",
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1469478715127-3fd4367c8a0d?auto=format&fit=crop&w=700&q=80",
    ],
  },
  {
    title: "Emergency Preparedness",
    images: [
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=80",
    ],
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
