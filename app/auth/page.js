"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiCalendar } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { FiMenu, FiX } from "react-icons/fi";

//Error -> Friendly message.This function converts different firebase errors into friendly from.
function extractFirebaseCode(err) {
  if (err?.code) return String(err.code);
  const msg = String(err?.message || "");
  const m = msg.match(/\(([^)]+)\)/);
  return m?.[1] || "";
}

function getFriendlyFirebaseMessage(err) {
  const code = extractFirebaseCode(err).toLowerCase();
  const normalized = code.replace(/\.$/, "");
  const has = (k) => normalized.includes(k);

  if (has("auth/api-key-not-valid") || has("auth/invalid-api-key")) {
    return "Invalid Firebase API key. Please check your firebaseConfig or environment variables.";
  }
  if (has("auth/configuration-not-found")) {
    return "Firebase project not found. Verify your Firebase project settings.";
  }
  if (has("auth/network-request-failed")) {
    return "Network error. Please check your internet connection and try again.";
  }
  if (has("auth/user-not-found")) {
    return "No account found with this email.";
  }
  if (has("auth/invalid-credential") || has("auth/wrong-password")) {
    return "Incorrect email or password.";
  }
  if (has("auth/too-many-requests")) {
    return "Too many login attempts. Please try again later.";
  }
  if (has("auth/popup-closed-by-user")) {
    return "The sign-in popup was closed before completing the sign-in.";
  }
  if (has("auth/popup-blocked")) {
    return "Sign-in popup was blocked by the browser. Please allow popups and try again.";
  }
  if (has("auth/operation-not-allowed")) {
    return "This sign-in method is disabled in Firebase console. Enable it in Authentication → Sign-in method.";
  }
  if (has("auth/invalid-email")) {
    return "Please enter a valid email address.";
  }
  if (has("auth/missing-email")) {
    return "Email address is required.";
  }
  if (has("auth/missing-password")) {
    return "Password is required.";
  }

  return "Login failed. Please try again later. (code: " + (normalized || "unknown") + ")";
}

