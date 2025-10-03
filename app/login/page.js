"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

function getFriendlyFirebaseMessage(err) {
  const code = String(err?.code || "").toLowerCase();
  if (code.includes("auth/user-not-found")) return "No account found with this email.";
  if (code.includes("auth/wrong-password")) return "Incorrect password.";
  if (code.includes("auth/invalid-email")) return "Please enter a valid email.";
  return "Login failed. Try again.";
}

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      clearErrors("root");
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError("root", { message: getFriendlyFirebaseMessage(err) });
    }
  };

  const handleGoogleAuth = async () => {
    try {
      clearErrors("root");
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err) {
      setError("root", { message: getFriendlyFirebaseMessage(err) });
    }
  };

  const inputSx = {
    "& .MuiInputBase-input": { color: "white" },
    "& .MuiFormLabel-root": { color: "rgba(255,255,255,0.7)" },
    "& .MuiFormLabel-root.Mui-focused": { color: "#FFCC66" },
    "& .MuiOutlinedInput-root fieldset": { borderColor: "rgba(255,255,255,0.2)" },
    "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "#FFCC66" },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c2e5c] px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-black/30 backdrop-blur border-2 border-[#FFCC66] rounded-2xl p-6 flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-yellow-500 text-center">Login</h1>

        <Controller
          name="email"
          control={control}
          rules={{ required: "Email required" }}
          render={({ field }) => (
            <TextField {...field} label="Email" variant="outlined" fullWidth sx={inputSx} error={!!errors.email} helperText={errors.email?.message} />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: "Password required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((s) => !s)}>
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={inputSx}
            />
          )}
        />

        {errors.root?.message && <p className="text-red-500 text-sm">{errors.root.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-yellow-500 text-black font-semibold py-2 rounded-xl hover:scale-105 transition-transform"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>

        <button
          type="button"
          onClick={handleGoogleAuth}
          className="flex items-center justify-center gap-2 border border-[#FFCC66] text-white py-2 rounded-xl hover:scale-105 transition-transform"
        >
          <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
}
