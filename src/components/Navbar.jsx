import { LogOut, Menu, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = userAuthStore();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const { setContentType } = useContentStore();

  console.log("user", user);
  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-1 h-20 relative bottom-7">
      <div className="flex items-center gap-10 z-50">
        <Link to="/">
          <img
            src="/logo_1b.png"
            alt="streamify-logo"
            className="w-32 sm:w-40"
          />
        </Link>

        {/* desktop navbar items */}
        <div className="hidden sm:flex gap-10 items-center">
          <Link
            to="/"
            className="hover:text-gray-700 hover:underline"
            onClick={() => setContentType("movie")}
          >
            Movies
          </Link>
          <Link
            to="/"
            className="hover:text-gray-700 hover:underline"
            onClick={() => setContentType("tv-show")}
          >
            TV Shows
          </Link>
          <Link to="/history" className="hover:text-gray-700 hover:underline">
            Search History
          </Link>

          <Link to="/plans" className="hover:text-gray-700 hover:underline">
            Plans
          </Link>
        </div>
      </div>

      <div className="flex gap-2 items-center z-50">
        <Link to={"/search"}>
          <Search className="size-6 cursor-pointer"></Search>
        </Link>
        <img
          src={user.image}
          alt="Avatar"
          className="h-8 rounded cursor-pointer"
        />
        <LogOut className="size-6 cursor-pointer" onClick={logout}></LogOut>

        <div className="sm:hidden">
          <Menu
            className="size-6 cursor-pointer"
            onClick={toggleMobileMenu}
          ></Menu>
        </div>
      </div>

      {/* mobile navbar items */}
      {isMobileMenuOpen && (
        <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
          <Link
            to="/"
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Movies
          </Link>
          <Link
            to="/"
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            TV Shows
          </Link>
          <Link
            to="/history"
            className="block hover:underline p-2"
            onClick={toggleMobileMenu}
          >
            Search History
          </Link>

          <Link to="/plans" className="hover:text-gray-700 hover:underline">
            Plans
          </Link>
        </div>
      )}
    </header>
  );
}
