import toast from "react-hot-toast";
import { create } from "zustand";

export const userAuthStore = create((set) => ({
  user: null,

  isSigningUp: false,

  isCheckingAuth: true,

  isLoggingIn: false,

  isLoggingOut: false,

  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const response = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Enter a valid credentials");
      }

      set({ user: responseData.user, isSigningUp: false });
      toast.success("Account created successfully");
    } catch (error) {
      set({ isSigningUp: false, user: null });
      toast.error(error.message || "Signup failed");
    }
  },

  login: async (credentials) => {
    set({ isLoggingIn: true });
    try {
      const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Invalid credentials");
      }

      set({ isLoggingIn: false, user: responseData.user });
      toast.success("Logged In Successfully");
    } catch (error) {
      set({ isLoggingIn: false, user: null });
      toast.error(error.message || "Login Failed");
    }
  },

  logout: async () => {
    set({ isLoggingOut: true });
    try {
      await fetch("/api/v1/auth/logout");
      set({ isLoggingOut: false, user: null });
      toast.success("Logged out successfully");
    } catch (error) {
      set({ isLoggingOut: false });
      toast.error("Logout failed");
    }
  },

  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await fetch("/api/v1/auth/authCheck");
      const responseData = await response.json();
      set({ user: responseData.user, isCheckingAuth: false });
    } catch (error) {
      set({ user: null, isCheckingAuth: false });
    }
  },
}));