export default function LoginPage() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
    getValues,
    clearErrors,
  } = useForm({
    mode: "onTouched",
    defaultValues: { email: "", password: "" },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [resetMsg, setResetMsg] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const NAV = [
    { label: "Log in", href: "/auth" },
    { label: "Gift Cards", href: "/giftcards" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const ERROR_RED = "#ef4444";
  const GOLD = "#FFCC66";

  const inputSx = {
    "& .MuiInputBase-input": { color: "white" },
    "& .MuiFormLabel-root": { color: "rgba(255,255,255,0.7)" },
    "& .MuiFormLabel-root.Mui-focused": { color: GOLD },
    "& .MuiOutlinedInput-root fieldset": { borderColor: "rgba(255,255,255,0.2)" },
    "& .MuiOutlinedInput-root:hover fieldset": { borderColor: GOLD },
    "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: GOLD },
    "& .MuiFormLabel-root.Mui-error": { color: ERROR_RED },
    "& .MuiOutlinedInput-root.Mui-error fieldset": { borderColor: ERROR_RED },
    "& .MuiOutlinedInput-root.Mui-focused.Mui-error fieldset": { borderColor: ERROR_RED },
    "& .MuiOutlinedInput-root.Mui-error:hover fieldset": { borderColor: ERROR_RED },
    "& .MuiFormHelperText-root": { color: ERROR_RED },
    "& .MuiInputBase-input:-webkit-autofill": {
      WebkitTextFillColor: "white",
      boxShadow: "0 0 0px 1000px rgba(0,0,0,0.25) inset",
      caretColor: "white",
      transition: "background-color 9999s ease-in-out 0s",
    },
  };

  const onSubmit = async ({ email, password }) => {
    try {
      setResetMsg("");
      clearErrors("root");
      await signInWithEmailAndPassword(auth, email, password);

         // ✅ Store user info in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: cred.user.displayName || "User",
        email: cred.user.email,
        uid: cred.user.uid,
      })
    );

    reset();
    router.push("/dashboard"); // redirect to dashboard
  } catch (err) {
    setError("root", { message: getFriendlyFirebaseMessage(err) });
  }
};

  const handleForgotPassword = async () => {
    const email = (getValues("email") || "").trim();
    setResetMsg("");
    clearErrors("root");

    if (!email) {
      setError("email", { type: "manual", message: "Enter your email to reset password" });
      return;
    }

    try {
      setResetLoading(true);
      await sendPasswordResetEmail(auth, email);
      setResetMsg(`Password reset email sent to ${email}. Check your inbox.`);
    } catch (err) {
      setError("root", { message: getFriendlyFirebaseMessage(err) });
    } finally {
      setResetLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      clearErrors("root");
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
        const user = result.user;

    // ✅ Store user info in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: user.displayName || "User",
        email: user.email,
        uid: user.uid,
      })
    );

    router.push("/dashboard"); // redirect to dashboard
  } catch (err) {
    setError("root", { message: getFriendlyFirebaseMessage(err) });
  }
};
  return (
    <div className="min-h-screen w-full bg-[#1c2e5c] overflow-x-hidden flex flex-col">
      {/* NAVBAR & HEADER */}
      <header className="flex items-center justify-between shadow-md px-5 py-3 bg-black">
        {/* Logo (unchanged) */}
        <div className="flex items-center">
          <Link href="#home">
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

        {/* Desktop nav  */}
        <nav className="max-[879px]:hidden flex items-center justify-center">
          <ul className="flex items-center justify-center list-none m-0 p-1 gap-12">
            {NAV.map((item) => (
              <li key={item.href} className="flex justify-center items-center p-1">
                <Link
                  href={item.href}
                  className="text-white text-base tracking-wide font-medium font-sans no-underline hover:underline hover:text-[#FFCC66] underline-offset-4 transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-6 py-2 text-white font-medium shadow-[0_0_10px_rgba(255,204,102,0.6),0_0_20px_rgba(255,126,95,0.5)] transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-[0_0_15px_rgba(255,204,102,0.8),0_0_20px_rgba(255,126,95,0.7)]">
                <CiCalendar className="text-xl" />
                <span>Book now</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger — visible only below 880px */}
        <button
          onClick={() => setMobileOpen(true)}
          className="[@media(min-width:880px)]:hidden p-2 rounded-lg border border-gray-700 text-white"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
        >
          <FiMenu className="text-2xl" />
        </button>

        {/* Mobile drawer */}
        <div
          className={`fixed inset-0 z-50 max-[879px]:block hidden ${
            mobileOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <aside
            id="mobile-menu"
            className={`ml-auto h-full w-80 max-w-[85%] bg-black border-l border-gray-800 p-6 flex flex-col gap-6 transition-transform duration-300 ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold text-xl ">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg border border-gray-700"
                aria-label="Close menu"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <ul className="flex flex-col gap-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-base text-white hover:text-[#FFCC66] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FFCC66] to-[#FF7E5F] px-5 py-3 text-white font-semibold shadow-[0_0_10px_rgba(255,204,102,0.6),0_0_20px_rgba(255,126,95,0.5)]"
            >
              <CiCalendar className="text-lg" />
              <span>Book now</span>
            </button>
          </aside>
        </div>
      </header>

      {/* MAIN CONTENT FORM */}
      <main className=" flex items-center justify-center px-6 py-12 flex-1">
        <div className="w-full " style={{ maxWidth: "600px" }}>
          <h1 className="text-3xl font-bold text-[#FFCC66] mb-8 text-center">Log in to your account</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl bg-black/30 backdrop-blur border-[#FFCC66] border-2 px-6 py-6 flex flex-col gap-5"
          >
            {/* Email */}
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  autoComplete="username"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={inputSx}
                />
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  variant="outlined"
                  fullWidth
                  autoComplete="current-password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((s) => !s)}
                          edge="end"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          sx={{ color: "rgba(255,255,255,0.85)" }}
                        >
                          {showPassword ? <FaRegEyeSlash size={22} color="#424c66" /> : <FaRegEye size={22} color="#424c66" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx}
                />
              )}
            />

            {/* Forgot password */}
            <div className="flex items-center justify-between -mt-1">
              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={resetLoading}
                className="text-sm text-[#FFCC66] hover:underline disabled:opacity-60"
              >
                {resetLoading ? "Sending reset email..." : "Forgot password?"}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-yellow-500 p-2 font-semibold text-black  disabled:opacity-60 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:shadow border-[#424c66] border-2 "
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
            <div className="flex items-center">
              <div className="flex-grow border-t border-slate-400" />
              <span className="px-3 text-slate-300 text-sm">OR</span>
              <div className="flex-grow border-t border-slate-400" />
            </div>

            {/* Continue with Google */}
            <button
              type="button"
              onClick={handleGoogleAuth}
              disabled={isSubmitting || resetLoading}
              className="w-full p-2 border-[#424c66] rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#FFCC66] hover:shadow border-2 disabled:opacity-60 text-white"
            >
              <FcGoogle className="w-6 h-6" />
              Continue with Google
            </button>

            {/* Sign Up */}
            <p className="text-center text-sm mt-2 text-white">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#6699FF] hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </main>

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