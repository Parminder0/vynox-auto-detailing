"use client";

import React, { useState, useMemo } from "react";
// We replace external icon libraries with simple inline SVGs and emojis
// to ensure the single-file component compiles successfully.

// --- Replacement Icons (Inline SVGs) ---
const IconMenu = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const IconX = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const IconSearch = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const IconBell = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const IconSettings = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V15z"></path></svg>;
const IconCarSide = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path fill="currentColor" d="M168 288A112 112 0 1 0 56 176a112 112 0 0 0 112 112zm384 144H208L144 320H48A48 48 0 0 0 0 368v64a48 48 0 0 0 48 48h220l58.6 32h183.4c21.2 0 38-16.7 38-38s-16.8-38-38-38zm-112-96h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24c13.3 0 24 10.7 24 24s-10.7 24-24 24zM544 64H384c-13.3 0-24 10.7-24 24v24c0 13.3 10.7 24 24 24h160c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM240 64h-16c-13.3 0-24 10.7-24 24v24c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24z"/></svg>;
const IconHeart = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const IconCalendar = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const IconLogin = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>;
const IconTachometer = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14v4M12 12a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><circle cx="12" cy="12" r="10" stroke="none" fill="none" strokeOpacity="0.1"/><path d="M12 14v4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const IconRedo = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"></path><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>;
const IconMapMarker = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;

