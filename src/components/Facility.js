import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";

export default function Facility({facilitySections}){

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
    return(
        <div className="mt-16">
                {/* FACILITIES */}
          <section id="facilities" className="space-y-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-2 text-center md:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Facility Readiness
                </p>
                <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                    Safe, clean & well-maintained infrastructure
                </h2>
                </div>
                <Link
                href="/facility"
                className="inline-flex items-center justify-center gap-2 self-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 md:self-auto"
                >
                View All
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                >
                    <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                    />
                </svg>
                </Link>

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
                            className="relative h-50 overflow-hidden  sm:h-48"
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
        </div>
    )
}