'use client'
import Footer from "@/components/Footer";
import InnerNavbar from "@/components/InnerNavbar";
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const facilitySections = [
  {
    title: "PEST & ANIMAL CONTROL",
    images: [
      "/pest_controll/pest1.png",
      "/pest_controll/pest2.png",
      "/pest_controll/pest3.png",
    ],
    points: ["No Stray Animal", "Cattle Trap at the Entrance", "Pest Control","Anti-termite","Mosquito free Environment"],
  },
  {
    title: "HOSPITAL FACILITY",
    images: [
     "/hospital_facility/hos1.png",
     "/hospital_facility/hos2.png",
     "/hospital_facility/hos3.png",

    ],
    points: ["Front area are well maintained", "Internal Roads and pathways are clean", "Green Area Secured with  Fence","Herbal Garden"],
  },
  {
    title: "Maintenance of Open areas",
    images: [
     "/maintanance/main1.png",
     "/maintanance/main2.png",
     "/maintanance/main3.png",
    ],
    points: ["No abandoned/ dilapidated buildings", "No Water logging in open areas", "No thoroughfare/ general traffic","Open areas are maintained"],
  },
  {
    title: "Hospital/Facility Appearance",
    images: [
      "/maintanace/main1.png",
      "/maintanace/main2.png",
      "/maintanace/main3.png",
       "/maintanace/main4.png",
    ],
    points: ["Walls are well-plastered and painted ", "Name of the facility displayed", "Uniform signage system","No unwanted/outdated posters"],
  },
  {
    title: "Infrastructure maintenance",
    images: [
      "/infra/infra1.png",
      "/infra/infra2.png",
 
    ],
    points: ["Facility Infrastructure", "System of Periodic Maintenance ","Electric wiring and fitting","Intact boundary wall and  functional gates at entry "],
  },
  {
    title: "Illumination",
    images: [
     "/illumination/illu1.png",
     "/illumination/illu2.png",
     "/illumination/illu3.png",
    ],
    points: ["Illumination in circulation areas", "Illumination in Indoor areas","Illumination in front of facility  and access road","Energy efficient bulbs"],
  },
  {
    title: "Maintenance of Furniture and Fixtures ",
    images: [
     "/maintance/maint1.png",
     "/maintance/maint2.png",
   
    ],
    points: ["Windows and Doors are intact", "Patient beds and Mattress", "Trolleys, Stretchers, Wheel chairs etc.","Furniture at the nursing station,  staff room, administrative office","Preventive maintenance of furniture and  Fixtures"],
  },
  {
    title: "Removal of Junk material",
    images: [
      "/removal/remove1.png",
      "/removal/remove2.png",
  
    ],
    points: ["Junk material in patient care areas", "No Junk materials in Open areas and  corridors", "No Junk material in critical  service area","Demarcated space for keeping  condemned junk material"],
  },
    {
    title: "Water conservation",
    images: [
      "/water/water1.png"
  
    ],
    points: ["Adequate quantity and quality", "Maintenance of water supply system", "No leaking taps and pipes","Promoting water conservation","Functional rain water harvesting system"],
  },
   {
    title: "Work place management",
    images: [
      "/workmanage/work1.png",
      "/workmanage/work2.png",
      "/workmanage/work3.png",
      
    ],
    points: ["Sorting useful and unnecessary articles at  work station", "Arranging the useful articles, records in systematic manner", "Label the articles in identifiable  manner","Work stations are clean and dust free","Staff trained for work place  management"],
  },
   {
    title: "Clean Circulation areas",
    images: [
      "/circulation/circ1.png",
      "/circulation/circ2.png",
      "/circulation/circ3.png",
      
    ],
    points: ["No dirt/ Grease/ stains ", "No cobwebs/ Bird nest/ dust on walls and  roofs of corridors ", "Wet mop of corridors at least twice in a day",],
  },
     {
    title: "Cleanliness of Ward",
    images: [
      "/ward/ward1.png",
    ],
    points: ["No dirt/ Grease/ stains  ", "No cobwebs/ Bird nest/ dust on walls and  roofs of corridors ","Wet mop of corridors at least thrice in a day","Rigorously cleaned with scrubbing/  flooding once in a week"],
  },
     {
    title: "Cleanliness 0f Procedure area",
    images: [
     "/procedure/procedure1.png",
     "/procedure/procedure2.png",
     "/procedure/procedure3.png",
    ],
    points: ["No dirt ,grease, Stains and cobwebs ", "Procedure area cleaned twice in a Day/after every Surgery ","Rigorously cleaned with scrubbing/  flooding once in a week"],
  },
    {
    title: "Cleanliness of OPD",
    images: [
     "/opd/opd1.png",
     
    ],
    points: ["No dirt/ Grease/ stains  ", "No cobwebs/ Bird nest/ dust on walls and  roofs of corridors  ","OP cleaned thrice in a day","Rigorously cleaned with scrubbing/  flooding once in a month"],
  },
    {
    title: "Cleanliness 0f Lab and Pharmacy",
    images: [
     "/lab/lab1.png",
     "/lab/lab2.png"
     
    ],
    points: ["No dirt ,grease, Stains and cobwebs ", "Procedure area cleaned thrice in a Day"],
  },
   {
    title: "Cleanliness 0f Auxiliary Area",
    images: [
     "/auxilary/aux1.png",
     "/auxilary/aux2.png"
     
    ],
    points: ["No dirt ,grease, Stains and cobwebs ", "These area are cleaned twice in a Day","Rigorously cleaned with scrubbing","flooding once in a month"],
  },
     {
    title: "Cleanliness 0f Toilet",
    images: [
     "/toilet/toilet1.png",
     "/toilet/toilet2.png"
     
    ],
    points: ["No dirt/ Grease/ stains  ", "No foul smell ","Availability of running water  and functional cisterns ","Cleaning of toilets ","Dry Floors "],
  },
     {
    title: "Use of standard material & equipment for cleaning",
    images: [
     "/cleaning/clean1.png",
     "/cleaning/clean2.png"
     
    ],
    points: ["Availability of Detergent Disinfectant  for cleaning ","Using correct concentration of cleaning  solution","Buckets and carts for mopping","Cleaning equipment"],
  },
     {
    title: "Use of standards methods for  cleaning ",
    images: [
     "/standard/stand1.png",
     "/standard/stand2.png"
     
    ],
    points: ["3 Bucket system for cleaning","Unidirectional method and outward  mopping","No use of brooms in patient care  areas.","Separate mops for critical and  semi critical areas .","Disinfection and washing of mops  after every cleaning cycle ."],
  },
    {
    title: "Monitoring of cleanliness activities ",
    images: [
     "/monitering/monit1.png",
     "/monitering/monit2.png"
     
    ],
    points: ["Housekeeping checklists in toilets","Housekeeping checklists in patient care areas","Housekeeping checklists in procedure areas","Designated person for monitoring .","Monitoring of adequacy and quality of  material used for cleaning."],
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
          <section id="facilities" className="space-y-10 container-fixed mt-8 mb-20">
             <Link
                href="/"
                className="mt-4 inline-flex items-center justify-center gap-2 self-center rounded-full border-none px-0 py-2 text-sm font-semibold text-blue-600 transition  md:self-start"
              >
                ← Back to Home
              </Link>
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
                  className="grid gap-6 p-6  ring-1 ring-slate-100 lg:grid-cols-2"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                >
                  {idx % 2 === 0 ? (
                    <>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {section.images.map((src) => (
                          <motion.div
                            key={src}
                            className="relative h-48 overflow-hidden sm:h-48"
                            variants={fadeInUp}
                          >
                            <Image
                              src={src}
                              alt={section.title}
                              fill
                              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-slate-900">
                          {section.title}
                        </h3>
                        <ul className="mt-4 space-y-3 text-slate-600">
                          {section.points.map((point) => (
                          <motion.li key={point} className="flex items-start gap-3" variants={fadeInUp}>
                            <span className="mt-1 h-3 w-3 rounded-full bg-blue-500" />
                            <span>{point}</span>
                          </motion.li>
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
                          <motion.li key={point} className="flex items-start gap-3" variants={fadeInUp}>
                            <span className="mt-1 h-3 w-3 rounded-full bg-blue-500" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {section.images.map((src) => (
                          <motion.div
                            key={src}
                            className="relative h-48 overflow-hidden  sm:h-48"
                            variants={fadeInUp}
                          >
                            <Image
                              src={src}
                              alt={section.title}
                              fill
                              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover"
                            />
                          </motion.div>
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