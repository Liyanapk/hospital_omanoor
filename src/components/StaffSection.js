'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};


export default function StaffSection({ staffStats }) {
  return (
    <section id="staff" className="space-y-6 py-12">
      <div className="">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <motion.p 
            className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700"
            variants={fadeInUp}
          >
            Hospital Workforce
          </motion.p>
          <motion.h2 
            className="text-3xl font-semibold text-slate-900 md:text-4xl"
            variants={fadeInUp}
          >
            Skilled teams ready for every patient journey
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 md:max-w-3xl"
            variants={fadeInUp}
          >
           Meet the team of professionals who work every day to serve our community.
          </motion.p>
        </div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {staffStats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-xl hover:ring-2 hover:ring-blue-500 "
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute right-4 top-4 h-12 w-12 rounded-full bg-blue-100 p-2.5 opacity-20">
                <div className="h-full w-full rounded-full bg-blue-200" />
              </div>
              <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
                {stat.title}
              </p>
              <p className="mt-2 text-4xl font-bold text-slate-900">{stat.count}</p>
              <p className="mt-2 text-sm text-slate-500">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          variants={fadeInUp}
        >
          <Link 
            href="/staff" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            View All Staff
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

