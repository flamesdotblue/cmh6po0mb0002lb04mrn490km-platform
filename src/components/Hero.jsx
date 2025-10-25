import React from 'react'
import { motion } from 'framer-motion'
import { Megaphone, Rocket, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 pb-16 pt-12 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
              <Star className="h-3.5 w-3.5 fill-yellow-300 text-yellow-500" /> Kerala Election 2025
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Caricature-style campaign experiences that win hearts and votes
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              We craft vibrant, playful, and persuasive election campaigns for Kerala. From booth kits to digital war rooms, get packages tailored to your constituency.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#packages" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:brightness-110">
                <Rocket className="h-4 w-4" /> Explore Packages
              </a>
              <a href="#campaigns" className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                <Megaphone className="h-4 w-4" /> View Campaigns
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2"><div className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Trusted by 120+ local teams</div>
              <div className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-500 fill-yellow-300" /> 4.9 satisfaction</div>
            </div>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 12 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-100 p-5 shadow-xl border border-emerald-200">
              <div className="absolute -top-8 -left-4 rotate-[-8deg]">
                <Ribbon />
              </div>
              <CaricatureCandidate />
            </div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-6 -top-6 rounded-2xl bg-white px-3 py-2 text-emerald-700 shadow-lg border border-emerald-200"
            >
              Youth Wave
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-6 -bottom-6 rounded-2xl bg-white px-3 py-2 text-emerald-700 shadow-lg border border-emerald-200"
            >
              Grassroots First
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Ribbon() {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      <path d="M10 10 C 30 0, 90 0, 110 10 L 110 35 C 90 45, 30 45, 10 35 Z" fill="url(#g)" stroke="#34d399" strokeWidth="2" />
      <circle cx="60" cy="23" r="8" fill="white" />
    </svg>
  )
}

function CaricatureCandidate() {
  return (
    <div className="relative mx-auto grid w-full grid-cols-2 gap-3">
      <div className="col-span-2 rounded-2xl bg-white p-4 shadow-sm border border-emerald-200">
        <svg viewBox="0 0 300 200" className="w-full h-auto">
          <defs>
            <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FAD7B5" />
              <stop offset="100%" stopColor="#F1C696" />
            </linearGradient>
            <linearGradient id="shirt" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#A7F3D0" />
              <stop offset="100%" stopColor="#6EE7B7" />
            </linearGradient>
          </defs>
          <ellipse cx="150" cy="120" rx="60" ry="65" fill="url(#skin)" />
          <path d="M110 90 C130 80, 170 80, 190 90" stroke="#111827" strokeWidth="4" fill="none" />
          <circle cx="130" cy="115" r="6" fill="#111827" />
          <circle cx="170" cy="115" r="6" fill="#111827" />
          <path d="M128 142 C150 155, 172 155, 180 140" stroke="#DC2626" strokeWidth="5" fill="none" />
          <path d="M95 175 C150 180, 150 180, 205 175 L215 210 L85 210 Z" fill="url(#shirt)" />
          <path d="M95 175 C120 170, 180 170, 205 175" stroke="#10B981" strokeWidth="3" fill="none" />
          <ellipse cx="150" cy="70" rx="62" ry="24" fill="#111827" />
          <path d="M108 65 C140 85, 160 85, 192 65" stroke="#111827" strokeWidth="6" fill="none" />
        </svg>
      </div>
      <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-200">
        <div className="text-sm font-semibold text-slate-700">Booth Readiness</div>
        <div className="mt-2 h-2 w-full rounded-full bg-emerald-100">
          <div className="h-2 w-4/5 rounded-full bg-emerald-500" />
        </div>
      </div>
      <div className="rounded-2xl bg-white p-4 shadow-sm border border-emerald-200">
        <div className="text-sm font-semibold text-slate-700">Digital Reach</div>
        <div className="mt-2 h-2 w-full rounded-full bg-teal-100">
          <div className="h-2 w-3/4 rounded-full bg-teal-500" />
        </div>
      </div>
    </div>
  )
}
