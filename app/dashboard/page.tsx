"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useState } from "react";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();
  const [tab, setTab] = useState("bookings");

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/auth");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-72 bg-[#111c4d] text-white p-6 flex flex-col md:min-h-screen">
        {/* Profile */}
        <div className="flex items-center gap-4 mb-10">
          <Image
            src="/profile-placeholder.png"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full border-2 border-[#FFCC66]"
          />
          <div>
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-sm text-gray-300">Customer</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setTab("bookings")}
            className={`text-left px-3 py-2 rounded-lg transition ${
              tab === "bookings" ? "bg-[#FFCC66] text-black font-semibold" : "hover:text-[#FFCC66]"
            }`}
          >
            📅 View Past Bookings
          </button>
          <button
            onClick={() => setTab("manage")}
            className={`text-left px-3 py-2 rounded-lg transition ${
              tab === "manage" ? "bg-[#FFCC66] text-black font-semibold" : "hover:text-[#FFCC66]"
            }`}
          >
            ✏️ Reschedule / Cancel
          </button>
          <button
            onClick={() => setTab("track")}
            className={`text-left px-3 py-2 rounded-lg transition ${
              tab === "track" ? "bg-[#FFCC66] text-black font-semibold" : "hover:text-[#FFCC66]"
            }`}
          >
            🚗 Track Service Status
          </button>
          <button
            onClick={() => setTab("vehicles")}
            className={`text-left px-3 py-2 rounded-lg transition ${
              tab === "vehicles" ? "bg-[#FFCC66] text-black font-semibold" : "hover:text-[#FFCC66]"
            }`}
          >
            🚙 Vehicle Details
          </button>
        </nav>

        {/* Logout */}
        <div className="mt-auto pt-6 border-t border-gray-600">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">Welcome back, John 👋</h1>

        {/* Dashboard Tabs */}
        {tab === "bookings" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="font-semibold mb-2">Booking #123</h2>
              <p className="text-sm text-gray-600">Car Wash - Completed</p>
              <p className="text-xs text-gray-400 mt-2">Date: 20 Sep 2025</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="font-semibold mb-2">Booking #124</h2>
              <p className="text-sm text-gray-600">Interior Cleaning - Pending</p>
              <p className="text-xs text-gray-400 mt-2">Date: 28 Sep 2025</p>
            </div>
          </div>
        )}

        {tab === "manage" && (
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="font-semibold text-lg mb-4">Manage Bookings</h2>
            <p className="text-gray-600">Here you can reschedule or cancel your active bookings.</p>
          </div>
        )}

        {tab === "track" && (
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="font-semibold text-lg mb-4">Track Service</h2>
            <p className="text-gray-600">Live updates of your ongoing service will appear here.</p>
          </div>
        )}

        {tab === "vehicles" && (
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="font-semibold text-lg mb-4">Saved Vehicles</h2>
            <p className="text-gray-600">Manage your car details for quick future bookings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
