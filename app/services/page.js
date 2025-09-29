"use client";

import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { 
  FaShoppingCart, FaFacebook, FaInstagram, FaLinkedinIn,
  FaCarSide, FaStar, FaCouch, FaSprayCan, FaTint, FaBrush
} from "react-icons/fa";
import { useState } from "react";

export default function ServicesPage() {
  const services = [
    {
      title: "Exterior Wash",
      desc: "Thorough cleaning of your car’s exterior with eco-friendly products.",
      icon: <FaCarSide className="text-3xl text-yellow-400" />,
    },
    {
      title: "Interior Cleaning",
      desc: "Deep cleaning of seats, carpets, and dashboard for a fresh interior.",
      icon: <FaCouch className="text-3xl text-yellow-400" />,
    },
    {
      title: "Polishing & Waxing",
      desc: "Restore the shine and protect your car’s paint with premium waxing.",
      icon: <FaStar className="text-3xl text-yellow-400" />,
    },
    {
      title: "Engine Bay Detailing",
      desc: "Professional cleaning and dressing of your engine compartment.",
      icon: <FaSprayCan className="text-3xl text-yellow-400" />,
    },
    {
      title: "Ceramic Coating",
      desc: "Advanced ceramic protection for long-lasting shine and durability.",
      icon: <FaTint className="text-3xl text-yellow-400" />,
    },
    {
      title: "Paint Correction",
      desc: "Remove scratches, swirls, and restore your paint to perfection.",
      icon: <FaBrush className="text-3xl text-yellow-400" />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a1a4a] flex flex-col text-white">
      {/* HEADER */}
      <header className="flex items-center justify-between shadow-md px-6 py-3 bg-black">
        <div className="flex items-center">
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
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/auth" className="hover:text-[#FFCC66] hover:underline">
            Log in
          </Link>
          <Link href="/inventory" className="hover:text-[#FFCC66] hover:underline">
            Inventory
          </Link>
          <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-5 py-2 text-white font-medium shadow-lg transition-transform duration-300 hover:scale-105">
            <CiCalendar className="text-xl" />
            Book Now
          </button>
        </nav>
      </header>

      {/* SERVICES GRID */}
      <section className="flex-grow px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-10">
            Our Services
          </h1>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#111c4d] p-6 rounded-2xl shadow-lg border border-yellow-500 hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
              >
                <div className="flex flex-col items-center gap-4">
                  {service.icon}
                  <h2 className="text-xl font-semibold text-yellow-300">{service.title}</h2>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </div>

                <Link href="/booking">
                  <button className="mt-6 w-full flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-4 py-2 text-white font-medium shadow-[0_0_10px_rgba(255,204,102,0.6)] transition-transform duration-300 hover:scale-105">
                
                    Book Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FOOTER */}
<footer className="bg-black text-gray-300 px-6 py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left items-start">
    {/* Logo */}
    <div className="flex flex-col items-center lg:items-start">
      <Image
        src="/vynoxlogo.jpg"
        width={110}
        height={110}
        alt="Vynox Logo"
        className="rounded-md"
      />
      <p className="mt-3 text-sm text-gray-400 max-w-xs">
        Premium Auto Detaling Services
      </p>
    </div>

    {/* Quick Links */}
    <nav className="flex flex-col gap-2">
      <h4 className="text-[#FFCC66] font-semibold mb-2">Quick Links</h4>
      <Link href="/" className="hover:text-[#FFCC66] hover:underline">Home</Link>
      <Link href="/about" className="hover:text-[#FFCC66] hover:underline">About</Link>
      <Link href="/services" className="hover:text-[#FFCC66] hover:underline">Services</Link>
      <Link href="/contact" className="hover:text-[#FFCC66] hover:underline">Contact</Link>
      <Link href="/giftcards" className="hover:text-[#FFCC66] hover:underline">Gift Cards</Link>
    </nav>

    {/* Contact Info */}
    <div className="flex flex-col gap-2">
      <h4 className="text-[#FFCC66] font-semibold mb-2">Contact</h4>
      <p className="text-sm">📞 +1-587-438-7822</p>
      <Link href="mailto:mohamadalhajj2002@gmail.com" className="text-sm hover:text-[#FFCC66] hover:underline">
        📧 mohamadalhajj2002@gmail.com
      </Link>
      <Link href="https://maps.app.goo.gl/fPGxCvfNLQTd28wRA" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#FFCC66] hover:underline">
        📍 2806 Ogden Rd SE, Calgary, AB
      </Link>
      <p className="text-sm">🕛 Mon–Fri: 9am–6pm</p>
    </div>

    {/* Social Links */}
    <div className="flex flex-col items-center lg:items-start gap-3">
      <h4 className="text-[#FFCC66] font-semibold">Follow Us</h4>
      <div className="flex gap-5 text-xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC66]">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC66]">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC66]">
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
