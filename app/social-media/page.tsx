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
        <>
            <section className=" bg-linear-to-br from-black via-[#0f1a17] to-[#1e2c28] px-6 md:px-16 py-10 ">
                {/* Page Title */}
                <h1 className="text-white text-2xl font-bold md:text-6xl tracking-[0.35em] animate-right mb-16 text-center">
                    Social Media & Gallery
                </h1>
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">

                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="inline-flex items-center gap-3 rounded-full bg-black/60 px-4 py-2 text-white">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                            <span className="text-sm md:text-base font-semibold">Live on YouTube</span>
                        </div>
                        <h2 className="mt-4 text-white text-2xl md:text-4xl font-bold">
                            Latest Video Highlights
                        </h2>
                        <p className="mt-2 text-white/80 text-sm md:text-base max-w-2xl">
                            Watch our newest content and stay connected with updates from Baitulhuzan.
                        </p>
                    </div>
                </div>

                {/* Facebook and YouTube Links */}
                <div className="flex flex-col md:flex-row gap-12 justify-center m-auto mt-16 max-w-6xl">

                    <div className="relative w-full max-w-4xl mx-auto h-125 md:h-140  rounded-2xl overflow-hidden bg-[#1c1c1c] border border-gray-700 shadow-2xl">
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

                    {/* Facebook Link */}

                </div>

            </section>
            {/* Picture Gallery */}

            <section className='bg-linear-to-br from-black via-[#0f1a17] to-[#1e2c28] px-6 md:px-16 py-10'>
                <div className="flex flex-col md:flex-row gap-12 justify-center m-auto mt-16 max-w-6xl">
                    <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-8 rounded-xl shadow-lg border border-white/10 bg-black/40 hover:bg-black/60 transition">
                        <svg className="w-16 h-16 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <h3 className="text-white text-2xl font-bold mb-2">Facebook</h3>
                        <p className="text-white/60 text-center mb-4">Follow us on Facebook for updates and community posts</p>
                        <a
                            href="https://www.facebook.com/BaitUlHuzanDK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
                        >
                            Visit Facebook Page
                        </a>
                    </div>


                    {/* YouTube Link */}
                    <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-8 rounded-xl shadow-lg border border-white/10 bg-black/40 hover:bg-black/60 transition">
                        <svg className="w-16 h-16 text-red-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        <h3 className="text-white text-2xl font-bold mb-2">YouTube</h3>
                        <p className="text-white/60 text-center mb-4">Subscribe to our YouTube channel for videos and content</p>
                        <a
                            href="https://www.youtube.com/@alishah2200"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
                        >
                            Visit YouTube Channel
                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}
