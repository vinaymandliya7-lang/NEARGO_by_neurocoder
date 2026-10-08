import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/favicon.png";

const CustomerSignup1 = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState(30);

  // ==============================
  // FAKE OTP
  // ==============================
  const FAKE_OTP = "123456";

  // ==============================
  // GET USER DATA FROM SIGNUP PAGE
  // ==============================
  const savedSignupData = sessionStorage.getItem("nearGoSignupData");

  const signupData = savedSignupData
    ? JSON.parse(savedSignupData)
    : null;

  const email = signupData?.email || "your@email.com";

  // ==============================
  // OTP COUNTDOWN
  // ==============================
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // ==============================
  // OTP INPUT
  // ==============================
  const handleOtpChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 6);

    setOtp(value);
    setError("");
  };

  // ==============================
  // VERIFY OTP
  // ==============================
  const handleVerify = (e) => {
    e.preventDefault();

    // Check 6 digits
    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    // Check fake OTP
    if (otp !== FAKE_OTP) {
      setError("Invalid OTP. Please try again.");
      return;
    }

    // OTP verified
    setVerified(true);
    setError("");

    // Save verification status
    sessionStorage.setItem(
      "nearGoEmailVerified",
      "true"
    );

    // Navigate to password page
    setTimeout(() => {
      navigate("/CustomerSignup2");
    }, 800);
  };

  // ==============================
  // RESEND OTP
  // ==============================
  const handleResend = () => {
    if (timer > 0) return;

    setOtp("");
    setError("");
    setTimer(30);

    // Fake OTP
    console.log("New Fake OTP:", FAKE_OTP);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fbfc] via-white to-[#eefafa] flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-6xl bg-white rounded-[30px] shadow-[0_20px_70px_rgba(11,41,64,0.12)] overflow-hidden grid lg:grid-cols-2">

        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div className="hidden lg:flex relative bg-[#083b4d] min-h-[650px] overflow-hidden">

          {/* Decorative Circle */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#16b8b5]/20" />

          <div className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-[#FF7A18]/20" />

          <div className="relative z-10 w-full flex flex-col justify-between p-12">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-lg">
                <img
                  src={logo}
                  alt="NEAR-GO"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h1 className="text-white text-2xl font-extrabold tracking-wide">
                  NEAR
                  <span className="text-[#FF922F]">
                    -GO
                  </span>
                </h1>

                <p className="text-white/60 text-xs">
                  Your local world
                </p>
              </div>

            </div>

            {/* Center Content */}
            <div className="text-white max-w-md">

              <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center mb-7 backdrop-blur-sm">

                <Mail
                  size={40}
                  className="text-[#16b8b5]"
                />

              </div>

              <p className="text-[#16b8b5] font-bold tracking-[3px] text-sm mb-3">
                EMAIL VERIFICATION
              </p>

              <h2 className="text-4xl font-extrabold leading-tight mb-5">
                One small step,
                <br />

                <span className="text-[#FF922F]">
                  you're almost in.
                </span>
              </h2>

              <p className="text-white/65 leading-7">
                We've sent a verification code to your
                email. Verify your email address to
                continue creating your NEAR-GO account.
              </p>

            </div>

            {/* Bottom */}
            <div className="flex items-center gap-3 text-white/60 text-sm">

              <ShieldCheck
                size={20}
                className="text-[#16b8b5]"
              />

              Secure email verification

            </div>

          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">

          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-10">

            <div className="w-11 h-11 rounded-xl bg-[#083b4d] p-2">

              <img
                src={logo}  
                alt="NEAR-GO"
                className="w-full h-full object-contain"
              />

            </div>

            <h1 className="text-2xl font-extrabold text-[#083b4d]">
              NEAR
              <span className="text-[#FF7A18]">
                -GO
              </span>
            </h1>

          </div>

          {/* Back Button */}
          <Link
            to="/CustomerSignup"
            className="flex items-center gap-2 text-sm text-[#496B87] hover:text-[#16aaa8] transition mb-8 w-fit"
          >
            <ArrowLeft size={17} />

            Change details
          </Link>

          {/* Heading */}
          <div className="mb-8">

            <div className="w-14 h-14 rounded-2xl bg-[#e9fbfa] flex items-center justify-center mb-5">

              <Mail
                size={27}
                className="text-[#16aaa8]"
              />

            </div>

            <p className="text-[#16aaa8] text-xs font-bold tracking-[3px] mb-2">
              STEP 2 OF 3
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2940]">
              Verify your email
            </h2>

            <p className="text-[#6b7c8c] mt-3 leading-6">
              Enter the 6-digit code we sent to
            </p>

            <p className="font-bold text-[#0b2940] mt-1 break-all">
              {email}
            </p>

          </div>

          {/* ================================================= */}
          {/* PROGRESS BAR */}
          {/* ================================================= */}

          <div className="mb-9">

            <div className="flex items-center">

              {/* Step 1 */}
              <div className="w-9 h-9 rounded-full bg-[#16aaa8] text-white flex items-center justify-center shrink-0">

                <CheckCircle2 size={20} />

              </div>

              <div className="h-1 flex-1 bg-[#16aaa8]" />

              {/* Step 2 */}
              <div className="w-9 h-9 rounded-full bg-[#16aaa8] text-white flex items-center justify-center font-bold shrink-0">

                2

              </div>

              <div className="h-1 flex-1 bg-[#e5edf1]" />

              {/* Step 3 */}
              <div className="w-9 h-9 rounded-full bg-[#eef2f4] text-[#8293a0] flex items-center justify-center font-bold shrink-0">

                3

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* OTP FORM */}
          {/* ================================================= */}

          <form onSubmit={handleVerify}>

            <label className="block text-sm font-bold text-[#183b50] mb-3">
              Enter OTP
            </label>

            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={otp}
              onChange={handleOtpChange}
              placeholder="••••••"
              maxLength={6}
              className={`w-full h-16 rounded-2xl border ${
                error
                  ? "border-red-400 bg-red-50"
                  : "border-[#D7E1E9] bg-[#f8fafb]"
              } text-center tracking-[14px] text-2xl font-bold text-[#0b2940] outline-none focus:border-[#16aaa8] focus:ring-4 focus:ring-[#16aaa8]/10 transition`}
            />

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm mt-3 text-center">
                {error}
              </p>
            )}

            {/* ================================================= */}
            {/* FAKE OTP BOX */}
            {/* ================================================= */}

            <div className="mt-5 p-4 rounded-2xl bg-orange-50 border border-orange-100">

              <p className="text-sm text-orange-700 text-center">

                🧪{" "}
                <span className="font-bold">
                  Demo OTP:
                </span>{" "}

                <span className="font-extrabold tracking-widest">
                  123456
                </span>

              </p>

            </div>

            {/* ================================================= */}
            {/* RESEND OTP */}
            {/* ================================================= */}

            <div className="text-center mt-6">

              <p className="text-sm text-[#718392]">
                Didn't receive the code?
              </p>

              <button
                type="button"
                onClick={handleResend}
                disabled={timer > 0}
                className={`mt-2 text-sm font-bold transition ${
                  timer > 0
                    ? "text-[#9aaab5] cursor-not-allowed"
                    : "text-[#16aaa8] hover:text-[#0b8f8d]"
                }`}
              >
                {timer > 0
                  ? `Resend OTP in ${timer}s`
                  : "Resend OTP"}
              </button>

            </div>

            {/* ================================================= */}
            {/* VERIFY BUTTON */}
            {/* ================================================= */}

            <button
              type="submit"
              disabled={otp.length !== 6 || verified}
              className={`w-full h-14 mt-8 rounded-full font-bold text-white flex items-center justify-center gap-3 transition-all ${
                verified
                  ? "bg-green-500"
                  : otp.length === 6
                  ? "bg-gradient-to-r from-[#16aaa8] to-[#11c7c3] hover:shadow-[0_12px_30px_rgba(22,170,168,0.28)] hover:-translate-y-0.5"
                  : "bg-[#b9c7cf] cursor-not-allowed"
              }`}
            >

              {verified ? (
                <>
                  <CheckCircle2 size={20} />
                  Email Verified
                </>
              ) : (
                <>
                  Verify & Continue
                  <ArrowRight size={19} />
                </>
              )}

            </button>

          </form>

          {/* ================================================= */}
          {/* SECURITY BOX */}
          {/* ================================================= */}

          <div className="flex items-start gap-3 mt-7 p-4 rounded-2xl bg-[#f6fafb] border border-[#e8f0f3]">

            <ShieldCheck
              size={20}
              className="text-[#16aaa8] mt-0.5 shrink-0"
            />

            <p className="text-xs text-[#718392] leading-5">
              Your verification code is used only to
              confirm ownership of your email address.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CustomerSignup1;