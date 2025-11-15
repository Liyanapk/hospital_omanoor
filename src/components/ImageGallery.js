import { motion } from "framer-motion";
import Image from "next/image";


export default function ImageGallery({gallerySections}){

    const fadeInUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return(
        <div className="mt-16">
            {/* IMAGE GALLERIES */}
          <section id="gallery" className="space-y-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
             
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Visual reports of cleanliness & preparedness
              </h2>
            </div>
            <div className="space-y-10">
              {gallerySections.map((gallery) => (
                <motion.div
                  key={gallery.title}
                  className="space-y-4"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-slate-900">{gallery.title}</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {gallery.images.map((src) => (
                      <div key={src} className="relative h-48 overflow-hidden rounded-2xl shadow">
                        <Image
                          src={src}
                          alt={gallery.title}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
    )
}