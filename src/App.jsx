import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Campaigns from './components/Campaigns'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-slate-800">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-200 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-lime-200 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-200 blur-3xl" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Campaigns />
      </main>
      <Footer />
    </div>
  )
}
