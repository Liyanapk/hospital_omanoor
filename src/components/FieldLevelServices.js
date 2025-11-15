'use client';

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

export default function FieldLevelServices({ services = [] }) {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="  rounded-3xl bg-gradient-to-r from-blue-50 to-sky-50 p-8 shadow-inner  mt-4 mb-8"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
         FIELD LEVEL SERVICES 
        </p>
        {/* <h3 className="mt-2 text-xl font-semibold text-slate-900">
          Care that extends to neighbourhoods
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          ASHA workers and primary care nurses conduct regular programmes in the community.
        </p> */}
      </div>
      <ul className="grid gap-3 text-slate-700 sm:grid-cols-2 mt-8 mb-4">
        {services.slice(0, 6).map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
