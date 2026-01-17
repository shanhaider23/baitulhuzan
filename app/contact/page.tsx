'use client'

import { Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
    const contacts = [
        { name: 'Syed Ibne Ali', phone: '28947632' },
        { name: 'Syed Athar Shabbit', phone: '50389851' },
        { name: 'Syed Sajid Abbas', phone: '60244786' },
        { name: 'Qamar Zaman', phone: '23839335' },
    ]

    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-[#0f1a17] to-[#1e2c28] py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-white tracking-[0.25em]">
                    CONTACT US
                </h1>

            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.967820859397!2d12.360344076365658!3d55.66751288049957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652522ccecd07a9%3A0x6f4c3e7f47dcf0f!2s%C3%98stbrovej%206%2C%202600%20Glostrup!5e0!3m2!1sen!2sdk!4v1705589420694!5m2!1sen!2sdk"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-2xl"
                    ></iframe>
                </div>

                {/* Contact Info */}
                <div className="bg-[#1c1c1c] rounded-2xl shadow-2xl border border-gray-700 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
                        Contact Information
                    </h2>

                    {/* Address */}
                    <div className="flex items-start space-x-4 mb-8">
                        <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin className="text-white" size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">Address</h3>
                            <p className="text-gray-300">Østbrovej 6, 2, 2600 Glostrup, Denmark</p>
                        </div>
                    </div>

                    {/* Contacts */}
                    <div className="space-y-4">
                        {contacts.map((c, idx) => (
                            <div key={idx} className="flex items-start space-x-4">
                                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">{c.name}</h3>
                                    <a href={`tel:+45${c.phone}`} className="text-gray-300 hover:text-primary">
                                        +45 {c.phone}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
