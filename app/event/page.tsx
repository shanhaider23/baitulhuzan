import Image from 'next/image'
import { getLatestEventImages } from '../lib/getLatestEventImages'

export default async function EventsPage() {
    const images = await getLatestEventImages()

    return (
        <section className="min-h-screen bg-linear-to-br from-black via-[#0f1a17] to-[#1e2c28] px-6 md:px-16 py-28">
            {/* Heading */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20 overflow-hidden">
                <h1 className="text-white text-4xl md:text-6xl tracking-[0.35em] animate-left">
                    UPCOMING
                </h1>
                <h2 className="text-white text-4xl md:text-6xl tracking-[0.35em] animate-right">
                    EVENTS
                </h2>
            </div>

            {/* Images */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full animate-right">
                    {images.length === 0 && (
                        <p className="text-white/60 text-center col-span-full">
                            No events uploaded yet.
                        </p>
                    )}

                    {images.map((img) => (
                        <div
                            key={img.id}
                            className="flex justify-center"
                        >
                            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-xl">
                                <Image
                                    src={img.url}
                                    alt="Event image"
                                    width={480}
                                    height={640}
                                    className="h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
