'use client'
import Footer from "@/components/Footer";
import InnerNavbar from "@/components/InnerNavbar";
import { motion } from "framer-motion"
import Image from "next/image"

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





export default function FacilityPage(){

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
    return(
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
                   <InnerNavbar />
                {/* FACILITIES */}
          <section id="facilities" className="space-y-10 container-fixed mt-16 mb-16">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Facility Readiness
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Facilities We Provides
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
        
        <Footer />
        </div>
    )
}