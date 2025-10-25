import React from 'react'
import { Megaphone, Calendar, Users, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const campaigns = [
  {
    title: 'Onam Street Connect',
    desc: 'Festive outreach with cultural touchpoints, local artists, and neighborhood meets.',
    icon: Megaphone,
    kpis: ['5k footfalls', '20 booths covered', 'Local press pickup'],
  },
  {
    title: 'Youth Dialogues',
    desc: 'College rounds, startup hubs, and online townhalls to energize first-time voters.',
    icon: Users,
    kpis: ['1M+ reach', '200 campus reps', 'UGC reel drive'],
  },
  {
    title: 'Manifesto Week',
    desc: 'Daily drops of digestible promises in Malayalam + English with caricature visuals.',
    icon: Calendar,
    kpis: ['7 themes', 'Top-of-mind recall', 'Issues mapped'],
  },
]

export default function Campaigns() {
  return (
    <section id="campaigns" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Signature Campaigns</h2>
          <p className="mt-3 text-slate-600">Pick a play or mix-and-match to suit your constituency dynamics.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {campaigns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: 'spring', stiffness: 90, damping: 12 }}
              className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-white p-6 shadow-lg"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-100" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-4 text-xl font-bold text-slate-900">{c.title}</h3>
              <p className="relative mt-2 text-slate-600">{c.desc}</p>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {c.kpis.map((k) => (
                  <span key={k} className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-300" /> {k}
                  </span>
                ))}
              </div>
              <button className="relative mt-6 w-full rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                Book This Campaign
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
