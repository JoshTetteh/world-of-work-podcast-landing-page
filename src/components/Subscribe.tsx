export default function Subscribe() {
  return (
    <section id="subscribe" className="bg-primary text-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Never Miss an Episode</h2>
        <p className="text-lg mb-8">
          Subscribe to get the latest episodes delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full text-black w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
