import { Mic, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#171717] to-[#262626] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg')] bg-cover bg-center" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="flex justify-center mb-6">
          <Mic className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Welcome to the <span className="text-primary">World of Work</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          A podcast exploring the future of work, leadership, and the human experience in the modern workplace.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#episodes"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-purple-600 transition"
          >
            <PlayCircle className="w-5 h-5" />
            Listen Now
          </a>
          <a
            href="#subscribe"
            className="inline-flex items-center gap-2 border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Subscribe
          </a>
        </div>
      </div>
    </section>
  )
}
