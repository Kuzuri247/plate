import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavItems from "./NavItems";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="text-xl font-bold">
        BabbleBuddy
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <ThemeSwitch />
        <SignedOut>
          <SignInButton>
            <button className="btn btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
