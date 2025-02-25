"use client";
import { signOut } from "@/auth";

export function SignOut() {
  return (
    <button
      className="border rounded-lg p-2 text-gray-400 hover:border-white border-gray-400 hover:text-white transition-all duration-300 font-semibold"
      type="submit"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
