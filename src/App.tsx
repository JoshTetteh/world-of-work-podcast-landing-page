import Hero from './components/Hero'
import Episodes from './components/Episodes'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="font-sans bg-white text-gray-900">
      <Hero />
      <Episodes />
      <Subscribe />
      <Footer />
    </main>
  )
}
