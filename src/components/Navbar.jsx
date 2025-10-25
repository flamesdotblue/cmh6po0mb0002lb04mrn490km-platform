import React, { useState } from 'react'
import { ShoppingCart, User, LogIn, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-emerald-100">
      <nav className="mx-auto container px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200">
              <span className="text-white font-black text-xl">KE</span>
            </div>
            <svg className="absolute -top-3 -right-3 h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12c6 0 6-10 12-10s6 10 12 10-6 10-12 10-6-10-12-10Z" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="block font-extrabold tracking-tight text-slate-900 text-lg">Kerala Election</span>
            <span className="block text-xs text-emerald-600 font-medium">Caricature Campaign Studio</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#packages" className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition">Packages</a>
          <a href="#campaigns" className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition">Campaigns</a>
          <a href="#about" className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition">About</a>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-3 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 shadow-sm">
            <ShoppingCart className="h-4 w-4" /> Cart
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:brightness-110">
            <LogIn className="h-4 w-4" /> Login
          </button>
          <button className="ml-1 inline-flex items-center justify-center rounded-full h-9 w-9 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
            <User className="h-4 w-4" />
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-white text-emerald-700">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white/80 backdrop-blur">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#packages" className="text-sm font-medium text-slate-700">Packages</a>
            <a onClick={() => setOpen(false)} href="#campaigns" className="text-sm font-medium text-slate-700">Campaigns</a>
            <a onClick={() => setOpen(false)} href="#about" className="text-sm font-medium text-slate-700">About</a>
            <div className="flex items-center gap-2 pt-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white px-3 py-2 text-sm font-semibold text-emerald-700">
                <ShoppingCart className="h-4 w-4" /> Cart
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-2 text-sm font-semibold text-white">
                <LogIn className="h-4 w-4" /> Login
              </button>
              <button className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-emerald-100 text-emerald-700">
                <User className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
