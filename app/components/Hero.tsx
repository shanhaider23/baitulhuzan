'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-home.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-contain md:object-cover"
                />
                <div className="absolute inset-0 bg-black/35" />
            </div>

            {/* Text Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="ml-6 sm:ml-12 md:ml-24 lg:ml-32 max-w-xl">
                    <h1 className="text-white text-3xl sm:text-3xl md:text-3xl font-bold tracking-[0.3em] animate-title">
                        IMAM BARGAH
                    </h1>
                    <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.3em] animate-title">
                        BAITULHUZAN
                    </h1>

                    <p className="mt-3 text-white/90 text-sm sm:text-base md:text-lg tracking-[0.35em] animate-subtitle">
                        DENMARK
                    </p>
                </div>
            </div>

            {/* Scroll Down Button */}
            <button
                onClick={scrollToContent}
                aria-label="Scroll down"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
            >
                <ChevronDown size={40} />
            </button>

            {/* Animations */}
            <style jsx>{`
        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translateX(-40px);
            letter-spacing: 0.6em;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            letter-spacing: 0.3em;
          }
        }

        @keyframes subtitleReveal {
          0% {
            opacity: 0;
            transform: translateX(-24px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-title {
          animation: titleReveal 1.4s ease-out forwards;
        }

        .animate-subtitle {
          animation: subtitleReveal 1.2s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
        </section>
    )
}
