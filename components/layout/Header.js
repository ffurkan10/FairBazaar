"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import NavMobile from "./NavMobile";
import InputSearch from "../ui/inputs/InputSearch";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const { user } = useAuth();
  const { cart, total } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showSearch &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showSearch]);

  return (
    <nav className="bg-[var(--background)] text-[var(--primary)] fixed top-0 w-full z-50 border-b border-[var(--border)] ">
      <div className="container flex items-center justify-between py-4">

        {/* sol */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold py-2 relative z-50">
            FairBazaar
          </Link>
          <div className="lg:flex gap-6 hidden">
            <Link href="/products" className="hover:bg-white transition-colors p-2 rounded-lg">
              Products
            </Link>
          </div>
        </div>

        <div className="flex-1 lg:flex hidden justify-center">
          <InputSearch />
        </div>

        {/* sağ */}
        <div className="lg:flex hidden items-center gap-6">
          {user ? (
            <div className="flex items-center gap-6">
              <Link href="/favorites" className="flex items-center p-2 rounded-lg gap-2 hover:bg-white transition-colors">
                <FaRegHeart size={20} />
                <div className="flex flex-col">
                  <p className="text-xs font-light opacity-80">Your</p>
                  <p className="text-sm font-semibold">Lists</p>
                </div>
              </Link>
              
              <Link href="/profile" className="flex items-center p-2 rounded-lg gap-2 hover:bg-white transition-colors">
                <FaRegUser size={20} />
                <div className="flex flex-col">
                  <p className="text-xs font-light opacity-80">Your</p>
                  <p className="text-sm font-semibold">Account</p>
                </div>
              </Link>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center p-2 rounded-lg gap-2 hover:bg-white transition-colors"
            >
              <FaRegUser size={20} />
              <div className="flex flex-col">
                <p className="text-xs font-light opacity-80">Sign In</p>
                <p className="text-sm font-semibold">Account</p>
              </div>
            </Link>
          )}
          <Link href="/cart" className="flex flex-col items-center">
            <div className="relative">
                <IoCartOutline size={30} />
                <span className="absolute -top-1 -right-1 bg-[var(--yellow)] border border-[var(--brown)] text-black rounded-full px-1 text-xs">
                  {cart.length}
                </span>
            </div>
            <span className="text-xs opacity-80 font-light">${total.toFixed(2)}</span>
          </Link>
        </div>
        
        {/* mobil menü */}
        <div className="lg:hidden relative z-50 flex items-center gap-6">
          <IoIosSearch onClick={() => setShowSearch(!showSearch)} size={25} />
          <Link href="/cart" className="flex flex-col items-center">
            <div className="relative">
                <IoCartOutline size={25} />
                <span className="absolute -top-1 -right-1 bg-[var(--yellow)] border border-[var(--brown)] text-black rounded-full px-1 text-xs">
                  {cart.length}
                </span>
            </div>
            <span className="text-xs opacity-80 font-light">${total.toFixed(2)}</span>
          </Link>
          {showMenu ? <CgClose size={30} onClick={() => setShowMenu(false)} /> : <CgMenuRight size={30} onClick={() => setShowMenu(true)} />}
        </div>

        {/* mobil menü açılır */}
        <NavMobile showMenu={showMenu} setShowMenu={setShowMenu} />

        {/* mobil arama açılır */}
        {showSearch && (
          <div ref={searchRef} className="absolute top-full left-0 right-0 bg-[var(--background)] p-4 border-b border-[var(--border)] lg:hidden flex justify-center">
            <InputSearch />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
