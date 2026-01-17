'use client'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
export default function Hero() {
    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }
    return (
        <section className="relative h-screen bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="mb-8 animate-fadeIn">
                    <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 mb-6">
                        <p className="text-sm font-semibold">Welcome to our Islamic Center</p>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    Baittulhuzan
                </h1>

                <p className="text-2xl md:text-4xl mb-4 font-light animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    Islamic Education Center
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 inline-block animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                    <p className="text-xl md:text-2xl italic mb-2">
                        My Lord, increase me in knowledge
                    </p>
                    <p className="text-sm md:text-base text-gray-200">Quran 20:114</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                    <Link
                        href="/donate"
                        className="bg-secondary hover:bg-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
                    >
                        Support Us
                    </Link>
                    <Link
                        href="/about"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-10 rounded-lg transition-all"
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            <button
                onClick={scrollToContent}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
                aria-label="Scroll down"
            >
                <ChevronDown size={40} />
            </button>

            <style jsx>{`
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
            opacity: 0;
        }
    `}</style>
        </section>
    )
}