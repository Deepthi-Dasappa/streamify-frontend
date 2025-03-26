import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleGetStartedClick(event) {
    event.preventDefault();
    navigate(`/signup?email=${email}`);
  }

  return (
    <div className="hero-bg bg-contain relative">
      {/* Navbar */}
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
        <img src="/logo_1b.png" alt="streamify-logo" className="w-20 md:w-40" />
        <Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded">
          Sign In
        </Link>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center text-white max-w-6xl mx-auto pb-20">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 max-w-xl">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-lg mb-4">Watch anywhere. Cancel anytime</p>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership
        </p>

        <form
          className="flex flex-col md:flex-row gap-4 w-1/2"
          onSubmit={handleGetStartedClick}
        >
          <input
            type="email"
            placeholder="Email address"
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center hover:cursor-pointer">
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>

      {/* separator */}
      <div className="h-20 w-full bg-gradient-to-b from-gray-950 to-black  aria-hidden"></div>

      {/* First section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center  justify-center md:flex-row  flex-col px-4 md:px-2 ">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl">
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.{" "}
            </p>
          </div>

          {/* right side */}
          <div className="flex-1 relative">
            <img src="/tv.png" alt="tv-image" className="mt-4 z-20 relative" />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* separator */}
      <div className="h-3 w-full bg-gradient-to-b from-black to-gray-900 aria-hidden"></div>

      {/* 2nd Section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
          {/* left side */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="/stranger-things-lg.png"
                alt="Stranger Things image"
                className="mt-4"
              />
              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                <img
                  src="/stranger-things-sm.png"
                  alt="stranger-things-image"
                  className="h-full"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg font-bold">
                      Stranger Things
                    </span>
                    <span className="text-sm text-blue-500">
                      Downloading........
                    </span>
                  </div>
                  <img
                    src="/download-icon.gif"
                    alt="download-icon-gif"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-xl">
              Save your favorites easily and always have something to watch
            </p>
          </div>
        </div>
      </div>

      {/* separator */}
      <div className="h-3 w-full bg-gradient-to-b from-black to-gray-900 aria-hidden:"></div>

      {/* 3rd Section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center  justify-center md:flex-row  flex-col px-4 md:px-2 ">
          {/* left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Watch everywhere
            </h2>
            <p className="text-lg md:text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>

          {/* right side */}
          <div className="flex-1 relative overflow-hidden">
            <img
              src="/device-pile.png"
              alt="device-pile-image"
              className="mt-4 z-20 relative"
            />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/5 h-4/6 z-10 max-w-[63%]"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* separator */}
      <div className="h-3 w-full bg-gradient-to-b from-black to-gray-900 aria-hidden:"></div>

      {/* 4th Section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
          {/* left side */}
          <div className="flex-1 relative">
            <img src="/kids.png" alt="kids-image" className="mt-4" />
          </div>
          {/* right side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Create profile for kids
            </h2>
            <p className="text-lg md:text-xl">
              Send kids on adventures with their favorite characters in a space
              made just for them-free with your membership
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
