"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageGallery({gallerySections}){

    const [activeIndexes, setActiveIndexes] = useState({})
    const [cardsPerView, setCardsPerView] = useState(4)

    useEffect(() => {
      setActiveIndexes((prev) => {
        const next = {}
        gallerySections.forEach(({ title }) => {
          next[title] = prev?.[title] ?? 0
        })
        return next
      })
    }, [gallerySections])

    useEffect(() => {
      const updateCardsPerView = () => {
        if (window.innerWidth >= 1280) {
          setCardsPerView(4)
        } else if (window.innerWidth >= 1024) {
          setCardsPerView(3)
        } else if (window.innerWidth >= 640) {
          setCardsPerView(2)
        } else {
          setCardsPerView(1)
        }
      }

      updateCardsPerView()
      window.addEventListener('resize', updateCardsPerView)
      return () => window.removeEventListener('resize', updateCardsPerView)
    }, [])

    const getVisibleImages = (gallery) => {
      const total = gallery.images.length
      const count = Math.min(cardsPerView, total)
      if (total <= cardsPerView) return gallery.images
      const start = activeIndexes[gallery.title] ?? 0
      return Array.from({ length: count }, (_, idx) => {
        const imageIndex = (start + idx) % total
        return gallery.images[imageIndex]
      })
    }

    const handleSlide = (title, total, direction) => {
      if (!total) return
      setActiveIndexes((prev) => {
        const current = prev?.[title] ?? 0
        const nextIndex = (current + direction + total) % total
        return { ...prev, [title]: nextIndex }
      })
    }

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
              
            </div>
            <div className="space-y-10">
              {gallerySections.map((gallery) => (
                <motion.div
                  key={gallery.title}
                  className="space-y-4"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-2xl font-semibold text-slate-900 mb-8">{gallery.title}</h3>
                  <div className="relative">
                    <div className="rounded-2xl  p-4 ">
                      <div
                        className="grid gap-4"
                        style={{ gridTemplateColumns: `repeat(${Math.min(cardsPerView, getVisibleImages(gallery).length)}, minmax(0, 1fr))` }}
                      >
                        {getVisibleImages(gallery).map((src, idx) => (
                          <div key={`${gallery.title}-${src}-${idx}`} className="relative h-48 overflow-hidden ">
                            <Image
                              src={src}
                              alt={gallery.title}
                              fill
                              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    {gallery.images.length > cardsPerView && (
                      <>
                        <button
                          type="button"
                          aria-label="Show previous images"
                          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-blue-600 shadow hover:bg-blue-600 hover:text-white"
                          onClick={() => handleSlide(gallery.title, gallery.images.length, -1)}
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          aria-label="Show next images"
                          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-blue-600 shadow hover:bg-blue-600 hover:text-white"
                          onClick={() => handleSlide(gallery.title, gallery.images.length, 1)}
                        >
                          →
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
    )
}