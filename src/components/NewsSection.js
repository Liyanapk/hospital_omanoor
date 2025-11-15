import { motion } from "framer-motion"
import Image from "next/image"

export default function NewsSection ( {newsImages} ){
    return(
        <div className="mt-10">
             {/* NEWS MARQUEE */}
        <section id="news" className="space-y-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              News & Highlights
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Community updates at a glance
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...newsImages, ...newsImages].map((src, idx) => (
                <div key={`${src}-${idx}`} className="relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Hospital news"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        </div>
    )
}