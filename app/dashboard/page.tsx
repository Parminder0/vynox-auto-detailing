"use client";

import React, { useState, useMemo } from "react";

// --- START: Replacement Icons (Inline SVGs for Fi, Ci, Fa, Sl icons) ---
const IconMenu = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const IconX = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const IconSearch = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const IconBell = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
const IconSettings = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V15z"></path></svg>;
const IconCalendar = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const IconCarSide = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><path fill="currentColor" d="M168 288A112 112 0 1 0 56 176a112 112 0 0 0 112 112zm384 144H208L144 320H48A48 48 0 0 0 0 368v64a48 48 0 0 0 48 48h220l58.6 32h183.4c21.2 0 38-16.7 38-38s-16.8-38-38-38zm-112-96h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24c13.3 0 24 10.7 24 24s-10.7 24-24 24zM544 64H384c-13.3 0-24 10.7-24 24v24c0 13.3 10.7 24 24 24h160c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM240 64h-16c-13.3 0-24 10.7-24 24v24c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24z"/></svg>;
const IconHeart = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const IconBookmark = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>;
const IconLogin = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>;
// --- END: Replacement Icons ---

// Mock Firebase Auth and Next.js functions (replaced imports)
const auth = { /* Mock Auth */ };
const useRouter = () => ({ push: (path) => console.log(`Navigating to ${path}`) });
const Link = ({ children, href, className, ...rest }) => <a href={href} className={className} onClick={() => console.log(`Link clicked: ${href}`)} {...rest}>{children}</a>;
// Image component replacement for this single-file environment
const NextImage = ({ src, alt, width, height, ...rest }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ width: width, height: height, objectFit: 'cover', borderRadius: '9999px' }}
        {...rest}
    />
);


// Mock user data for the dashboard content
const MOCK_USER = {
  name: "Emily Johnson",
  email: "emily@example.com",
  // Use a different placeholder image URL for the profile to avoid using the hardcoded width/height style on the image component
  profileImg: "https://placehold.co/64x64/0B2746/FFCC66?text=EJ",
  upcomingBooking: {
    date: "Sep 25, 2025",
    service: "Full Car Detailing",
    status: "Confirmed",
  },
  savedVehicles: {
    make: "Honda Civic",
    license: "PB12AB3456",
  },
  favoriteService: {
    name: "Ceramic Coating",
    price: "$500",
  },
  recentActivity: [
    { type: "Booked Full Car Detailing", date: "Today", color: "text-[#FFCC66]" },
    { type: "Rescheduled Car Wash", date: "Sep 15, 2025", color: "text-slate-400" },
    { type: "Completed Interior Detailing", date: "Aug 30, 2025", color: "text-slate-400" },
  ],
};


