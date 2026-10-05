import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const ShopkeeperOp = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const requirements = useMemo(
    () => [
      {
        label: "At least 8 characters",
        valid: password.length >= 8,
      },
      {
        label: "One uppercase letter",
        valid: /[A-Z]/.test(password),
      },
      {
        label: "One lowercase letter",
        valid: /[a-z]/.test(password),
      },
      {
        label: "One number",
        valid: /\d/.test(password),
      },
      {
        label: "One special character",
        valid: /[^A-Za-z0-9]/.test(password),
      },
    ],
    [password]
  );

  const validRequirements = requirements.filter((item) => item.valid).length;

  const passwordStrength =
    validRequirements <= 2
      ? "Weak"
      : validRequirements <= 4
      ? "Medium"
      : "Strong";

  const strengthWidth =
    validRequirements <= 2
      ? "w-1/3"
      : validRequirements <= 4
      ? "w-2/3"
      : "w-full";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (validRequirements < 5) {
      setError("Please complete all password requirements.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const savedShopkeeperData = JSON.parse(
      sessionStorage.getItem("nearGoShopkeeperData")
    );

    if (!savedShopkeeperData) {
      setError("Registration data not found. Please start again.");
      return;
    }

    const updatedData = {
      ...savedShopkeeperData,
      password,
    };

    sessionStorage.setItem(
      "nearGoShopkeeperData",
      JSON.stringify(updatedData)
    );

    console.log("Shopkeeper Registration Data:", updatedData);

    navigate("/Shopkeeper3rd");
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
              Secure Registration
            </span>
          </div>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-[30px] border border-[#E4EDF2] bg-white shadow-[0_20px_60px_rgba(11,41,64,0.08)]">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left Side */}
            <div className="hidden bg-gradient-to-br from-[#0b2940] via-[#123B63] to-[#16aaa8] p-10 text-white lg:flex lg:flex-col lg:justify-between">

              <div>
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <LockKeyhole size={28} />
                </div>

                <h2 className="text-3xl font-extrabold leading-tight">
                  Secure your
                  <br />
                  shop account.
                </h2>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
                  Create a strong password to keep your NEAR-GO shopkeeper
                  account and shop information protected.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#16aaa8]">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Your data is protected
                    </p>
                    <p className="mt-1 text-xs text-white/65">
                      Use a unique password for your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="p-5 sm:p-8 lg:p-10">

              {/* Progress */}
              <div className="mb-8 flex items-center gap-2">

                {/* Step 1 */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffae00] text-white shadow-md shadow-orange-200">
                  <Check size={21} strokeWidth={3} />
                </div>

                <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-[#ffae00] to-[#ffca28]" />
                </div>

                {/* Step 2 */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#16b8b5] text-sm font-bold text-white shadow-md shadow-teal-100">
                  2
                </div>

                <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200">
                  <div className="h-full w-0 rounded-full bg-[#16b8b5]" />
                </div>

                {/* Step 3 */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-200 bg-white text-sm font-bold text-gray-400">
                  3
                </div>
              </div>

              {/* Heading */}
              <div className="mb-7">
                <p className="mb-2 text-sm font-bold text-[#16aaa8]">
                  STEP 2 OF 3
                </p>

                <h2 className="text-2xl font-extrabold tracking-tight text-[#0b2940] sm:text-3xl">
                  Set your password
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#8CA0B3]">
                  Create a strong password to secure your shopkeeper account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#0b2940]">
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#496B87]"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="h-14 w-full rounded-2xl border border-[#D7E1E9] bg-[#F8FAFB] pl-12 pr-12 text-sm font-medium text-[#0b2940] outline-none transition focus:border-[#16b8b5] focus:bg-white focus:ring-4 focus:ring-[#16b8b5]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#496B87] transition hover:text-[#16aaa8]"
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Strength */}
                {password.length > 0 && (
                  <div className="rounded-2xl bg-[#F8FAFB] p-4">

                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#496B87]">
                        Password strength
                      </span>

                      <span
                        className={`text-xs font-extrabold ${
                          passwordStrength === "Strong"
                            ? "text-green-600"
                            : passwordStrength === "Medium"
                            ? "text-orange-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordStrength}
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-zinc-200">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${strengthWidth} ${
                          passwordStrength === "Strong"
                            ? "bg-green-500"
                            : passwordStrength === "Medium"
                            ? "bg-orange-400"
                            : "bg-red-400"
                        }`}
                      />
                    </div>
                  </div>
                )}

                {/* Requirements */}
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {requirements.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium ${
                        item.valid
                          ? "bg-green-50 text-green-700"
                          : "bg-[#F8FAFB] text-[#8CA0B3]"
                      }`}
                    >
                      <CheckCircle2
                        size={15}
                        className={
                          item.valid
                            ? "text-green-500"
                            : "text-zinc-300"
                        }
                      />

                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#0b2940]">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#496B87]"
                    />

                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter your password"
                      className={`h-14 w-full rounded-2xl border bg-[#F8FAFB] pl-12 pr-12 text-sm font-medium text-[#0b2940] outline-none transition focus:bg-white focus:ring-4 ${
                        confirmPassword.length > 0 &&
                        password === confirmPassword
                          ? "border-green-400 focus:border-green-400 focus:ring-green-100"
                          : "border-[#D7E1E9] focus:border-[#16b8b5] focus:ring-[#16b8b5]/10"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#496B87] transition hover:text-[#16aaa8]"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>

                  {confirmPassword.length > 0 &&
                    password === confirmPassword && (
                      <p className="mt-2 text-xs font-semibold text-green-600">
                        ✓ Passwords match
                      </p>
                    )}
                </div>

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                  </div>
                )}

                {/* Continue */}
                <button
                  type="submit"
                  className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A18] to-[#ffae00] text-sm font-extrabold text-white shadow-lg shadow-orange-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                >
                  Continue
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs text-[#8CA0B3]">
                  You can use this password to securely access your shop
                  dashboard.
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopkeeperOp