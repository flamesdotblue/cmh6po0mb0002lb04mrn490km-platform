import React from 'react'
import { Check, Users, Shield, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const packages = [
  {
    name: 'Booth Starter',
    price: '₹19,999',
    badge: 'Best for local wards',
    features: ['Poster & banner set', 'Volunteer tees (10)', 'WhatsApp creatives (20)', 'Street mic scripts'],
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Village Outreach',
    price: '₹59,999',
    badge: 'Popular choice',
    features: ['House visit kit', 'Road show van branding', 'Local language jingles', 'Social reels (12)'],
    icon: Rocket,
    color: 'from-orange-500 to-rose-500',
  },
  {
    name: 'Digital War Room',
    price: '₹1,49,999',
    badge: 'Comprehensive',
    features: ['24/7 monitoring', 'Issue rapid response', 'Ad creatives + targeting', 'Daily insights dashboard'],
    icon: Shield,
    color: 'from-indigo-500 to-violet-500',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Election Packages</h2>
          <p className="mt-3 text-slate-600">Simple bundles to mobilize your base and energize your narrative across Kerala.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 90, damping: 12 }}
              className="relative rounded-3xl border border-emerald-200 bg-white p-6 shadow-lg"
            >
              <div className="absolute -top-3 left-5 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
                {pkg.badge}
              </div>
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pkg.color} text-white shadow-md`}>
                <pkg.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{pkg.name}</h3>
              <div className="mt-1 text-2xl font-extrabold text-emerald-700">{pkg.price}</div>
              <ul className="mt-4 space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:brightness-110">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
