'use client'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function EventsPage() {
    const [activeTab, setActiveTab] = useState('weekly')

    const weeklyEvents = [
        {
            day: 'Monday',
            time: '7:00 PM - 8:30 PM',
            event: 'Quran (Sout-ul-Lahan) Classes',
            location: 'Main Hall',
        },
        {
            day: 'Tuesday',
            time: '8:00 PM - 9:00 PM',
            event: 'Dua-e-Tawassul',
            location: 'Prayer Hall',
        },
        {
            day: 'Wednesday',
            time: '7:00 PM - 8:00 PM',
            event: 'Youth Group Meeting',
            location: 'Community Room',
        },
        {
            day: 'Thursday',
            time: '8:00 PM - 9:30 PM',
            event: 'Dua-e-Kumail',
            location: 'Prayer Hall',
        },
        {
            day: 'Friday',
            time: '12:30 PM',
            event: 'Jumah Prayer',
            location: 'Main Prayer Hall',
        },
        {
            day: 'Friday',
            time: '6:00 PM - 8:00 PM',
            event: 'Weekend Islamic School',
            location: 'Classrooms',
        },
        {
            day: 'Saturday',
            time: '10:00 AM - 2:00 PM',
            event: 'Weekend Islamic School',
            location: 'Classrooms',
        },
        {
            day: 'Sunday',
            time: '10:00 AM - 2:00 PM',
            event: 'Weekend Islamic School',
            location: 'Classrooms',
        },
    ]

    const upcomingEvents = [
        {
            date: 'February 15, 2026',
            title: 'Islamic Finance Workshop',
            time: '2:00 PM - 5:00 PM',
            description: 'Learn about halal investing and Islamic banking principles',
        },
        {
            date: 'February 22, 2026',
            title: 'Community Iftar',
            time: '6:00 PM - 8:30 PM',
            description: 'Join us for a community dinner and prayer',
        },
        {
            date: 'March 1, 2026',
            title: 'Youth Sports Day',
            time: '10:00 AM - 4:00 PM',
            description: 'Fun activities and sports for young community members',
        },
    ]

    return (
        <div className="pt-20 pb-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold text-primary mb-4 text-center">Events & Programs</h1>
                <p className="text-xl text-gray-600 mb-12 text-center">
                    Stay connected with our community activities
                </p>

                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg shadow p-1 inline-flex">
                        <button
                            onClick={() => setActiveTab('weekly')}
                            className={`px-6 py-2 rounded-md font-semibold transition-colors ${activeTab === 'weekly'
                                    ? 'bg-primary text-white'
                                    : 'text-gray-600 hover:text-primary'
                                }`}
                        >
                            Weekly Programs
                        </button>
                        <button
                            onClick={() => setActiveTab('upcoming')}
                            className={`px-6 py-2 rounded-md font-semibold transition-colors ${activeTab === 'upcoming'
                                    ? 'bg-primary text-white'
                                    : 'text-gray-600 hover:text-primary'
                                }`}
                        >
                            Upcoming Events
                        </button>
                    </div>
                </div>

                {activeTab === 'weekly' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {weeklyEvents.map((event, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-primary">{event.day}</h3>
                                    <Calendar className="text-secondary" size={24} />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">{event.event}</h4>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex items-center">
                                        <Clock size={16} className="mr-2 text-primary" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin size={16} className="mr-2 text-primary" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'upcoming' && (
                    <div className="space-y-6">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-gray-600">
                                            <div className="flex items-center">
                                                <Calendar size={18} className="mr-2 text-primary" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock size={18} className="mr-2 text-primary" />
                                                <span>{event.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-4 md:mt-0 bg-primary hover:bg-accent text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                                        Register
                                    </button>
                                </div>
                                <p className="text-gray-700">{event.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-12 bg-gradient-to-br from-primary to-accent text-white rounded-lg shadow-lg p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-xl mb-6">
                        Follow us on social media to never miss an event
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://facebook.com"
                            className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://youtube.com"
                            className="bg-secondary hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            YouTube
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}