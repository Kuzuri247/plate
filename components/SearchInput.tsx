"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("topic") || "";
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === "/companions") {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["topic"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);
    return () => clearTimeout(Debounce);
  }, [searchQuery, router, pathname, searchParams]);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="border border-black dark:bg-gray-700 text-base rounded-lg items-center flex gap-3 px-3 py-1.5 h-fit">
      <Image
        src="/icons/search.svg"
        alt="Search Icon"
        width={15}
        height={15}
        className="dark:invert dark:brightness-0 dark:contrast-100"
      />
      <input
        ref={inputRef}
        type="text"
        placeholder=" Ctrl+K.... "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full outline-none" 
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            router.push(`${pathname}?query=${searchQuery}`);
          }
        }}
      />
    </div>
  );
};

export default SearchInput;
