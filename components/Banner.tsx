import React from "react";

const Banner = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center mx-auto py-10 px-10 bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-slate-50 text-center rounded-lg shadow-lg">
      <span className="text-3xl font-bold">Talk 🗣️ to your Buddy!</span>
      <p>
        <span className="text-lg mt-4">
          Your AI companion is ready to chat with you.
          <br />
          Click on the "Companions" tab to start your journey.
        </span>
      </p>
    </div>
  );
};

export default Banner;
