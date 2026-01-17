import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white font-bold">BH</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Baittulhuzan</h3>
                            <p className="text-sm text-gray-300">Islamic Education Center — Copenhagen</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400">We welcome you to visit our center or contact us for more information.</p>
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
                    <p className="text-sm text-gray-300">Copenhagen, Denmark</p>
                    <p className="text-sm text-gray-300">Phone: <a href="tel:+4500000000" className="hover:text-white">+45 00 00 00 00</a></p>
                    <p className="text-sm text-gray-300">Email: <a href="mailto:info@baittulhuzan.dk" className="hover:text-white">info@baittulhuzan.dk</a></p>
                </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Baittulhuzan. All rights reserved.
            </div>
        </footer>
    )
}
