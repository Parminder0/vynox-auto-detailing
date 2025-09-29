"use client"; 
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#0a1a4a] flex flex-col text-white">
      {/* HEADER */}
      <header className="flex items-center justify-between shadow-md px-6 py-3 bg-black relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/vynoxlogo.jpg"
              width={50}
              height={50}
              alt="Logo"
              className="rounded-xl"
              priority
              title="logo&homepage"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/auth"
            className="text-white hover:text-[#FFCC66] transition-colors hover:underline underline-offset-4"
          >
            Log in
          </Link>
          <Link
            href="/inventory"
            className="text-white hover:text-[#FFCC66] transition-colors hover:underline underline-offset-4"
          >
            Inventory
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-[#FFCC66] transition-colors hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>

           {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/95 flex flex-col items-center justify-center gap-6 text-lg z-50">
          <Link
            href="/auth"
            className="text-white hover:text-[#FFCC66]"
            onClick={() => setMenuOpen(false)}
          >
            Log in
          </Link>
          <Link
            href="/inventory"
            className="text-white hover:text-[#FFCC66]"
            onClick={() => setMenuOpen(false)}
          >
            Inventory
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-[#FFCC66]"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <button
            className="mt-8 px-6 py-2 bg-[#FFCC66] text-black rounded"
            onClick={() => setMenuOpen(false)}
          >
            Close Menu
          </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative">
        <img
          src="/images/auto-wash.jpg"
          alt="Car Detailing"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50">
          <h1 className="text-5xl font-bold">Vynox Auto Detailing</h1>
          <p className="mt-4 text-xl">Premium Car Care. Inside & Out.</p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-6 py-3 text-white font-medium shadow-[0_0_10px_rgba(255,204,102,0.6),0_0_20px_rgba(255,126,95,0.5)] transition-transform duration-300 hover:scale-105">
              <CiCalendar className="text-xl" />
              Book Now
            </button>

            <Link
              href="/services"
              className="flex items-center gap-2 rounded-lg border border-[#FFCC66] px-6 py-3 text-[#FFCC66] font-medium transition-transform duration-300 hover:scale-105 hover:bg-[#FFCC66]/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-black text-[#FFCC66] p-6 rounded-lg">
            <div className="relative w-full h-70 mb-4">
              <Image
                src="/images/interior-fix.jpg"
                alt="Interior Detailing"
                fill
                className="object-cover rounded-md mb-4 mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interior Detailing</h3>
            <p>Deep cleaning and protection for your car’s interior surfaces.</p>
          </div>
          <div className="bg-[#FFCC66] text-black p-6 rounded-lg">
            <div className="relative w-full h-70 mb-4">
              <Image
                src="/images/exterior-fix.jpg"
                alt="Exterior Wash"
                fill
                className="object-cover rounded-md mb-4 mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Exterior Wash</h3>
            <p>Gentle but effective wash that restores shine and removes dirt.</p>
          </div>
          <div className="bg-black text-[#FFCC66] p-6 rounded-lg">
            <div className="relative w-full h-70 mb-4">
              <Image
                src="/images/eco-friendly.jpg"
                alt="Eco-Friendly Products"
                fill
                className="object-cover rounded-md mb-4 mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Eco-Friendly Products
            </h3>
            <p>We use biodegradable, safe products to protect your car and planet.</p>
          </div>
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="bg-[#071133] py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
          Featured Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-black text-[#FFCC66] p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Interior Detailing</h3>
            <p className="my-2">$120</p>
            <p>Deep vacuuming and surface cleaning.</p>
            <button className="mt-4 px-4 py-2 bg-[#FFCC66] text-black rounded">
              Book Now
            </button>
          </div>
          <div className="bg-[#FFCC66] text-black p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Exterior Detailing</h3>
            <p className="my-2">$90</p>
            <p>Hand wash and wax polish for lasting shine.</p>
            <button className="mt-4 px-4 py-2 bg-black text-[#FFCC66] rounded">
              Book Now
            </button>
          </div>
          <div className="bg-black text-[#FFCC66] p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">Engine Cleaning</h3>
            <p className="my-2">$60</p>
            <p>Degreasing and protection of engine components.</p>
            <button className="mt-4 px-4 py-2 bg-[#FFCC66] text-black rounded">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* LATEST REVIEWS */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
          Latest Reviews
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black text-[#FFCC66] p-5 rounded-lg">
            <p className="mb-3">
              “Amazing service! My car looks brand new inside and out.”
            </p>
            <span>- Sarah</span>
          </div>
          <div className="bg-[#FFCC66] text-black p-5 rounded-lg">
            <p className="mb-3">
              “Friendly staff and attention to detail was fantastic.”
            </p>
            <span>- Michael</span>
          </div>
          <div className="bg-black text-[#FFCC66] p-5 rounded-lg">
            <p className="mb-3">
              “Highly recommend! Great value for the price.”
            </p>
            <span>- Aisha</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/vynoxlogo.jpg"
              width={120}
              height={120}
              alt="Logo"
              className="rounded-md"
            />
            <p className="mt-3 text-sm text-gray-400">
              Premium Auto Detailing Services
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <h4 className="text-[#FFCC66] font-semibold mb-2">Quick Links</h4>
            <Link href="/about" className="hover:text-[#FFCC66] hover:underline">
              About
            </Link>
            <Link href="/services" className="hover:text-[#FFCC66] hover:underline">
              Services
            </Link>
            <Link href="/contact" className="hover:text-[#FFCC66] hover:underline">
              Contact
            </Link>
            <Link href="/giftcards" className="hover:text-[#FFCC66] hover:underline">
              Gift Cards
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[#FFCC66] font-semibold mb-2">Contact</h4>
            <p>📞 +1-587-438-7822</p>
            <Link
              href="mailto:mohamadalhajj2002@gmail.com"
              className="hover:text-[#FFCC66] hover:underline"
            >
              📧 mohamadalhajj2002@gmail.com
            </Link>
            <Link
              href="https://maps.app.goo.gl/fPGxCvfNLQTd28wRA"
              target="_blank"
              className="hover:text-[#FFCC66] hover:underline"
            >
              📍 2806 Ogden Rd SE, Calgary, AB
            </Link>
            <p>🕛 Mon–Fri: 9am–6pm</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h4 className="text-[#FFCC66] font-semibold">Follow Us</h4>
            <div className="flex gap-5 text-xl">
              <a href="https://facebook.com" target="_blank" className="hover:text-[#FFCC66]">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" className="hover:text-[#FFCC66]">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-[#FFCC66]">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />
        <p className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Vynox Inventory. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
