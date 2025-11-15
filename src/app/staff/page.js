'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import InnerNavbar from '@/components/InnerNavbar';
import Footer from '@/components/Footer';

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

const staffRoles = [
{ title: "Assistant Surgeon", count: 3, description: "Provides surgical and clinical care at the centre" },
{ title: "Evening OP Doctor", count: 1, description: "Handles outpatient consultations during evening hours" },
{ title: "NHM Doctor", count: 2, description: "Delivers healthcare services under the NHM programme" },
{ title: "Senior Nursing Officer", count: 1, description: "Leads nursing services and patient care coordination" },



{ title: "Nursing Officer", count: 6, description: "Provides nursing care and supports patient management" },
{ title: "Nursing Assistant", count: 2, description: "Assists nurses in patient care and ward activities" },
{ title: "Hospital Attender Grade2", count: 4, description: "Supports ward duties and assists patients as needed" },
{ title: "Pharmacist", count: 3, description: "Dispenses medicines and counsels patients on usage" },
{ title: "Lab Technician", count: 3, description: "Conducts diagnostic tests and manages lab processes" },
{ title: "Physiotherapist", count: 1, description: "Provides rehabilitation and physiotherapy services" },
{ title: "MLHP", count: 4, description: "Offers primary care and community-level health services" },
{ title: "Junior Public Health Nurse", count: 5, description: "Supports community health programs and outreach" },
{ title: "Optometrist", count: 1, description: "Conducts vision tests and eye-related assessments" },
{ title: "Palliative Nurse", count: 2, description: "Provides supportive and palliative care services" },
{ title: "Clerk", count: 1, description: "Manages records and administrative documentation" },
{ title: "Part time Sweeper", count: 1, description: "Ensures cleanliness and sanitation of the premises" },
{ title: "Public Health Nurse", count: 1, description: "Leads public health initiatives and field programs" },
{ title: "Health Inspector", count: 1, description: "Oversees sanitation, inspection, and public health standards" },
{ title: "Junior Health Inspector", count: 2, description: "Assists in public health inspections and field duties" },
{ title: "Driver", count: 1, description: "Operates ambulance and transport services" },
{ title: "Office Attendant", count: 1, description: "Supports office operations and daily administrative tasks" },
{ title: "PRO", count: 1, description: "Handles patient relations and public communication" },



];


export default function StaffPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <InnerNavbar />
      
      <main className="container-fixed py-12 space-y-10 mb-16">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

         <div className="text-center mb-12">
           <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Healthcare Team</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                A dedicated team of healthcare professionals committed to your well-being
            </p>
        </div>
       

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {staffRoles.map((role, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-xl hover:ring-2 hover:ring-blue-500"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-blue-100 p-3 opacity-20">
                <div className="h-full w-full rounded-full bg-blue-200" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{role.title}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-extrabold text-blue-600">{role.count}</span>
                <span className="text-sm font-medium text-slate-500">Members</span>
              </div>
              <p className="text-slate-600">{role.description}</p>
             
            </motion.div>
          ))}
        </motion.div>


      </main>
      <Footer />
    </div>
  );
}