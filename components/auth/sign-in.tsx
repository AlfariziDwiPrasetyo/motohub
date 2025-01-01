"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Credentials not found");
    } else {
      // Redirect or show success message
      window.location.href = "/";
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#181818]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-lg bg-[#252525] p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-white">Sign In</h2>

        {error && <p className="rounded bg-red-600 p-2 text-white">{error}</p>}

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded border border-gray-600 bg-[#3a3a3a] p-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded border border-gray-600 bg-[#3a3a3a] p-2 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Sign In
        </button>

        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="font-medium text-blue-400 hover:underline"
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
