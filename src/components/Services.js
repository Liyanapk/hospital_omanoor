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
      <div className="container-fixed space-y-10">
        <motion.div
          className="text-center md:text-left"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Service Catalogue
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
            Basic health services you can count on
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Daily OPD care, maternal services and preventive screening delivered by the teams at
            CHC Omanur.
          </p>
        </motion.div>

        {basicCategory ? (
          <motion.div
            className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex flex-col gap-2 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <span className={`inline-flex w-fit rounded-full px-4 py-1 text-xs font-semibold ${basicCategory.highlight}`}>
                Basic Services
              </span>
              <p className="text-sm font-medium text-slate-500">
                Available throughout the week with dedicated clinical teams
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
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

        {fieldLevelServices?.length > 0 && (
          <motion.div
            className="grid gap-4 rounded-3xl bg-gradient-to-r from-blue-50 to-sky-50 p-8 shadow-inner md:grid-cols-[1fr_2fr]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                Field Outreach
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Care that extends to neighbourhoods
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                ASHA workers and primary care nurses conduct regular programmes in the community.
              </p>
            </div>
            <ul className="grid gap-3 text-slate-700 sm:grid-cols-2">
              {fieldLevelServices.slice(0, 6).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-slate-900">Need specialised clinics or diagnostic hours?</p>
            <p className="text-sm text-slate-600">
              Explore {otherServicesCount} additional services including pharmacy, lab and wellness programmes.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
          >
            View Other Services
          </Link>
        </div>
      </div>
    </section>
  );
}