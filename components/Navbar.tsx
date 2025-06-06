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
    <nav className="navbar border border-black w-[90%] rounded-full gap-6 sticky top-0 transtion-bg-transparent z-10 shadow-[5px_5px_0px_0px_rgba(109,40,217)] max-[720px]:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Link href="/" className="text-xl font-bold dark:text-neutral-700">
        BabbleBuddy
      </Link>
      <div className="flex items-center gap-8">
        <div className="max-[720px]:hidden">
          <NavItems />
        </div>
        <ThemeSwitch />
        <SignedOut>
          <SignInButton>
            <button className="btn btn-signin dark:text-neutral-700">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {/* Mobile bottom nav for < 720px */}
      <div className="hidden max-[720px]:flex w-[90%] max-[720px]:w-[75%] max-[420px]:w-[90%] fixed bottom-0 left-1/2 transform -translate-x-1/2 mx-1 my-1 py-4 px-4 bg-white dark:bg-slate-50 border border-black rounded-2xl z-20 justify-center">
        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;
