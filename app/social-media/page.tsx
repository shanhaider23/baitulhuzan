'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// List of images stored in public/gallery folder
const galleryImages = [
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/4.jpg',
    '/gallery/5.jpg',
    '/gallery/6.jpg',
    '/gallery/7.jpg',

]

export default function CommunityPage() {
    const [current, setCurrent] = useState(0)

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % galleryImages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
        )
    }

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % galleryImages.length)
    }
    return (
        <section className="min-h-screen bg-linear-to-br from-black via-[#0f1a17] to-[#1e2c28] px-6 md:px-16 py-24">
            {/* Page Title */}
            <h1 className="text-white text-4xl md:text-5xl font-light tracking-[0.25em] text-center mb-20">
                Social Media & Gallery
            </h1>

            {/* Facebook and YouTube Embeds */}
            <div className="flex flex-col md:flex-row gap-12 justify-center mb-20">
                {/* Facebook */}
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border border-white/10">
                    <iframe
                        src="https://www.facebook.com/BaitUlHuzanDK/posts"
                        width="100%"
                        height="500"
                        className="border-none overflow-hidden"
                        scrolling="no"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                </div>

                {/* YouTube */}
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border border-white/10">
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/jwJ71zA-Jz0"
                        title="YouTube Channel"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Picture Gallery */}
            <h2 className="text-white text-3xl md:text-4xl font-light tracking-wide mb-10 text-center">
                PHOTO GALLERY
            </h2>

            <div className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-[#1c1c1c] border border-gray-700 shadow-2xl">
                {/* Image */}
                <Image
                    src={galleryImages[current]}
                    alt={`Event ${current + 1}`}
                    fill
                    className="object-contain transition-all duration-700"
                />

                {/* Left arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition"
                >
                    <ChevronLeft size={32} />
                </button>

                {/* Right arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white transition"
                >
                    <ChevronRight size={32} />
                </button>

                {/* Indicator dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                    {galleryImages.map((_, idx) => (
                        <span
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-white' : 'bg-white/30'
                                }`}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}