// Mock/Placeholder components and data (Replacing Next.js and Firebase)
const NextImage = ({ src, alt, width, height, className = "" }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover rounded-full ${className}`}
        style={{ width: width, height: height }}
    />
);

// Mock Auth and Router for standalone environment
const mockAuth = {};
const mockRouter = { push: (path) => console.log(`Navigating to ${path}`) };


// Mock Data (based on the Figma design)
const MOCK_USER = {
  name: "Emily Johnson",
  email: "emily@example.com",
  profileImg: "https://placehold.co/100x100/0B1E3F/FFCC66?text=EJ",
  upcomingBooking: {
    date: "Sep 25, 2024",
    service: "Full Car Detailing",
    status: "Confirmed",
  },
  savedVehicles: {
    make: "Tesla Model 3",
    license: "PB12AB3456",
  },
  favoriteService: {
    name: "Ceramic Coating",
  },
  recentActivity: [
    { type: "Booked Full Car Detailing", date: "Today", isLatest: true },
    { type: "Rescheduled Car Wash", date: "Sep 15, 2024", isLatest: false },
    { type: "Completed Interior Detailing", date: "Aug 30, 2024", isLatest: false },
  ],
};


// Component to render content for the selected tab
const DashboardContent = ({ tab }: { tab: string }) => {
  // --- Dashboard Overview Tab (Matching the Figma design) ---
  if (tab === 'dashboard') {
    return (
      <>
        {/* Cards Row (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 1. Upcoming Booking Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#FFCC66]">
            <h3 className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">Upcoming Booking</h3>
            <p className="text-xl font-bold text-[#0B1E3F] mb-1">{MOCK_USER.upcomingBooking.service}</p>
            <p className="text-sm text-slate-500">{MOCK_USER.upcomingBooking.date}</p>
            <p className="mt-2 text-md font-bold text-emerald-600">
              {MOCK_USER.upcomingBooking.status}
            </p>
          </div>

          {/* 2. Saved Vehicles Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Saved Vehicles</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B1E3F] flex items-center justify-center text-white text-xl">
                  <IconCarSide className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <div className="font-semibold text-md text-[#0B1E3F]">{MOCK_USER.savedVehicles.make}</div>
                  <div className="text-xs text-slate-500">{MOCK_USER.savedVehicles.license}</div>
                </div>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 rounded-full border border-slate-300 text-sm font-medium text-[#0B1E3F] hover:bg-slate-50 transition self-start">
              Manage
            </button>
          </div>

          {/* 3. Favorite Services Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">Favorite Services</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xl">
                  <IconHeart className="w-5 h-5 fill-red-500 stroke-red-500" />
                </div>
                <div className="font-semibold text-md text-[#0B1E3F]">{MOCK_USER.favoriteService.name}</div>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 rounded-full border border-slate-300 text-sm font-medium text-[#0B1E3F] hover:bg-slate-50 transition self-start">
              View
            </button>
          </div>
        </div>

        {/* Quick Book CTA (Orange Button) */}
        <div className="mb-8">
          <button
            onClick={() => console.log("Quick Book clicked")}
            className="w-full md:w-1/2 lg:w-1/3 text-white font-bold text-lg py-4 rounded-xl bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F]
              shadow-xl shadow-orange-300/50 hover:opacity-90 transition-opacity duration-300"
          >
            <span className="flex items-center justify-center gap-3">
              <IconCalendar className="w-6 h-6 fill-white stroke-white" />
              Quick Book
            </span>
          </button>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6 text-[#0B1E3F]">Recent Activity</h3>

          {/* Timeline Style */}
          <div className="relative pl-6">
            {/* vertical line */}
            <div className="absolute left-[13px] top-0 bottom-0 w-px bg-slate-200" />
            <ul className="space-y-6">
              {MOCK_USER.recentActivity.map((activity, index) => (
                <li key={index} className="relative pl-6">
                  {/* circle marker */}
                  <div className={`absolute -left-[5px] top-1 w-3 h-3 rounded-full ${activity.isLatest ? 'bg-[#FFCC66]' : 'bg-slate-400'} ring-4 ring-white`} />
                  <div className="font-semibold text-slate-800">{activity.type}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{activity.date}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }

  // --- Placeholder Content for Other Flow Tabs ---
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-[#0B1E3F] capitalize">
        {tab.replace('-', ' ').replace('account', '').trim()}
      </h2>
      <p className="mt-3 text-lg text-slate-600">
        You are currently viewing the **{tab.split(' ')[0]}** section.
      </p>
      <div className="mt-6 p-6 border-2 border-dashed border-slate-300 rounded-lg text-center text-slate-500">
        <p className="mb-2">Implementing all features from the flow diagram here:</p>
        <ul className="list-disc list-inside text-left inline-block mt-4 space-y-1 text-sm">
            {tab === "bookings" && <li>View detailed service history, PDF reports, and provide feedback on past bookings.</li>}
            {tab === "reschedule" && <li>Implement the cancellation policy, reschedule options, and real-time availability.</li>}
            {tab === "track" && <li>Display the interactive map and service history tracking for active services.</li>}
            {tab === "vehicles" && <li>Allow users to manage vehicle details (VIN, make, model) and set up maintenance reminders.</li>}
            {tab === "favorites" && <li>Manage your bookmarked services and preferred service providers.</li>}
            {tab === "settings" && <li>Customize account settings, notifications, and privacy preferences.</li>}
        </ul>
        <p className="mt-4 text-[#FFCC66] font-semibold">Ready to build out this section!</p>
      </div>
    </div>
  );
};


export default function Dashboard() {
  const router = mockRouter;
  // Initialize state with 'dashboard' to match the flow diagram's starting point
  const [tab, setTab] = useState(
    "dashboard"
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Replaced alert with console log and mock function
  const handleLogout = async () => {
    console.log("Logged out successfully");
    // In a real app: await signOut(auth); router.push("/auth");
  };

  const menuItems = useMemo(() => [
    { id: "dashboard", label: "Dashboard", icon: <IconTachometer className="w-5 h-5" /> },
    { id: "bookings", label: "Past Bookings", icon: <IconCalendar className="w-5 h-5" /> },
    { id: "reschedule", label: "Reschedule / Cancel", icon: <IconRedo className="w-5 h-5" /> },
    { id: "track", label: "Track Service Status", icon: <IconMapMarker className="w-5 h-5" /> },
    { id: "vehicles", label: "Vehicle Details", icon: <IconCarSide className="w-5 h-5" /> },
    { id: "favorites", label: "Bookmarked Services", icon: <IconHeart className="w-5 h-5" /> },
    { id: "settings", label: "Account Settings", icon: <IconSettings className="w-5 h-5" /> },
  ], []);

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-800 font-inter">
      {/* Global Style for Inter font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Main Container */}
      <div className="flex">
        {/* Sidebar / Drawer */}
        <aside
          className={`fixed z-40 left-0 top-0 bottom-0 w-64 bg-[#0B1E3F] text-white p-6 transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:sticky md:h-screen md:min-h-screen flex flex-col shadow-2xl md:shadow-none`}
        >
          {/* Close Button (Mobile only) */}
          <button
            className="md:hidden text-white absolute top-4 right-4 p-2 rounded-md hover:bg-white/10"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <IconX className="w-6 h-6" />
          </button>

          {/* Profile Section (Matches Figma) */}
          <div className="flex flex-col items-center justify-start mb-10 mt-2">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#FFCC66] shadow-lg">
              <NextImage src={MOCK_USER.profileImg} width={80} height={80} alt="profile" className="w-full h-full" />
            </div>
            <div className="text-center mt-3">
              <div className="font-semibold text-lg">{MOCK_USER.name}</div>
              <button
                onClick={() => setTab("settings")}
                className="text-xs text-slate-300 hover:text-[#FFCC66] transition hover:underline"
              >
                Edit Profile
              </button>
            </div>
          </div>


          {/* Navigation Menu */}
          <nav className="flex flex-col gap-1 flex-grow">
            {menuItems.map((item) => (
                <button
                key={item.id}
                onClick={() => {
                    setTab(item.id);
                    setSidebarOpen(false); // Close sidebar on selection for mobile
                }}
                className={`flex items-center gap-3 text-left w-full px-4 py-3 rounded-xl transition font-medium text-sm
                    ${
                    tab === item.id
                        ? "bg-[#07172F] font-bold text-[#FFCC66] shadow-inner" // Active state
                        : "hover:bg-white/10 text-slate-200"
                    }`}
                >
                {React.cloneElement(item.icon, { className: 'w-5 h-5' })} {item.label}
                </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full justify-start px-4 py-3 rounded-xl text-sm font-semibold bg-red-800/20 text-red-300 hover:bg-red-800/40 transition"
            >
              <IconLogin className="w-5 h-5" /> Logout
            </button>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}


        {/* Main Content Area */}
        <main className="flex-1 w-full overflow-y-auto">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-10">

            {/* Top Bar for Desktop and Mobile Greeting/Actions */}
            <div className="flex items-center justify-between mb-8">
              {/* Mobile Menu Button (Only shows on small screens) */}
              <button
                className="md:hidden p-2 rounded-lg text-[#0B1E3F] hover:bg-slate-200"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
              >
                <IconMenu className="w-6 h-6" />
              </button>

              {/* Greeting */}
              <h1 className={`text-2xl md:text-3xl font-extrabold text-[#0B1E3F] ${sidebarOpen ? 'hidden' : ''} md:block`}>
                Hi, {MOCK_USER.name} <span className="inline-block">👋</span>
              </h1>

              {/* Desktop Icons (Search, Bell, Profile) */}
              <div className="flex items-center gap-4 ml-auto">
                <button aria-label="Search" className="p-2 rounded-full text-slate-600 hover:bg-slate-200 transition">
                  <IconSearch className="w-5 h-5" />
                </button>
                <button aria-label="Notifications" className="p-2 rounded-full text-slate-600 hover:bg-slate-200 transition relative">
                  <IconBell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
                </button>
                {/* Profile Icon Placeholder (for consistency with Figma top right) */}
                <div className="w-10 h-10 rounded-full bg-[#0B1E3F] flex items-center justify-center text-white text-sm font-semibold md:hidden">
                    EJ
                </div>
              </div>
            </div>

            {/* Content Switcher */}
            <DashboardContent tab={tab} />
          </div>
        </main>
      </div>
    </div>
  );
}
