"use client";

import Link from "next/link";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[#1c2e5c] flex flex-col">
      {/* NAVBAR */}
      <header className="flex items-center justify-between shadow-md px-6 py-3 bg-black">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/vynoxlogo.jpg"
              width={50}
              height={50}
              alt="Logo picture"
              className="rounded-xl"
              priority
              title="logo&homepage"
            />
          </Link>
        </div>

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
          <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-5 py-2 text-white font-medium shadow-[0_0_10px_rgba(255,204,102,0.6),0_0_20px_rgba(255,126,95,0.5)] transition-transform duration-300 hover:scale-105">
            <CiCalendar className="text-xl" />
            Book Now
          </button>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* FAQ */}
          <section>
            <h1 className="text-3xl font-bold text-[#FFCC66] mb-6">
              Contact Us
            </h1>
            <div className="space-y-4">
              <details className="bg-black p-4 rounded">
                <summary className="cursor-pointer font-semibold">
                  How do I book an Appointment?
                </summary>
                <p className="mt-2 text-gray-300">
                  Use the booking form on our Services page, or call us at
                  1-587-438-7822.
                </p>
              </details>
              <details className="bg-black p-4 rounded">
                <summary className="cursor-pointer font-semibold">
                  How often should I detail my car?
                </summary>
                <p className="mt-2 text-gray-300">
                  We recommend at least once every 6 months.
                </p>
              </details>
              <details className="bg-black p-4 rounded">
                <summary className="cursor-pointer font-semibold">
                  Can I tell if my car needs waxing?
                </summary>
                <p className="mt-2 text-gray-300">
                  If water no longer beads on the surface, it’s time for a wax.
                </p>
              </details>
            </div>
          </section>

          {/* Message Form */}
          <section>
            <h2 className="text-2xl font-bold text-[#FFCC66] mb-6">
              Send a Message
            </h2>
            <form className="flex flex-col space-y-4">
              <div>
                <label className="block text-[#FFCC66] font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-[#FFCC66] font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-[#FFCC66] font-medium mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full p-3 rounded bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-[#FFCC66] font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded bg-white text-black"
                ></textarea>
              </div>
              <button className="mt-2 px-6 py-3 bg-[#FFCC66] text-black font-semibold rounded hover:scale-105 transition-transform">
                Send
              </button>
            </form>
          </section>
        </div>
      </main>

      {/* FOOTER (4-part layout with dividers) */}
      <footer className="bg-black text-gray-300 px-6 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start border-b sm:border-b-0 sm:border-r border-gray-700 pb-4 sm:pb-0 sm:pr-6">
            <Image
              src="/vynoxlogo.jpg"
              width={100}
              height={100}
              alt="Logo"
              className="rounded-md"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 border-b sm:border-b-0 sm:border-r border-gray-700 pb-4 sm:pb-0 sm:pr-6">
            <Link href="/" className="hover:text-[#FFCC66] hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#FFCC66] hover:underline">
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-[#FFCC66] hover:underline"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FFCC66] hover:underline"
            >
              contact
            </Link>
            <Link
              href="/giftcards"
              className="hover:text-[#FFCC66] hover:underline"
            >
              Gift Cards
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 border-b sm:border-b-0 sm:border-r border-gray-700 pb-4 sm:pb-0 sm:pr-6">
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
          <div className="flex flex-col items-center lg:items-start gap-2">
            <h4 className="text-[#FFCC66] font-semibold">Follow Us</h4>
            <div className="flex gap-4 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-[#FFCC66]"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-[#FFCC66]"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-[#FFCC66]"
              >
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <hr className="border-gray-700 my-4" />
        <p className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Vynox Inventory. All rights reserved.
        </p>
      </footer>
    </div>
  );
}