"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import StaffSection from '@/components/StaffSection';
import MissionVision from '@/components/MissionVision';
import Footer from '@/components/Footer';
import Services from "@/components/Services";

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
      { name: "Outpatient Department", date: "Monday – Saturday", timing: "08:00 AM – 05:00 PM" },
      { name: "Maternal & Child Health", date: "All Working Days", timing: "09:30 AM – 03:30 PM" },
    ],
  },
  {
    title: "Other Services",
    highlight: "bg-sky-100 text-sky-900",
    items: [
      { name: "Laboratory", date: "Monday – Friday", timing: "08:30 AM – 02:30 PM" },
      { name: "Pharmacy", date: "Daily", timing: "24 x 7" },
    ],
  },
  {
    title: "Innovative Programs",
    highlight: "bg-indigo-100 text-indigo-900",
    items: [
      { name: "Ayushman Wellness", date: "Every Wednesday", timing: "10:00 AM – 01:00 PM" },
      { name: "Digital Health Helpdesk", date: "All Working Days", timing: "09:00 AM – 04:00 PM" },
    ],
  },
];

const fieldLevelServices = [
  "Community sanitation and waste audits",
  "School health camps & immunization drives",
  "Outreach to coastal & tribal hamlets",
  "Maternal support groups with ASHA workers",
  "Home-based rehabilitation follow-ups",
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
  {
    title: "HOSPITAL FACILITY",
    images: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504439904031-93ded9f93eaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504814532849-cdda8451574e?auto=format&fit=crop&w=800&q=80",
    ],
    points: ["Digitized patient flow", "Barrier-free entryways", "Green waiting lounges"],
  },
  {
    title: "Maintenance of Open Areas",
    images: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1459664018906-085c36f472af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    ],
    points: ["Tree-lined circulation paths", "Rainwater drainage audits", "Community garden patches"],
  },
  {
    title: "Hospital/Facility Appearance",
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503435832755-24fce3cfa5ef?auto=format&fit=crop&w=800&q=80",
    ],
    points: ["Unified signage & bilingual boards", "Weekly paint and polish checks", "Natural daylight focus"],
  },
  {
    title: "Infrastructure Maintenance",
    images: [
      "https://images.unsplash.com/photo-1487094760285-9535f08817fc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    ],
    points: ["Preventive electrical audits", "Dedicated biomedical upkeep"],
  },
  {
    title: "Illumination",
    images: [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    ],
    points: ["100% LED retrofits", "Emergency bay lighting redundancies"],
  },
  {
    title: "Maintenance of Furniture & Fixtures",
    images: [
      "https://images.unsplash.com/photo-1455778977538-d0d636e2c09b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1426024120108-99cc76989c71?auto=format&fit=crop&w=800&q=80",
    ],
    points: ["Weekly safety inspections", "Dedicated ergonomic upgrades", "Refurbished seating for attendants"],
  },
  {
    title: "Removal of Junk Material",
    images: [
      "https://images.unsplash.com/photo-1455906876003-298dd8c44b0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1477768663691-75454fd8e870?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530023367847-a683933f4176?auto=format&fit=crop&w=800&q=80",
    ],
    points: ["Bi-weekly scrap segregation", "Authorized vendor disposal", "Documentation & audit trails"],
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
          {/* MISSION & VISION */}
          <MissionVision mission={missionVision.mission} vision={missionVision.vision} />
              

       <Services serviceCategories={serviceCategories} fieldLevelServices={fieldLevelServices} />


        {/* NEWS MARQUEE */}
        <section id="news" className="space-y-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              News & Highlights
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Community updates at a glance
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...newsImages, ...newsImages].map((src, idx) => (
                <div key={`${src}-${idx}`} className="relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Hospital news"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FACILITIES */}
        <section id="facilities" className="space-y-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Facility Readiness
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Safe, clean & well-maintained infrastructure
            </h2>
          </div>
          <div className="space-y-10">
            {facilitySections.map((section, idx) => (
              <motion.div
                key={section.title}
                className="grid gap-6 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-100 lg:grid-cols-2"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {idx % 2 === 0 ? (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {section.images.map((src) => (
                        <div
                          key={src}
                          className="relative h-48 overflow-hidden rounded-2xl shadow-sm sm:h-40"
                        >
                          <Image
                            src={src}
                            alt={section.title}
                            fill
                            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {section.title}
                      </h3>
                      <ul className="mt-4 space-y-3 text-slate-600">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-1 h-3 w-3 rounded-full bg-blue-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {section.title}
                      </h3>
                      <ul className="mt-4 space-y-3 text-slate-600">
                        {section.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="mt-1 h-3 w-3 rounded-full bg-blue-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {section.images.map((src) => (
                        <div
                          key={src}
                          className="relative h-48 overflow-hidden rounded-2xl shadow-sm sm:h-40"
                        >
                          <Image
                            src={src}
                            alt={section.title}
                            fill
                            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* IMAGE GALLERIES */}
        <section id="gallery" className="space-y-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Image Galleries
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Visual reports of cleanliness & preparedness
            </h2>
          </div>
          <div className="space-y-10">
            {gallerySections.map((gallery) => (
              <motion.div
                key={gallery.title}
                className="space-y-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-slate-900">{gallery.title}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {gallery.images.map((src) => (
                    <div key={src} className="relative h-48 overflow-hidden rounded-2xl shadow">
                      <Image
                        src={src}
                        alt={gallery.title}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
    <Footer />

        </div>




    </main>
  );
}
