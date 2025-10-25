import React from 'react'

export default function Footer() {
  return (
    <footer id="about" className="border-t border-emerald-100 bg-white/70 backdrop-blur">
      <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
              <span className="text-white font-black text-lg">KE</span>
            </div>
            <div className="font-extrabold tracking-tight text-slate-900">Kerala Election</div>
          </div>
          <p className="mt-3 max-w-md text-sm text-slate-600">
            Caricature-first design studio for political communication in Kerala. We blend grassroots insights with modern visuals and interactions.
          </p>
        </div>
        <div className="md:text-right text-sm text-slate-600 flex md:justify-end items-end">
          <div>
            <div>© {new Date().getFullYear()} Kerala Election Studio</div>
            <div className="mt-1">Made with love in Kochi • hello@keralaelection.studio</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
