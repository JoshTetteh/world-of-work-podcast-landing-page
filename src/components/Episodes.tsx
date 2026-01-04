const episodes = [
  {
    title: 'The Rise of Remote Work',
    description: 'How distributed teams are reshaping the workplace.',
    image: 'https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg',
  },
  {
    title: 'AI and the Future of Jobs',
    description: 'Exploring automation, augmentation, and what’s next.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
  {
    title: 'Leadership in the 21st Century',
    description: 'Empathy, agility, and the new rules of leadership.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
  },
]

export default function Episodes() {
  return (
    <section id="episodes" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Episodes</h2>
        <p className="text-gray-600 mb-12">
          Dive into our most popular episodes and discover insights from industry leaders.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {episodes.map((ep, i) => (
            <div key={i} className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img src={ep.image} alt={ep.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{ep.title}</h3>
                <p className="text-gray-600">{ep.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
