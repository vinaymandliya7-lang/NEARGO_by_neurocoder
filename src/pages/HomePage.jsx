import React from "react";
import logo from "../assets/nearg0_standalone_logo.png";
import homeimg from "../assets/heroimg.png";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import btm from "../assets/btm.png";

console.log("HomePage.jsx");

function HomePage() {
  return (
    <div className="w-full h-[100dvh] overflow-hidden bg-white">

      <div className="w-full h-full flex flex-col">

        {/* ================= LOGO ================= */}
        <div className="shrink-0 px-5 pt-3">
          <img
            src={logo}
            alt="NEAR-GO"
            className="w-24 h-auto object-contain"
          />
        </div>

        {/* ================= HEADING ================= */}
        <div className="shrink-0 text-center px-4 mt-1">
          <h1 className="text-xl font-bold text-[#0b2940]">
            Find it nearby.
          </h1>

          <h1 className="text-xl font-bold text-[#0b2940]">
            Reserve it locally.
          </h1>
        </div>

        {/* ================= HERO IMAGE ================= */}
        <div className="shrink-0 w-full flex justify-center px-5 mt-2">

          <img
            src={homeimg}
            alt="Find it nearby"
            className="w-full h-auto max-h-[29vh] object-contain"
          />

        </div>

        {/* ================= BUTTONS ================= */}
        <div className="shrink-0 w-full px-6 mt-2">

          {/* Customer */}
          <Link
            to="/CustomerSignup"
            className="flex items-center justify-center gap-3 w-full h-12 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded-full border-4 border-orange-200 shadow-[0_7px_18px_rgba(255,145,30,0.30)]"
          >
            <IoPersonOutline size={20} color="black" />
            Continue as Customer
          </Link>

          {/* Shopkeeper */}
          <Link
            to="/ShopkeeperLogin"
            className="flex items-center justify-center gap-3 w-full h-12 bg-zinc-100 text-blue-500 font-bold rounded-full mt-2 border-2 border-blue-200"
          >
            <BsShop size={20} color="blue" />
            Continue as Shopkeeper
          </Link>

          {/* Admin */}
          <Link
            to="/Adminlogin"
            className="flex items-center justify-center gap-2 text-xs text-[#496B87] font-semibold mt-2"
          >
            <RiSecurePaymentFill size={16} />
            Admin Login
          </Link>

        </div>

        {/* ================= BOTTOM IMAGE ================= */}
        <div className="mt-auto w-full shrink-0">

          <img
            src={btm}
            alt=""
            className="w-full h-auto block object-contain"
          />

        </div>

      </div>

    </div>
  );
}

export default HomePage;