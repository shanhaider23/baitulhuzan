'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
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
        { name: 'Services', href: '/services' },
        { name: 'Education', href: '/education' },
        { name: 'Events', href: '/events' },
        { name: 'Contact', href: '/contact' },
        { name: 'About Us', href: '/about' },
    ]
    return (
        <header >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <span className="text-white font-bold text-xl">BH</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                                Baittulhuzan
                            </h1>
                            <p className="text-xs text-gray-600">Islamic Education Center</p>
                        </div>
                    </Link>
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/donate"
                            className="ml-4 bg-secondary hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
                        >
                            Donate
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="lg:hidden pb-4 animate-fadeIn">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/donate"
                            className="block mt-2 bg-secondary hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Donate
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}