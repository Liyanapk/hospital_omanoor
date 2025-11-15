'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';


const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Services({ serviceCategories = [], fieldLevelServices = [] }) {
  const [basicCategory, ...otherCategories] = serviceCategories;
  const otherServicesCount = otherCategories.reduce(
    (total, category) => total + category.items.length,
    0
  );

  return (
    <section id="services" className="py-16">
      <div className=" space-y-10">
        <motion.div
          className="text-center md:text-left"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
         
         <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Service Catalogue
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
              Basic health services you can count on
            </h2>
         </div>
    

        
 

        </motion.div>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
             <div className="flex flex-col gap-2 text-center md:text-left pb-0 sm:items-start sm:justify-between">
              <span className={`flex items-center justify-center md:justify-start w-full md:w-fit text-[22px] font-semibold`}>
                <span
                  aria-hidden="true"
                  className="w-2 h-2 bg-blue-600 rounded-full mr-3 inline-block"
                />Basic Services
              </span>
              <p className="text-sm font-medium text-slate-500">
                Available throughout the week with dedicated clinical teams
              </p>
            </div>

          <div className="flex flex-col items-center md:items-end">
         <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              View Other Services
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

        </div>
       

        {basicCategory ? (
          <motion.div
            className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >

            <div className="mt-0 grid gap-4 md:grid-cols-2">
              {basicCategory.items.map((service) => (
                <div
                  key={service.name}
                  className="rounded-2xl border border-slate-100 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <p className="text-lg font-semibold text-slate-900">{service.name}</p>
                  <p className="text-sm text-slate-500">{service.date}</p>
                  <p className="text-sm font-medium text-slate-700">{service.timing}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="rounded-2xl bg-white p-8 text-center text-slate-500 shadow">
            Service details will be published here soon.
          </div>
        )}



      </div>
    </section>
  );
}