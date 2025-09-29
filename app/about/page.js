"use client";

import Link from "next/link";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#0a1a4a] flex flex-col text-white">
      {/* HEADER */}
      <header className="flex items-center justify-between shadow-md px-6 py-3 bg-black sticky top-0 z-50">
        <Link href="/">
          <Image
            src="/vynoxlogo.jpg"
            width={50}
            height={50}
            alt="Logo"
            className="rounded-xl"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/auth" className="hover:text-[#FFCC66] hover:underline">
            Log in
          </Link>
          <Link href="/inventory" className="hover:text-[#FFCC66] hover:underline">
            Inventory
          </Link>
          <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-5 py-2 text-white font-medium shadow-md transition-transform hover:scale-105">
            <CiCalendar className="text-xl" />
            Book Now
          </button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative text-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
          About Vynox Auto Detailing
        </h1>
        <p className="max-w-3xl mx-auto text-gray-200 text-lg leading-relaxed">
          Detailing isn’t just maintenance; it’s an art, a science, and a promise
          to keep your car at its very best. At Vynox, we transform vehicles
          into reflections of pride, care, and craftsmanship.
        </p>
      </section>

      {/* GRID CONTENT */}
      <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-gray-200 leading-relaxed">
          <h2 className="text-2xl font-bold text-[#FFCC66]">Our Mission</h2>
          <p>
            Restore the beauty of every vehicle and protect it for years to come.
            Whether it’s a family car, a luxury vehicle, or a daily commuter—
            we treat each with the same attention and respect.
          </p>

          <h2 className="text-2xl font-bold text-[#FFCC66]">What Sets Us Apart</h2>
          <p>
            Eco-friendly, high-quality products that are safe for your car and
            the planet. We believe in sustainable detailing that delivers
            long-lasting results.
          </p>
        </div>

        <Image
          src="/images/about.jpg"
          alt="Auto Detailing"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg border-2 border-yellow-400 mx-auto"
        />
      </section>

      {/* VALUES SECTION */}
      <section className="px-6 py-12 bg-black/40">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold text-yellow-400">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-[#0d235d] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Craftsmanship</h3>
              <p>Every detail is perfected with precision, care, and passion.</p>
            </div>
            <div className="p-6 bg-[#0d235d] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p>Eco-friendly products that are safe for your car & planet.</p>
            </div>
            <div className="p-6 bg-[#0d235d] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p>Transparent pricing, honesty, and lasting relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#FFCC66] mb-6">Our Vision</h2>
        <p className="text-gray-200 leading-relaxed text-lg">
          As technology evolves, we’re committed to adapting with it—whether
          it’s detailing electric vehicles, innovating protective solutions,
          or staying ahead of industry standards. For us, the future is clean,
          sustainable, and customer-first.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 px-6 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <Image src="/vynoxlogo.jpg" width={100} height={100} alt="Logo" className="rounded-md" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <Link href="/about" className="hover:text-[#FFCC66] hover:underline">About</Link>
            <Link href="/services" className="hover:text-[#FFCC66] hover:underline">Services</Link>
            <Link href="/contact" className="hover:text-[#FFCC66] hover:underline">Contact</Link>
            <Link href="/giftcards" className="hover:text-[#FFCC66] hover:underline">Gift Cards</Link>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <p>📞 +1-587-438-7822</p>
            <Link href="mailto:mohamadalhajj2002@gmail.com" className="hover:text-[#FFCC66] hover:underline">
              📧 mohamadalhajj2002@gmail.com
            </Link>
            <Link href="https://maps.app.goo.gl/fPGxCvfNLQTd28wRA" target="_blank" className="hover:text-[#FFCC66] hover:underline">
              📍 2806 Ogden Rd SE, Calgary, AB
            </Link>
            <p>🕛 Mon–Fri: 9am–6pm</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <h4 className="text-[#FFCC66] font-semibold">Follow Us</h4>
            <div className="flex gap-4 text-lg">
              <a href="https://facebook.com" target="_blank" className="hover:text-[#FFCC66]"><FaFacebook size={22} /></a>
              <a href="https://instagram.com" target="_blank" className="hover:text-[#FFCC66]"><FaInstagram size={22} /></a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-[#FFCC66]"><FaLinkedinIn size={22} /></a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-4" />
        <p className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Vynox Inventory. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
