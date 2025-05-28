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
    <nav className="navbar border border-black w-[90%] rounded-full sticky top-0 transtion-bg-transparent z-10 ">
      <Link href="/" className="text-xl font-bold dark:text-neutral-700">
        BabbleBuddy
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <ThemeSwitch />
        <SignedOut>
          <SignInButton>
            <button className="btn btn-signin dark:text-neutral-700">Sign In</button>
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
