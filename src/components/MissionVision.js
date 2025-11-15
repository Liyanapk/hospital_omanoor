'use client';

import { motion } from 'framer-motion';
import { HeartPulse, Target, Sparkles } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function MissionVision({ mission, vision }) {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/50 to-transparent" />
      </div>

      <div className="">
        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Mission Card */}
          <motion.div 
            variants={fadeInUp}
            className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300  border border-slate-100"
          >
            <div className="absolute -top-3 -left-2 w-16 h-16  flex items-center justify-center text-blue-600 ">
              <HeartPulse className="w-8 h-8" />
            </div>
            <div className="pl-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-1">
                Our Mission
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Commitment to Quality Healthcare
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {mission}
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-blue-100 group-hover:text-blue-300 transition-colors">
              <Sparkles className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={fadeInUp}
            className="group relative bg-gradient-to-br from-blue-600 to-sky-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 "
          >
<div className="absolute -top-3 -left-2 w-16 h-16  flex items-center justify-center text-white ">
              <HeartPulse className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-100 mb-1 mt-2">
                Our Vision
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                A Model for Healthy Communities
              </h3>
              <p className="text-blue-50 leading-relaxed opacity-90">
                {vision}
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-blue-100 group-hover:text-blue-300 transition-colors">
              <Sparkles className="w-6 h-6" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}