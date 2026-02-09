import Image from 'next/image'
import { getLatestEventImages } from '../lib/getLatestEventImages'

export default async function EventsPage() {
    const images = await getLatestEventImages()

    return (
        <section className="min-h-screen bg-linear-to-br from-black via-[#0f1a17] to-[#1e2c28] px-6 md:px-16 py-10 md:py-28">
            {/* Heading */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-5  md:mb-20 overflow-hidden">
                <h1 className="text-white text-2xl font-bold md:text-6xl tracking-[0.35em] animate-left">
                    UPCOMING EVENTS
                </h1>

            </div>

            {/* Images */}
            <div className="flex justify-center">
                <div className="flex justify-center gap-8 flex-wrap items-center w-full animate-right">
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
