import { ShoppingBag } from "lucide-react";
import { Menu, X, UserPlus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDarkModeOn, setisDarkModeOn] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ShoppingBag size={23} />
          <h1 className="text-xl font-bold text-gray-800">MyShop</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link
            to={"/Products"}
            className="flex flex-col items-center gap-1 text-gray-700 hover:text-indigo-600 transition text-sm"
          >
            Products
          </Link>

          <Link
            to={"/Cart"}
            className="flex flex-col items-center gap-1 text-gray-700 hover:text-indigo-600 transition text-sm"
          >
            Cart
          </Link>

          <Link
            to={"/Checkout"}
            className="flex flex-col items-center gap-1 text-gray-700 hover:text-indigo-600 transition text-sm"
          >
            Checkout
          </Link>

          <Link
            to={"/Login"}
            className="flex flex-col items-center gap-1 text-gray-700 hover:text-indigo-600 transition text-sm"
          >
            Login
          </Link>

          <Link
            to={"/Register"}
            className="flex flex-col items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition text-sm"
          >
            <UserPlus size={22} />
            Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-6 gap-6 font-medium">
            <Link
              to={"/products"}
              className="flex flex-col items-center gap-1 text-gray-700"
            >
              Products
            </Link>

            <Link
              to={"/Cart"}
              className="flex flex-col items-center gap-1 text-gray-700"
            >
              Cart
            </Link>

            <Link
              to={"/Checkout"}
              className="flex flex-col items-center gap-1 text-gray-700"
            >
              Checkout
            </Link>

            <Link
              to={"/Login"}
              className="flex flex-col items-center gap-1 text-gray-700"
            >
              Login
            </Link>

            <Link
              to={"/Register"}
              className="flex flex-col items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-xl"
            >
              <UserPlus size={22} />
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
