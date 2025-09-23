"use client";

import Link from "next/link";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#0a1a4a] flex flex-col text-white">
      {/* HEADER (same as Home) */}
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

      {/* ABOUT CONTENT */}
      <section className="flex-grow px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-8">
            About Vynox Auto Detailing
          </h1>
          <div className="text-gray-200 leading-relaxed text-[15px] space-y-6">
            <p>
              At <span className="text-[#FFCC66] font-semibold">Vynox</span>, we
              believe a car is more than just a way to get from point A to
              point B—it’s a reflection of you. That’s why we’ve dedicated
              ourselves to offering premium detailing services that go far
              beyond surface cleaning. Our team of skilled professionals brings
              years of experience, precision, and passion into every single
              vehicle we work on.
            </p>
            <p>
              From the very beginning, our mission has been simple:{" "}
              <em className="italic">restore the beauty of every vehicle</em> and
              protect it for years to come. Whether it’s the daily commuter
              that’s endured countless coffee runs, the family SUV with
              memories etched in its upholstery, or the luxury car that deserves
              showroom shine—we treat each with the same attention and respect.
            </p>
            <p>
              What sets us apart is our commitment to using{" "}
              <span className="underline decoration-yellow-400">
                eco-friendly, high-quality products
              </span>{" "}
              that are safe for your car and safe for the planet. We’ve invested
              in biodegradable shampoos, non-toxic cleaners, and advanced
              coatings that not only clean but also protect. This ensures that
              every detail is sustainable, responsible, and future-ready.
            </p>
            <p>
              Our detailing packages are designed to suit every lifestyle. From
              deep interior sanitization and leather conditioning to paint
              correction and ceramic coating, we customize each service to match
              your needs. We don’t believe in shortcuts—only results that make
              you fall in love with your car all over again.
            </p>
            <p>
              Beyond services,{" "}
              <strong className="text-[#FFCC66]">
                we value relationships
              </strong>
              . Every customer who walks into Vynox becomes part of our family.
              We thrive on honesty, transparency, and trust. That’s why we
              explain every step of the process, provide fair pricing, and stand
              by the quality of our work.
            </p>
            <p>
              Our vision for the future is bold. As technology evolves, we aim
              to be at the forefront—adapting to electric and hybrid vehicles,
              integrating cutting-edge protective solutions, and continuously
              innovating. For us, detailing isn’t just maintenance; it’s an art,
              a science, and a promise to keep your car at its very best.
            </p>
            <p>
              When you choose Vynox, you’re not just choosing a service—you’re
              choosing peace of mind, unmatched craftsmanship, and a team that
              cares as much about your car as you do. Because at the end of the
              day, it’s not just about how your car looks, but how you{" "}
              <span className="italic">feel</span> when you drive it.
            </p>
          </div>

          {/* IMAGE */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/images/about.jpg"
              alt="Automobile"
              width={650}
              height={400}
              className="rounded-2xl shadow-lg border-2 border-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* FOOTER (same as Home) */}
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
              Contact
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

        <hr className="border-gray-700 my-4" />
        <p className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Vynox Inventory. All rights reserved.
        </p>
      </footer>
    </div>
  );
}