// Component to render the content based on the selected tab
const DashboardContent = ({ tab }: { tab: string }) => {
  // We only show the 'overview' content (the Figma design) for this request.
  if (tab !== 'overview') {
    return (
      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold capitalize">{tab.replace('-', ' ')}</h2>
        <p className="mt-2 text-slate-500">Content for the **{tab}** section will be developed here.</p>
        <div className="h-64 flex items-center justify-center text-slate-400 border border-dashed mt-4 rounded-lg">
            <span className="text-sm">Placeholder for specific {tab} features.</span>
        </div>
      </div>
    );
  }

  // --- Overview Content (Matching Figma Design) ---
  return (
    <>
      {/* Cards row (3 columns on desktop, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* 1. Upcoming Booking Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Upcoming Booking</h3>
          <p className="text-sm text-slate-500">{MOCK_USER.upcomingBooking.date}</p>
          <p className="font-bold text-xl mt-3 text-[#0b2746]">{MOCK_USER.upcomingBooking.service}</p>
          <p className="mt-4 text-md font-semibold text-emerald-600">
            {MOCK_USER.upcomingBooking.status}
          </p>
        </div>

        {/* 2. Saved Vehicles Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition duration-300">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Saved Vehicles</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl text-slate-600">
                <IconCarSide className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-lg text-[#0b2746]">{MOCK_USER.savedVehicles.make}</div>
                <div className="text-xs text-slate-500">{MOCK_USER.savedVehicles.license}</div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="px-5 py-2 rounded-full border border-slate-300 text-sm font-medium text-[#0b2746] hover:bg-slate-50 transition">
              Manage
            </button>
          </div>
        </div>

        {/* 3. Favorite Services Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition duration-300">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Favorite Services</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-2xl text-red-500">
                <IconHeart className="w-6 h-6 fill-red-500 stroke-red-500" />
              </div>
              <div>
                <div className="font-semibold text-lg text-[#0b2746]">{MOCK_USER.favoriteService.name}</div>
                <div className="text-xs text-slate-500">Starts at {MOCK_USER.favoriteService.price}</div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="px-5 py-2 rounded-full border border-slate-300 text-sm font-medium text-[#0b2746] hover:bg-slate-50 transition">
              View
            </button>
          </div>
        </div>
      </div>

      {/* Quick Book CTA (Big Orange Button) */}
      <div className="mb-8">
        <button
          // Removed alert and replaced it with console log since alerts are not allowed
          onClick={() => console.log("Redirecting to Booking page...")}
          className="w-full md:w-1/2 lg:w-1/3 text-white font-bold text-lg py-4 rounded-xl bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F]
            shadow-[0_8px_30px_rgba(255,124,69,0.3)] hover:scale-[1.01] transition-transform duration-300 active:scale-[0.99]"
        >
          <span className="flex items-center justify-center gap-3">
            <IconCalendar className="w-6 h-6 fill-white stroke-white" />
            Quick Book
          </span>
        </button>
      </div>

      {/* Recent Activity + Shortcuts (responsive stacked) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6 text-slate-900">Recent Activity</h3>

          <div className="relative pl-6">
            {/* vertical line */}
            <div className="absolute left-[13px] top-0 bottom-0 w-px bg-slate-200" />
            <ul className="space-y-6">
              {MOCK_USER.recentActivity.map((activity, index) => (
                <li key={index} className="relative pl-6">
                  {/* circle marker */}
                  <div className={`absolute -left-[5px] top-1 w-3 h-3 rounded-full ${index === 0 ? 'bg-[#0b2746]' : 'bg-slate-400'} ring-4 ring-white`} />
                  <div className="font-semibold text-slate-800">{activity.type}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{activity.date}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Shortcuts / Favorite Services */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Popular Services</h3>
          <div className="flex flex-col gap-4">
            <Link href="/services/full-detailing" className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] flex items-center justify-center text-white font-bold text-xl">
                FD
              </div>
              <div>
                <div className="font-medium text-slate-800">Full Car Detailing</div>
                <div className="text-sm text-slate-500">Est. $120</div>
              </div>
              <div className="ml-auto text-sm font-semibold text-[#FFCC66] hover:text-[#0b2746] transition">Book Now &rarr;</div>
            </Link>

            <Link href="/services/interior-only" className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0b2746] text-xl">
                <IconBookmark className="w-6 h-6 fill-[#0b2746] stroke-none" />
              </div>
              <div>
                <div className="font-medium text-slate-800">Interior Deep Clean</div>
                <div className="text-sm text-slate-500">Quickest service</div>
              </div>
              <div className="ml-auto text-sm font-semibold text-[#FFCC66] hover:text-[#0b2746] transition">View &rarr;</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};


export default function Dashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<
    "overview" | "bookings" | "manage" | "track" | "vehicles" | "bookmarks" | "settings"
  >("overview");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Mock logout function since we don't have the real firebase setup here
  const handleLogout = async () => {
    try {
      // In a real app: await signOut(auth);
      console.log("Logged out successfully");
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      // In a real app: router.push("/auth");
    }
  };

  const menuItems = useMemo(() => [
    { id: "overview", label: "Dashboard", icon: <IconCalendar className="w-5 h-5" /> },
    { id: "bookings", label: "Past Bookings", icon: <IconBookmark className="w-4 h-4" /> },
    { id: "manage", label: "Reschedule / Cancel", icon: <span className="text-xl">✏️</span> },
    { id: "track", label: "Track Service Status", icon: <span className="text-xl">🚗</span> },
    { id: "vehicles", label: "Vehicle Details", icon: <IconCarSide className="w-4 h-4" /> },
    { id: "bookmarks", label: "Bookmarked Services", icon: <IconHeart className="w-4 h-4" /> },
    { id: "settings", label: "Account Settings", icon: <IconSettings className="w-4 h-4" /> },
  ], []);

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-800 font-inter">
      {/* Load Inter font using a mock setup if needed for visual consistency */}
      <style jsx global>{`
        :root {
          --font-inter: 'Inter', sans-serif;
        }
        body {
          font-family: var(--font-inter);
        }
      `}</style>
      
      {/* ---------- Mobile Topbar (shows on small screens) ---------- */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b sticky top-0 z-20 shadow-sm">
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-lg text-[#0b2a4a] bg-white"
        >
          <IconMenu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3">
          <button aria-label="Search" className="p-2 rounded-lg text-slate-600 hover:text-[#0b2746]">
            <IconSearch className="w-5 h-5" />
          </button>
          <button aria-label="Notifications" className="p-2 rounded-lg text-slate-600 hover:text-[#0b2746] relative">
            <IconBell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
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
          className={`fixed z-40 left-0 top-0 bottom-0 w-64 bg-[#0b2746] text-white p-6 transform transition-transform duration-300 
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:h-screen md:min-h-screen flex flex-col shadow-2xl md:shadow-none`}
        >
          {/* Profile Section (matches Figma) */}
          <div className="flex flex-col items-center justify-start mb-10 mt-2">
             {/* close (mobile) */}
             <button
                className="md:hidden absolute top-4 right-4 p-2 rounded-md hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <IconX className="w-5 h-5" />
              </button>
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFCC66] shadow-lg">
              <NextImage src={MOCK_USER.profileImg} width={64} height={64} alt="profile" />
            </div>
            <div className="text-center mt-3">
              <div className="font-semibold text-lg">{MOCK_USER.name}</div>
              <Link href="/dashboard/settings" className="text-xs text-slate-300 hover:text-[#FFCC66] transition">
                Edit Profile
              </Link>
            </div>
          </div>


          {/* Menu */}
          <nav className="flex flex-col gap-2 flex-grow">
            {menuItems.map((item) => (
                <button
                key={item.id}
                onClick={() => {
                    setTab(item.id as "overview" | "bookings" | "manage" | "track" | "vehicles" | "bookmarks" | "settings");
                    setMobileOpen(false);
                }}
                className={`flex items-center gap-3 text-left px-3 py-3 rounded-xl transition font-medium text-sm
                    ${
                    tab === item.id
                        ? "bg-[#07203a] font-bold text-[#FFCC66] shadow-inner" // Slightly darker active state
                        : "hover:bg-white/10 text-slate-200"
                    }`}
                >
                {item.icon} {item.label}
                </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full justify-start px-3 py-3 rounded-xl text-sm font-semibold bg-red-800/20 text-red-300 hover:bg-red-800/40 transition"
            >
              <IconLogin className="w-5 h-5" /> Logout
            </button>
          </div>
        </aside>

        {/* ---------- Main area ---------- */}
        <main className="flex-1 min-h-screen md:ml-64">
          <div className="max-w-7xl mx-auto p-6 md:p-10">
            {/* Header (Matching Figma: Clean greeting only) */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2746]">
                Hi, {MOCK_USER.name} <span className="inline-block">👋</span>
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Welcome back — here’s what’s happening with your services.
              </p>
            </div>

            {/* Content Switcher */}
            <DashboardContent tab={tab} />

            {/* mobile bottom spacing */}
            <div className="h-12 md:h-4" />
          </div>
        </main>
      </div>
    </div>
  );
}
