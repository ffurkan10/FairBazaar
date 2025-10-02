"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import NavMobile from "./NavMobile";

const Header = () => {
  const { user } = useAuth();
  const { cart, total } = useCart();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-[var(--primary)] text-white fixed top-0 w-full z-50">
      <div className="container flex items-center justify-between py-4">

        {/* sol */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold py-2 relative z-50">
            FairBazaar
          </Link>
          <div className="md:flex gap-6 hidden">
            <Link href="/products" className="hover:bg-[var(--hover-dark)] transition-colors p-2 rounded-lg">
              Products
            </Link>
          </div>
        </div>

        {/* sağ */}
        <div className="md:flex hidden items-center gap-6">
          {user ? (
            <div className="flex items-center gap-6">
              <Link href="/favorites" className="flex items-center p-2 rounded-lg gap-2 hover:bg-[var(--hover-dark)] transition-colors">
                <FaRegHeart size={20} />
                <div className="flex flex-col">
                  <p className="text-xs font-light opacity-80">Your</p>
                  <p className="text-sm font-semibold">Lists</p>
                </div>
              </Link>
              
              <Link href="/profile" className="flex items-center p-2 rounded-lg gap-2 hover:bg-[var(--hover-dark)] transition-colors">
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
              className="flex items-center p-2 rounded-lg gap-2 hover:bg-[var(--hover-dark)] transition-colors"
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
        <div className="md:hidden relative z-50 flex items-center gap-8">
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
      </div>
    </nav>
  );
}

export default Header;
