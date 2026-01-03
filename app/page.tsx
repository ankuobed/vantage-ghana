import type React from "react"
import { Navbar } from "@/components/navbar"
import { ArrowRight, Landmark, Building2, Paintbrush, Construction } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />

      {/* Hero Section - Inspired by the 'Artifact' and 'Casa Portufornia' layout */}
      <section className="px-6 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000 ease-out">
          <div className="inline-block px-4 py-1.5 text-primary border border-white/20 text-xs font-bold tracking-wider uppercase shadow-lg transform hover:scale-105 transition-transform cursor-default">
            Based in Accra, Ghana
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-serif uppercase">
            Vantage <br />
            <span className="text-primary">Ghana</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
            Connecting clients with affordable real estate opportunities and providing top-tier architectural and
            construction services across West Africa.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#property"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all"
            >
              View Properties <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="relative aspect-4/5 overflow-hidden group animate-in fade-in zoom-in duration-1000 delay-300">
          <Image
            src="/modern-villa-ghana.jpg"
            alt="Affordable Architecture in Ghana"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/90 backdrop-blur-sm border border-border">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Featured Project</p>
            <h3 className="text-xl font-serif">The Ivory Residences, Cantonments</h3>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid inspired by the clean card layouts */}
      <section id="services" className="px-6 md:px-12 py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl uppercase font-serif">Core Expertise</h2>
              <p className="text-muted-foreground max-w-lg">
                From land acquisition to the final brick, we offer a complete lifecycle for property development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Landmark className="text-primary" />}
              title="Land for Sale"
              description="Affordable land parcels in sought-after locations, ideal for development or investment."
              href="#land"
            />
            <ServiceCard
              icon={<Building2 className="text-primary" />}
              title="Property for Sale"
              description="A curated selection of affordable homes and commercial properties across Ghana."
              href="#property"
            />
            <ServiceCard
              icon={<Paintbrush className="text-primary" />}
              title="Architectural Services"
              description="Comprehensive planning, 3D visualizations, and renderings for all projects."
              href="#architecture"
            />
            <ServiceCard
              icon={<Construction className="text-primary" />}
              title="Building Construction"
              description="Full-service construction for residential, commercial, and infrastructure."
              href="#construction"
            />
          </div>
        </div>
      </section>

      {/* Featured Listing Section - Grid inspired by the vertical splits */}
      <section id="property" className="px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 md:sticky md:top-32 md:h-fit space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-5xl font-serif uppercase leading-none">
              Latest <br /> Listings
            </h2>
            <p className="text-muted-foreground">
              Discover our most affordable properties currently available on the market.
            </p>
            <button className="text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-primary pb-1 hover:text-primary transition-colors">
              Explore All Properties
            </button>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <PropertyItem
              image="/modern-villa-ghana.jpg"
              title="East Legon Villa"
              location="Accra, Ghana"
              price="$850,000"
            />
            <PropertyItem
              image="/ghana-beachfront-land.jpg"
              title="Ada Waterfront Plot"
              location="Greater Accra"
              price="$120,000"
            />
            <PropertyItem
              image="/commercial-building-accra.jpg"
              title="Airport City Commercial"
              location="Accra"
              price="Price Upon Request"
            />
            <PropertyItem
              image="/luxury-apartment-ghana.jpg"
              title="The Vista Apartments"
              location="Ridge"
              price="From $350,000"
            />
          </div>
        </div>
      </section>

      {/* Contact Section - Inspired by the minimal form in the images */}
      <section id="contact" className="px-6 md:px-12 py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-serif uppercase">Start Planning</h2>
            <p className="text-primary-foreground/70">Ready to experience our services? Let's discuss your vision.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-70">First Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-primary-foreground/30 py-2 focus:border-primary-foreground outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-70">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-primary-foreground/30 py-2 focus:border-primary-foreground outline-none transition-colors"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-70">Message</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-primary-foreground/30 py-2 focus:border-primary-foreground outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center pt-8">
              <button className="px-12 py-5 bg-black text-secondary-foreground font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/50 px-6 md:px-12 py-12 border-t border-primary-foreground/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-serif font-bold tracking-tighter uppercase text-primary-foreground">
            Vantage Ghana
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-widest">© 2026 VANTAGE GHANA. ACCRA, GHANA.</p>
        </div>
      </footer>
    </main>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  href,
}: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <div className="p-8 bg-background border border-border hover:border-primary transition-all group flex flex-col h-full">
      <div className="mb-6 transform group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-serif mb-4 uppercase">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 grow">{description}</p>
      <a href={href} className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
        Learn More <ArrowRight size={14} />
      </a>
    </div>
  )
}

function PropertyItem({
  image,
  title,
  location,
  price,
}: { image: string; title: string; location: string; price: string }) {
  const displayPrice = price === "Contact for Price" ? "Price Upon Request" : price

  return (
    <div className="group cursor-pointer animate-in fade-in slide-in-from-bottom duration-500 fill-mode-both">
      <div className="relative aspect-square overflow-hidden mb-4 border border-border">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest">
          For Sale
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="text-lg font-serif uppercase tracking-tight">{title}</h4>
        <div className="flex justify-between items-end">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">{location}</p>
          <p className="text-sm font-bold text-primary">{displayPrice}</p>
        </div>
      </div>
    </div>
  )
}
