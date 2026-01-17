'use client'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="pt-20 pb-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold text-primary mb-4 text-center">Contact Us</h1>
                <p className="text-xl text-gray-600 mb-12 text-center">
                    Wed love to hear from you
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                        <p className="text-gray-600">Copenhagen, Denmark</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                        <a href="tel:+4500000000" className="text-gray-600 hover:text-primary">
                                            +45 00 00 00 00
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <a
                                            href="mailto:info@baittulhuzan.dk"
                                            className="text-gray-600 hover:text-primary"
                                        >
                                            info@baittulhuzan.dk
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary to-accent text-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
                            <p className="mb-4">
                                We welcome visitors to our center. Please feel free to drop by during our open hours or contact us to schedule a visit.
                            </p>
                            <p className="font-semibold">Open Hours:</p>
                            <p>Daily: Prayer times</p>
                            <p>Office: Mon-Fri, 10:00 AM - 4:00 PM</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="+45 00 00 00 00"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="Subject of your message"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2"
                            >
                                <Send size={16} />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}   