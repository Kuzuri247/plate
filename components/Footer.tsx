import React from "react";

const Footer = () => {
  return (
    <footer className=" flex items-center justify-center w-full border-t border-gray-200 dark:border-gray-800">
      <span className="text-gray-600 dark:text-neutral-600 text-sm px-2 py-6 max-[720px]:pb-20">
        &copy; {new Date().getFullYear()} Made with ❤️ by{" "}
        <a
          href="https://github.com/Kuzuri247"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600"
        >
          Kuzuri
        </a>
      </span>
    </footer>
  );
};

export default Footer;
