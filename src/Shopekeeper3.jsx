import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  Mail,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const Shopekeeper3 = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState(30);

  const FAKE_OTP = "123456";

  // Get registered shopkeeper data
  const savedData = JSON.parse(
    sessionStorage.getItem("nearGoShopkeeperData")
  );

  const email = savedData?.email || "your registered email";

  // Countdown
  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 6) {
      setOtp(value);
      setError("");
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setError("Please enter the complete 6-digit OTP.");
      return;
    }

    if (otp !== FAKE_OTP) {
      setError("Invalid OTP. Please try again.");
      return;
    }

    setError("");
    setVerified(true);

    sessionStorage.setItem("nearGoShopkeeperVerified", "true");

    setTimeout(() => {
      navigate("/ShopkeeperSuccess");
    }, 1000);
  };

  const handleResend = () => {
    setTimer(30);
    setOtp("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#F8FBFD] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-[#0b2940] sm:text-2xl">
              NEAR<span className="text-[#16b8b5]">-</span>GO
            </h1>

            <p className="mt-1 text-xs text-[#8CA0B3] sm:text-sm">
              Shopkeeper Registration
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
            <ShieldCheck size={17} className="text-[#16b8b5]" />

            <span className="text-xs font-semibold text-[#496B87]">
              Secure Verification
            </span>
          </div>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-[30px] border border-[#E4EDF2] bg-white shadow-[0_20px_60px_rgba(11,41,64,0.08)]">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left Panel */}
            <div className="hidden bg-gradient-to-br from-[#0b2940] via-[#123B63] to-[#16aaa8] p-10 text-white lg:flex lg:flex-col lg:justify-between">

              <div>
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <Mail size={28} />
                </div>

                <h2 className="text-3xl font-extrabold leading-tight">
                  Verify your
                  <br />
                  shop account.
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
                  Enter the verification code sent to your registered email
                  address to complete your shop registration.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#16aaa8]">
                    <LockKeyhole size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Secure verification
                    </p>

                    <p className="mt-1 text-xs text-white/65">
                      Never share your OTP with anyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="p-5 sm:p-8 lg:p-10">

              {/* Progress */}
              <div className="mb-8 flex items-center gap-2">

                {/* Step 1 */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffae00] text-white shadow-md shadow-orange-200">
                  <CheckCircle2 size={21} />
                </div>

                <div className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-[#ffae00] to-[#ffca28]" />

                {/* Step 2 */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffae00] text-white shadow-md shadow-orange-200">
                  <CheckCircle2 size={21} />
                </div>

                <div className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-[#ffae00] to-[#16b8b5]" />

                {/* Step 3 */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#16b8b5] text-sm font-bold text-white shadow-md shadow-teal-100">
                  3
                </div>
              </div>

              {/* Heading */}
              <div className="mb-7">
                <p className="mb-2 text-sm font-bold text-[#16aaa8]">
                  STEP 3 OF 3
                </p>

                <h2 className="text-2xl font-extrabold tracking-tight text-[#0b2940] sm:text-3xl">
                  Verify your account
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#8CA0B3]">
                  We've sent a 6-digit verification code to:
                </p>

                <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#F8FAFB] px-4 py-3">
                  <Mail size={17} className="text-[#16aaa8]" />

                  <span className="truncate text-sm font-semibold text-[#0b2940]">
                    {email}
                  </span>
                </div>
              </div>

              <form onSubmit={handleVerify}>

                {/* OTP */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#0b2940]">
                    Enter OTP
                  </label>

                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={handleOtpChange}
                    placeholder="000000"
                    className="h-16 w-full rounded-2xl border border-[#D7E1E9] bg-[#F8FAFB] text-center text-2xl font-extrabold tracking-[0.5em] text-[#0b2940] outline-none transition placeholder:text-[#B7C3CC] placeholder:tracking-[0.4em] focus:border-[#16b8b5] focus:bg-white focus:ring-4 focus:ring-[#16b8b5]/10"
                  />
                </div>

                {/* Demo OTP */}
                <div className="mt-4 rounded-2xl border border-orange-100 bg-orange-50 p-4">
                  <p className="text-xs font-semibold text-orange-600">
                    Demo OTP
                  </p>

                  <p className="mt-1 text-lg font-extrabold tracking-[0.3em] text-[#0b2940]">
                    123456
                  </p>

                  <p className="mt-1 text-xs text-[#8CA0B3]">
                    Use this OTP for testing the registration flow.
                  </p>
                </div>

                {/* Error */}
                {error && (
                  <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                  </div>
                )}

                {/* Success */}
                {verified && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-semibold text-green-600">
                    <CheckCircle2 size={18} />
                    OTP verified successfully!
                  </div>
                )}

                {/* Verify Button */}
                <button
                  type="submit"
                  disabled={verified}
                  className="group mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A18] to-[#ffae00] text-sm font-extrabold text-white shadow-lg shadow-orange-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {verified ? "Verified" : "Verify & Complete"}

                  {!verified && (
                    <ArrowRight
                      size={19}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  )}
                </button>

                {/* Resend */}
                <div className="mt-5 text-center">
                  {timer > 0 ? (
                    <p className="text-xs text-[#8CA0B3]">
                      Didn't receive the code? Resend in{" "}
                      <span className="font-bold text-[#0b2940]">
                        {timer}s
                      </span>
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResend}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#16aaa8] transition hover:text-[#0b2940]"
                    >
                      <RefreshCw size={16} />
                      Resend OTP
                    </button>
                  )}
                </div>

                <p className="mt-6 text-center text-xs leading-5 text-[#8CA0B3]">
                  By completing verification, you confirm that the provided
                  information belongs to your shop.
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopekeeper3;