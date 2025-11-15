'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

import InnerNavbar from '@/components/InnerNavbar';
import Footer from '@/components/Footer';
import { serviceCategories } from '@/data/servicesData';

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};



export default function ServicesPage() {
    const [basicCategory, ...otherCategories] = serviceCategories;

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
            <InnerNavbar />

            <main className="container-fixed mb-16 space-y-12 py-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                <header className="rounded-3xl bg-gradient-to-r from-blue-50 to-sky-50 p-10 text-center ring-1 ring-slate-100">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                        Service Catalogue
                    </p>
                    <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
                        Comprehensive care under one roof
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600">
                        Explore detailed timings for our main clinical blocks, supportive services and
                        innovative outreach programmes run by CHC Omanoor.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">

                        <span>24/7 emergency support</span>
                        <span>Dedicated multidisciplinary teams</span>
                    </div>
                </header>

                {basicCategory && (
                    <motion.section
                        className="space-y-8"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="show"
                    >
                        <div className="flex items-center justify-between flex-wrap gap-6">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                    Basic Highlight
                                </p>
                                <h2 className="text-3xl font-semibold text-slate-900">Basic services you can count on</h2>

                            </div>

                        </div>

                        <motion.div
                            className="relative -mx-2 rounded-3xl bg-gradient-to-r from-blue-50 to-sky-50 px-4 py-8 shadow-inner sm:mx-0 sm:px-8"
                            variants={fadeInUp}
                        >
                            <div className="grid gap-4 md:grid-cols-2">
                                {basicCategory.items.map((service) => (
                                    <div
                                        key={service.name}
                                        className="rounded-2xl border border-slate-100 bg-white p-6 transition hover:border-blue-200 hover:bg-blue-50/40"
                                    >
                                        <p className="text-lg font-semibold text-slate-900">{service.name}</p>
                                        <p className="text-sm text-slate-500">{service.date}</p>
                                        <p className="text-sm font-medium text-blue-600">{service.timing}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.section>
                )}

                <div className="space-y-10">
                    {otherCategories.map((category) => (
                        <div>
                            <div className="flex flex-col gap-2">
                                <span
                                    className={`text-3xl font-semibold text-slate-900 mb-8`}
                                >
                                    {category.title}
                                </span>
                            </div>
                            <motion.section
                                key={category.title}
                                className="space-y-6 rounded-3xl bg-gradient-to-r from-blue-50 to-sky-50 p-8 shadow-lg ring-1 ring-slate-100"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="show"
                            >
                                <div className="grid gap-4 md:grid-cols-2">
                                    {category.items.map((service) => (
                                        <motion.div
                                            key={service.name}
                                            className="group flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm transition  hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md"
                                            variants={fadeInUp}
                                        >
                                            <div className="flex items-center justify-between">
                                                <p className="text-lg font-semibold text-slate-900">{service.name}</p>
                                                <span className="text-xs uppercase tracking-wide text-blue-600">{service.date}</span>
                                            </div>
                                            <p className="text-sm text-slate-500">{service.timing}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
