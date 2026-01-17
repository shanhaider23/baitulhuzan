'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Events', href: '/event' },
        { name: 'Contact', href: '/contact' },

    ]

    return (
        <header className="z-50 fixed w-full top-0 left-0">
            <nav
                className={`transition-all duration-300 ${scrolled
                    ? 'bg-linear-to-b from-black/90 to-black/70 backdrop-blur-md shadow-lg'
                    : 'bg-linear-to-b from-black/70 to-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Logo + Animated Text */}
                    <Link href="/" className="relative flex items-center">
                        <div className="relative">
                            <Image
                                src="/images/logo.jpg"
                                alt="Baitulhuzan Logo"
                                width={150}
                                height={150}
                                className="rounded-full   translate-y-8  hover:scale-110"
                            />
                        </div>

                        <div className="ml-4 hidden sm:block">
                            <div className="text-white text-lg tracking-[0.35em] animate-header-title">
                                BAITULHUZAN
                            </div>
                            <div className="text-white/80 text-xs tracking-[0.4em] animate-header-subtitle">
                                DENMARK
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-white/90 hover:text-white transition-colors tracking-wide hover:scale-110"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors "
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden px-4 pb-6 pt-4 bg-black/90 backdrop-blur-md animate-fadeIn">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block py-3 text-white/90 hover:text-white transition-colors hover:scale-110 tracking-wide"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>

            {/* Animations */}
            <style jsx>{`
        @keyframes slideFadeLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
            letter-spacing: 0.6em;
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            letter-spacing: 0.35em;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-header-title {
          animation: slideFadeLeft 1.2s ease-out forwards;
        }

        .animate-header-subtitle {
          animation: fadeUp 1s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
        </header>
    )
}
