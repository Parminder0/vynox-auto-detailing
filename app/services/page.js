"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaShoppingCart, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Exterior Wash",
      price: 40,
      points: ["High-pressure rinse", "Foam shampoo", "Wheel cleaning", "Spot-free rinse", "Quick dry finish"],
    },
    {
      title: "Full Interior Detailing",
      price: 120,
      points: ["Deep vacuuming", "Dashboard cleaning", "Leather treatment", "Carpet shampoo", "Odor removal"],
    },
    {
      title: "Exterior Wax & Polish",
      price: 90,
      points: ["Hand waxing", "Paint polishing", "Scratch removal", "Glossy shine", "Paint protection"],
    },
    {
      title: "Engine Bay Cleaning",
      price: 60,
      points: ["Degreasing treatment", "Steam cleaning", "Plastic restoration", "Rust protection", "Dry finish"],
    },
    {
      title: "Headlight Restoration",
      price: 50,
      points: ["Oxidation removal", "UV coating", "Scratch buffing", "Improves brightness", "Restores clarity"],
    },
    {
      title: "Ceramic Coating",
      price: 400,
      points: ["Premium coating", "Long-lasting shine", "UV protection", "Scratch resistance", "Water beading effect"],
    },
    {
      title: "Pet Hair Removal",
      price: 40,
      points: ["Deep vacuum", "Hair extraction tools", "Seat cleaning", "Odor control", "Fresh finish"],
    },
  ];

  const [selected, setSelected] = useState([]);

  const toggleService = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const total = selected.reduce((sum, i) => sum + services[i].price, 0);

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
              title="logo&homepage"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/auth" className="hover:text-[#FFCC66]">Log in</Link>
          <Link href="/inventory" className="hover:text-[#FFCC66]">Inventory</Link>
          <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-5 py-2 text-white font-medium">
            <CiCalendar className="text-xl" />
            Book Now
          </button>
        </nav>
      </header>

      {/* SERVICES */}
      <main className="flex-grow px-6 py-12">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => {
            const isAmber = i % 2 !== 0;
            const isSelected = selected.includes(i);

            return (
              <div
                key={i}
                className={`p-6 rounded-lg text-center shadow-md transition ${
                  isAmber ? "bg-[#FFCC66] text-black" : "bg-black text-white"
                } ${isSelected ? "ring-2 ring-yellow-400" : ""}`}
              >
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    isAmber ? "text-[#0a1a4a]" : "text-yellow-400"
                  }`}
                >
                  {s.title}
                </h3>

                <p className="my-2 text-lg font-semibold">${s.price}</p>

                <ul
                  className={`text-sm list-disc text-left space-y-1 pl-5 ${
                    isAmber ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  {s.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>

                <button
                  onClick={() => toggleService(i)}
                  className={`mt-6 w-full py-2 rounded-full text-sm font-medium transition ${
                    isSelected
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : isAmber
                      ? "bg-gradient-to-r from-gray-500 to-gray-700 text-white hover:opacity-90"
                      : "bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] text-white hover:opacity-90"
                  }`}
                >
                  {isSelected ? "Remove" : "Book Now"}
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* TOTAL & NEXT */}
      <div className="flex justify-between items-center px-6 py-3 bg-black text-white border-t border-gray-700">
        <p className="text-lg flex items-center gap-2">
          <FaShoppingCart className="text-yellow-400" />{" "}
          <span>
            Total: <span className="text-yellow-400">${total}</span>
          </span>
        </p>
        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-5 py-2 text-white font-medium hover:opacity-90">
          Next →
        </button>
      </div>

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