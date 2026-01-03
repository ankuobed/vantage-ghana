"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/80 backdrop-blur-md border-b border-border/50">
      <Link href="/" className="text-xl font-serif font-bold tracking-tighter uppercase">
        Vantage <span className="text-primary">Ghana</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
        <Link href="#land" className="hover:text-primary transition-colors">
          Land
        </Link>
        <Link href="#property" className="hover:text-primary transition-colors">
          Property
        </Link>
        <Link href="#services" className="hover:text-primary transition-colors">
          Services
        </Link>
        <Link
          href="#contact"
          className="px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Contact
        </Link>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          <Link href="#land" onClick={() => setIsOpen(false)}>
            Land
          </Link>
          <Link href="#property" onClick={() => setIsOpen(false)}>
            Property
          </Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="#contact" className="text-primary font-bold" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
