"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useState } from "react";
import {
  FaCalendarAlt, FaRedoAlt, FaCar, FaHeart, FaCog,
  FaSignOutAlt, FaTachometerAlt, FaMapMarkerAlt, FaBars, FaTimes
} from "react-icons/fa";

export default function Dashboard() {
  const router = useRouter();
  const [tab, setTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    alert("You have been logged out!");
    await signOut(auth);
    router.push("/auth");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-50 h-screen w-72 bg-[#0B1E3F] text-white flex flex-col p-6 transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Close Button (Mobile only) */}
        <button
          className="md:hidden text-white absolute top-4 right-4"
          onClick={() => setSidebarOpen(false)}
        >
          <FaTimes size={22} />
        </button>

        {/* Profile */}
        <div className="flex flex-col items-center mb-10 mt-10 md:mt-0">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-20 h-20 rounded-full mb-3"
          />
          <h2 className="font-semibold text-lg">Emily Johnson</h2>
          <button className="text-sm text-gray-300 mt-1 hover:underline">
            Edit Profile
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-5">
          <button onClick={() => { setTab("dashboard"); setSidebarOpen(false); }} className="flex items-center gap-3 hover:text-[#FFCC66]">
            <FaTachometerAlt /> Dashboard
          </button>
          <button onClick={() => { setTab("bookings"); setSidebarOpen(false); }} className="flex items-center gap-3 hover:text-[#FFCC66]">
            <FaCalendarAlt /> Past Bookings
          </button>
          <button onClick={() => { setTab("reschedule"); setSidebarOpen(false); }} className="flex items-center gap-3 hover:text-[#FFCC66]">
            <FaRedoAlt /> Reschedule / Cancel
          </button>
          <button onClick={() => { setTab("track"); setSidebarOpen(false); }} className="flex items-center gap-3 hover:text-[#FFCC66]">
            <FaMapMarkerAlt /> Track Service Status
          </button>
          <button onClick={() => { setTab("vehicles"); setSidebarOpen(false); }} className="flex items-center gap-3 hover:text-[#FFCC66]">
            <FaCar /> Vehicle Details
          </button>
          <button onClick={() => { setTab("favorites"); setSidebarOpen(false); }} className="flex items-center gap-3 hover:text-[#FFCC66]">
            <FaHeart /> Bookmarked Services
          </button>
          <button onClick={() => { setTab("settings"); setSidebarOpen(false); }} className="flex items-center gap-3 hover:text-[#FFCC66]">
            <FaCog /> Account Settings
          </button>
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 mt-8 text-red-400 hover:text-red-500"
        >
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-72 w-full">
        {/* Top Bar (Mobile Only) */}
        <div className="flex items-center justify-between md:hidden mb-6">
          <h1 className="text-xl font-bold">Hi, Emily 👋</h1>
          <button onClick={() => setSidebarOpen(true)}>
            <FaBars size={22} />
          </button>
        </div>

        {/* Desktop Greeting */}
        {tab === "dashboard" && (
          <>
            <h1 className="hidden md:block text-2xl font-bold mb-6">Hi, Emily Johnson 👋</h1>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="font-semibold mb-2">Upcoming Booking</h3>
                <p className="text-sm text-gray-500">Sep 25, 2024</p>
                <p className="text-sm">Full Car Detailing</p>
                <p className="text-green-600 font-semibold">Confirmed</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
                <h3 className="font-semibold mb-2">Saved Vehicles</h3>
                <button className="border px-3 py-1 rounded-lg text-sm mt-auto hover:bg-gray-100">Manage</button>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
                <h3 className="font-semibold mb-2">Favorite Services</h3>
                <button className="border px-3 py-1 rounded-lg text-sm mt-auto hover:bg-gray-100">View</button>
              </div>
            </div>

            {/* Quick Book */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-8">
              Quick Book
            </button>

            {/* Recent Activity */}
            <section>
              <h2 className="font-semibold text-lg mb-4">Recent Activity</h2>
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <div>
                      <p className="font-semibold">Today</p>
                      <p>Booked Full Car Detailing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <div>
                      <p className="text-gray-500 text-sm">Sep 15, 2024</p>
                      <p>Rescheduled Car Wash</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <div>
                      <p className="text-gray-500 text-sm">Aug 30, 2024</p>
                      <p>Completed Interior Detailing</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Other Tabs (placeholders) */}
        {tab === "bookings" && <div>📅 Past bookings screen</div>}
        {tab === "reschedule" && <div>🔄 Reschedule / cancel screen</div>}
        {tab === "track" && <div>📍 Track service status screen</div>}
        {tab === "vehicles" && <div>🚙 Vehicle details screen</div>}
        {tab === "favorites" && <div>❤️ Bookmarked services screen</div>}
        {tab === "settings" && <div>⚙️ Account settings screen</div>}
      </main>
    </div>
  );
}
