import { auth } from "@/auth";
import React from "react";
import { SignOut } from "../auth/sign-out";

async function LoginButton() {
  const session = await auth();

  if (session?.user) return <SignOut />;

  return (
    <a
      href="/login"
      className="transition-all duration-300 text-gray-400 hover:text-white font-semibold"
    >
      Log in
    </a>
  );
}

export default LoginButton;
