"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaCarSide,
  FaStar,
  FaCouch,
  FaSprayCan,
  FaTint,
  FaBrush,
  FaBroom,
} from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function ServiceCard({ title, desc, price, icon }) {
  return (
    <div className="bg-[#111c4d] p-6 rounded-2xl shadow-lg border border-yellow-500 hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
      <div className="flex flex-col items-center gap-4">
        {icon}
        <h2 className="text-xl font-semibold text-yellow-300">{title}</h2>
        <p className="text-gray-300 text-sm text-center">{desc}</p>
        <p className="text-lg font-bold text-yellow-400">{price}</p>
      </div>

      <Link
        href="/booking"
        className="mt-6 block w-full text-center rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-4 py-2 text-white font-medium shadow-[0_0_10px_rgba(255,204,102,0.6)] transition-transform duration-300 hover:scale-105"
      >
        Book Now
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const interiorServices = [
    {
      title: "Interior Cleaning",
      desc: "Deep cleaning of seats, carpets, and dashboard.",
      price: "$120",
      icon: <FaCouch className="text-3xl text-yellow-400" />,
    },
    {
      title: "Leather Conditioning",
      desc: "Premium leather cleaning and conditioning.",
      price: "$90",
      icon: <FaStar className="text-3xl text-yellow-400" />,
    },
    {
      title: "Odor Removal",
      desc: "Eliminating unpleasant odors with ozone treatment.",
      price: "$70",
      icon: <FaSprayCan className="text-3xl text-yellow-400" />,
    },
  ];

  const exteriorServices = [
    {
      title: "Exterior Wash",
      desc: "Eco-friendly shampoo and wax finish.",
      price: "$80",
      icon: <FaCarSide className="text-3xl text-yellow-400" />,
    },
    {
      title: "Polishing & Waxing",
      desc: "Restore shine and protect your paint.",
      price: "$150",
      icon: <FaBrush className="text-3xl text-yellow-400" />,
    },
    {
      title: "Engine Bay Detailing",
      desc: "Professional cleaning of your engine bay.",
      price: "$110",
      icon: <FaSprayCan className="text-3xl text-yellow-400" />,
    },
  ];

  const premiumServices = [
    {
      title: "Ceramic Coating",
      desc: "Advanced ceramic protection for long-lasting shine.",
      price: "$500",
      icon: <FaTint className="text-3xl text-yellow-400" />,
    },
    {
      title: "Paint Correction",
      desc: "Remove scratches, swirls & restore paint.",
      price: "$400",
      icon: <FaBrush className="text-3xl text-yellow-400" />,
    },
    {
      title: "Full Premium Package",
      desc: "Complete detailing inside & out with protection.",
      price: "$750",
      icon: <FaStar className="text-3xl text-yellow-400" />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a1a4a] flex flex-col text-white">
      {/* HEADER */}
      <header className="flex items-center justify-between shadow-md px-6 py-3 bg-black relative">
        <div className="flex items-center gap-3">
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
          <span className="font-bold text-yellow-400 text-xl">Vynox</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/auth" className="hover:text-[#FFCC66] hover:underline">
            Log in
          </Link>
          <Link
            href="/inventory"
            className="hover:text-[#FFCC66] hover:underline"
          >
            Inventory
          </Link>
          <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-5 py-2 text-white font-medium shadow-lg transition-transform duration-300 hover:scale-105">
            <CiCalendar className="text-xl" />
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 py-4 z-50 md:hidden shadow-lg">
            <Link
              href="/auth"
              className="hover:text-[#FFCC66] hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/inventory"
              className="hover:text-[#FFCC66] hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inventory
            </Link>
            <button
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-5 py-2 text-white font-medium shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CiCalendar className="text-xl" />
              Book Now
            </button>
          </div>
        )}
      </header>

      {/* SERVICES */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-12">
          Our Services
        </h1>

        {/* Interior */}
        <h2 className="text-2xl font-bold text-yellow-300 mb-6">Interior</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {interiorServices.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        {/* Exterior */}
        <h2 className="text-2xl font-bold text-yellow-300 mb-6">Exterior</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {exteriorServices.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        {/* Premium */}
        <h2 className="text-2xl font-bold text-yellow-300 mb-6">Premium</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {premiumServices.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>

      {/* GALLERY / PAST WORK */}
      <section className="bg-[#071133] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">
            Gallery of Past Work
          </h2>

          {/* Photos */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0a194d] p-4 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <Image
                  src="/images/before detailing-1.jpg"
                  alt="Before Detailing"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/after detailing-1.jpg"
                  alt="After Detailing"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                Exterior Car Detailing
              </h3>
              <p className="text-gray-300 mb-1">
                Before: Car paint was dull and had scratches.
              </p>
              <p className="text-gray-300">
                After: Scratches removed, paint polished. Worker used new wax
                for protection.
              </p>
            </div>

            <div className="bg-[#0a194d] p-4 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <Image
                  src="/images/before detailing-2.jpg"
                  alt="Before Engine Cleaning"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/images/after detailing-2.jpg"
                  alt="After Engine Cleaning"
                  width={250}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                Engine Cleaning
              </h3>
              <p className="text-gray-300 mb-1">
                Before: Engine covered in grease and dirt.
              </p>
              <p className="text-gray-300">
                After: Engine cleaned thoroughly. New filters installed.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-black text-[#FFCC66] p-6 rounded-lg">
              <p>
                “Amazing service! My car looks brand new inside and out.”
              </p>
              <span className="block mt-2">- Sarah</span>
            </div>
            <div className="bg-black text-[#FFCC66] p-6 rounded-lg">
              <p>“Highly recommend! Great value for the price.”</p>
              <span className="block mt-2">- Aisha</span>
            </div>
          </div>

          {/* Video */}
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center overflow-hidden">
            <video className="w-full h-full object-cover" controls>
              <source src="/videos/autodetailing.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left items-start">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/vynoxlogo.jpg"
              width={110}
              height={110}
              alt="Vynox Logo"
              className="rounded-md"
            />
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Premium Auto Detailing Services
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <h4 className="text-[#FFCC66] font-semibold mb-2">Quick Links</h4>
            <Link href="/" className="hover:text-[#FFCC66] hover:underline">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#FFCC66] hover:underline"
            >
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
              Contact
            </Link>
            <Link
              href="/giftcards"
              className="hover:text-[#FFCC66] hover:underline"
            >
              Gift Cards
            </Link>
          </nav>

          <div className="flex flex-col gap-2">
            <h4 className="text-[#FFCC66] font-semibold mb-2">Contact</h4>
            <p className="text-sm">📞 +1-587-438-7822</p>
            <Link
              href="mailto:mohamadalhajj2002@gmail.com"
              className="text-sm hover:text-[#FFCC66] hover:underline"
            >
              📧 mohamadalhajj2002@gmail.com
            </Link>
            <Link
              href="https://maps.app.goo.gl/fPGxCvfNLQTd28wRA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-[#FFCC66] hover:underline"
            >
              📍 2806 Ogden Rd SE, Calgary, AB
            </Link>
            <p className="text-sm">🕛 Mon–Fri: 9am–6pm</p>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3">
            <h4 className="text-[#FFCC66] font-semibold">Follow Us</h4>
            <div className="flex gap-5 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFCC66]"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFCC66]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFCC66]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />
        <p className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Vynox Inventory. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
