export const metadata = {
    title: 'About Us - Baittulhuzan',
    description: 'Learn about Baittulhuzan Islamic Education Center',
}

export default function AboutPage() {
    return (
        <div className="pt-20 pb-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold text-primary mb-8 text-center">About Us</h1>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                        Baittulhuzan Islamic Center is a non-profit educational Islamic institution,
                        dedicated to serving the Muslim community in Copenhagen, Denmark. We are
                        managed and operated by volunteer members who are committed to providing
                        quality Islamic education and community services.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                        Our center was established with the vision of creating a comprehensive
                        Islamic educational facility that serves both the spiritual and educational
                        needs of our community. We strive to promote authentic Islamic teachings,
                        foster community unity, and provide a welcoming environment for worship
                        and learning.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Provide comprehensive Islamic education to all age groups</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Create a vibrant community center for Muslims</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Promote understanding and unity among community members</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Support families in raising children with Islamic values</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Values</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Authentic Islamic knowledge and scholarship</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Community service and volunteerism</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Inclusivity and respect for all community members</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                <span>Excellence in education and spiritual development</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-accent text-white rounded-lg shadow-lg p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                    <p className="text-xl mb-6">
                        Be part of a growing community dedicated to Islamic education and service
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-secondary hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
}