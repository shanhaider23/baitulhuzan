import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-black via-[#0f1a17] to-[#1e2c28] text-white py-2">
            <div className="flex flex-col ">
                <div className="flex justify-around items-center gap-8">
                    <div>
                        <Link href="/" className="relative flex items-center">
                            <div className="relative">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Baitulhuzan Logo"
                                    width={150}
                                    height={150}
                                    className="rounded-full     hover:scale-110"
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
                        <p className="text-sm text-gray-400 mt-4">We welcome you to visit our center or contact us for more information.</p>

                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/about" className="hover:text-white">About</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white">Contact</Link>
                            </li>
                            <li>
                                <Link href="/event" className="hover:text-white">Events</Link>
                            </li>
                            <li>
                                <Link href="/donate" className="hover:text-white">Donate</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Contact</h4>
                        <p className="text-sm text-gray-300">Østbrovej 6, 2, 2600 Glostrup, Denmark</p>
                        <p className="text-sm text-gray-300">Phone: <a href="tel:+4500000000" className="hover:text-white">+45 50389851</a></p>
                        <p className="text-sm text-gray-300">Email: <a href="mailto:info@baittulhuzan.dk" className="hover:text-white">info@baittulhuzan.dk</a></p>
                    </div>
                </div>
                <div className="text-sm text-gray-500 self-end mt-4 mr-4 -mb-6">
                    Design & Developed by: <span className="text-gray-300">Shan-e-Haider Bukhari</span>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
                    <div className="mb-2">
                        © {new Date().getFullYear()} Baittulhuzan. All rights reserved.
                    </div>
                </div>
            </div>

        </footer>
    )
}
