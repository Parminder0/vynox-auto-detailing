"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
// adjust the path if your firebase file is in a different place
import { auth } from "@/firebase/firebase"; // <-- if this errors, try "../../firebase/firebase"
import { FiMenu, FiX, FiSearch, FiBell } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { FaCarSide, FaHeart, FaBookmark } from "react-icons/fa";

export default function Dashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<
    "overview" | "bookings" | "manage" | "track" | "vehicles" | "bookmarks" | "settings"
  >("overview");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      router.push("/auth");
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-800">
      {/* ---------- Mobile Topbar (shows on small screens) ---------- */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b">
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-md text-[#0b2a4a] bg-white"
        >
          <FiMenu className="text-2xl" />
        </button>

        <div className="flex items-center gap-3">
          <button aria-label="Search" className="p-2 rounded-md">
            <FiSearch />
          </button>
          <button aria-label="Notifications" className="p-2 rounded-md">
            <FiBell />
          </button>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#FFCC66]">
            <Image src="/profile-placeholder.png" width={36} height={36} alt="profile" />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* ---------- Sidebar / Drawer ---------- */}
        {/* overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <aside
          className={`fixed z-40 left-0 top-0 bottom-0 w-72 bg-[#0b2746] text-white p-6 transform transition-transform duration-300
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:h-screen`}
        >
          <div className="flex items-center justify-between md:block">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFCC66]">
                <Image src="/profile-placeholder.png" width={56} height={56} alt="profile" />
              </div>
              <div>
                <div className="font-semibold text-lg">Emily Johnson</div>
                <Link href="/dashboard/settings" className="text-xs text-slate-300 hover:text-[#FFCC66]">
                  Edit Profile
                </Link>
              </div>
            </div>

            {/* close (mobile) */}
            <button
              className="ml-auto md:hidden p-2 rounded-md"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Menu */}
          <nav className="mt-8 flex flex-col gap-3">
            <button
              onClick={() => {
                setTab("overview");
                setMobileOpen(false);
              }}
              className={`flex items-center gap-3 text-left px-3 py-3 rounded-lg transition ${
                tab === "overview" ? "bg-[#07203a]/80 font-semibold text-[#FFCC66]" : "hover:bg-white/5"
              }`}
            >
              <CiCalendar className="text-lg" /> Dashboard
            </button>

            <button
              onClick={() => {
                setTab("bookings");
                setMobileOpen(false);
              }}
              className={`flex items-center gap-3 text-left px-3 py-3 rounded-lg transition ${
                tab === "bookings" ? "bg-[#07203a]/80 font-semibold text-[#FFCC66]" : "hover:bg-white/5"
              }`}
            >
              <FaBookmark className="text-lg" /> Past Bookings
            </button>

            <button
              onClick={() => {
                setTab("manage");
                setMobileOpen(false);
              }}
              className={`flex items-center gap-3 text-left px-3 py-3 rounded-lg transition ${
                tab === "manage" ? "bg-[#07203a]/80 font-semibold text-[#FFCC66]" : "hover:bg-white/5"
              }`}
            >
              ✏️ Reschedule / Cancel
            </button>

            <button
              onClick={() => {
                setTab("track");
                setMobileOpen(false);
              }}
              className={`flex items-center gap-3 text-left px-3 py-3 rounded-lg transition ${
                tab === "track" ? "bg-[#07203a]/80 font-semibold text-[#FFCC66]" : "hover:bg-white/5"
              }`}
            >
              🚗 Track Service Status
            </button>

            <button
              onClick={() => {
                setTab("vehicles");
                setMobileOpen(false);
              }}
              className={`flex items-center gap-3 text-left px-3 py-3 rounded-lg transition ${
                tab === "vehicles" ? "bg-[#07203a]/80 font-semibold text-[#FFCC66]" : "hover:bg-white/5"
              }`}
            >
              <FaCarSide className="text-lg" /> Vehicle Details
            </button>

            <button
              onClick={() => {
                setTab("bookmarks");
                setMobileOpen(false);
              }}
              className={`flex items-center gap-3 text-left px-3 py-3 rounded-lg transition ${
                tab === "bookmarks" ? "bg-[#07203a]/80 font-semibold text-[#FFCC66]" : "hover:bg-white/5"
              }`}
            >
              <FaHeart className="text-lg" /> Bookmarked Services
            </button>

            <button
              onClick={() => {
                setTab("settings");
                setMobileOpen(false);
              }}
              className={`flex items-center gap-3 text-left px-3 py-3 rounded-lg transition ${
                tab === "settings" ? "bg-[#07203a]/80 font-semibold text-[#FFCC66]" : "hover:bg-white/5"
              }`}
            >
              ⚙️ Account Settings
            </button>
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full justify-start px-3 py-3 rounded-lg bg-black/20 hover:bg-red-600 transition"
            >
              🔒 Logout
            </button>
          </div>
        </aside>

        {/* ---------- Main area ---------- */}
        <main className="flex-1 min-h-screen md:pl-72">
          <div className="max-w-7xl mx-auto p-6 md:p-10">
            {/* Header */}
            <div className="flex items-start justify-between gap-6 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                  Hi, Emily Johnson <span className="inline-block">👋</span>
                </h1>
                <p className="text-sm text-slate-500 mt-1">Welcome back — here’s what’s happening with your services.</p>
              </div>

              <div className="flex items-center gap-4">
                <button className="p-2 rounded-md bg-white shadow-sm hover:shadow-md">
                  <FiSearch />
                </button>
                <button className="p-2 rounded-md bg-white shadow-sm hover:shadow-md relative">
                  <FiBell />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                </button>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFCC66]">
                  <Image src="/profile-placeholder.png" width={48} height={48} alt="profile" />
                </div>
              </div>
            </div>

            {/* Cards row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Upcoming Booking */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Upcoming Booking</h3>
                <p className="text-sm text-slate-500">Sep 25, 2025</p>
                <p className="font-medium mt-3">Full Car Detailing</p>
                <p className="mt-3 text-sm text-emerald-600 font-semibold">Confirmed</p>
              </div>

              {/* Saved Vehicles */}
              <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Saved Vehicles</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded-md bg-slate-100 flex items-center justify-center">
                      <FaCarSide />
                    </div>
                    <div>
                      <div className="font-medium">Honda Civic</div>
                      <div className="text-xs text-slate-500">PB12AB3456</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="px-3 py-2 rounded-md border border-slate-200 text-sm">Manage</button>
                </div>
              </div>

              {/* Favorite Services */}
              <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Favorite Services</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center text-2xl">
                      <FaHeart className="text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium">Ceramic Coating</div>
                      <div className="text-xs text-slate-500">$500</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="px-3 py-2 rounded-md border border-slate-200 text-sm">View</button>
                </div>
              </div>
            </div>

            {/* Quick Book CTA */}
            <div className="mb-8">
              <button
                className="w-full md:w-1/2 lg:w-1/3 text-white font-semibold py-4 rounded-2xl bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F]
                  shadow-[0_8px_30px_rgba(255,124,69,0.18)] hover:scale-[1.01] transition-transform"
                onClick={() => setTab("manage")}
              >
                <span className="flex items-center justify-center gap-3">
                  <CiCalendar className="text-2xl" />
                  Quick Book
                </span>
              </button>
            </div>

            {/* Recent Activity + Right area (responsive stacked) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

                <div className="relative pl-8">
                  {/* vertical line */}
                  <div className="absolute left-4 top-6 bottom-6 w-px bg-slate-200" />
                  <ul className="space-y-6">
                    <li className="relative">
                      <div className="absolute -left-6 top-0 w-3 h-3 rounded-full bg-[#0b2a4a] ring-4 ring-white" />
                      <div className="font-semibold">Booked Full Car Detailing</div>
                      <div className="text-xs text-slate-500">Today</div>
                    </li>

                    <li className="relative">
                      <div className="absolute -left-6 top-0 w-3 h-3 rounded-full bg-slate-400 ring-4 ring-white" />
                      <div className="font-semibold">Rescheduled Car Wash</div>
                      <div className="text-xs text-slate-500">Sep 15, 2025</div>
                    </li>

                    <li className="relative">
                      <div className="absolute -left-6 top-0 w-3 h-3 rounded-full bg-slate-400 ring-4 ring-white" />
                      <div className="font-semibold">Completed Interior Detailing</div>
                      <div className="text-xs text-slate-500">Aug 30, 2025</div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Shortcuts / Bookmarks */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Shortcuts</h3>
                <div className="flex flex-col gap-4">
                  <Link href="/services/full-detailing" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                    <div className="w-12 h-12 rounded-md bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] flex items-center justify-center text-white">FD</div>
                    <div>
                      <div className="font-medium">Full Car Detailing</div>
                      <div className="text-xs text-slate-500">$120</div>
                    </div>
                    <div className="ml-auto text-sm text-slate-400">Book</div>
                  </Link>

                  <Link href="/vehicles" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                    <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center"><FaCarSide /></div>
                    <div>
                      <div className="font-medium">My Vehicles</div>
                      <div className="text-xs text-slate-500">Manage saved cars</div>
                    </div>
                    <div className="ml-auto text-sm text-slate-400">Manage</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* mobile bottom spacing */}
            <div className="h-12 md:hidden" />
          </div>
        </main>
      </div>
    </div>
  );
}
