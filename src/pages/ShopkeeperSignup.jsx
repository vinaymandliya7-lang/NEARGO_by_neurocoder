import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  User,
  Phone,
  CheckCircle2,
  Mail,
  ArrowRight,
  MapPin,
  Store,
  Map,
  Navigation,
  Clock3,
} from "lucide-react";
import { BsShop } from "react-icons/bs";

const ShopkeeperSignup = () => {
  const navigate = useNavigate();

  // =====================================================
  // CATEGORIES
  // 👉 YAHAN SE CATEGORY ADD / REMOVE / CHANGE KAR SAKTE HO
  // =====================================================

  const categories = [
    "Grocery Store",
    "Clothing & Fashion",
    "Electronics",
    "Mobile & Accessories",
    "Pharmacy",
    "Restaurant",
    "Cafe & Bakery",
    "Footwear",
    "Beauty & Cosmetics",
    "Hardware & Tools",
    "Furniture",
    "Stationery & Books",
    "Sports & Fitness",
    "Jewellery",
    "Automobile",
    "Other",
  ];

  // =====================================================
  // FORM STATES
  // =====================================================

  const [shopType, setShopType] = useState("permanent");

  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    mobile: "",
    email: "",
    category: "",
    address: "",
    landmark: "",
    city: "",
    pincode: "",
    description: "",
    temporaryDuration: "",
  });

  const [errors, setErrors] = useState({});

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // =====================================================
  // VALIDATION
  // =====================================================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.shopName.trim()) {
      newErrors.shopName = "Shop name is required.";
    }

    if (!formData.ownerName.trim()) {
      newErrors.ownerName = "Owner name is required.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.landmark.trim()) {
      newErrors.landmark = "Landmark is required.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode.";
    }

    if (
      shopType === "temporary" &&
      !formData.temporaryDuration
    ) {
      newErrors.temporaryDuration =
        "Please select the expected duration.";
    }

    return newErrors;
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const shopkeeperData = {
      ...formData,
      shopType,
    };

    // Save for next step
    sessionStorage.setItem(
      "nearGoShopkeeperData",
      JSON.stringify(shopkeeperData)
    );

    console.log("Shopkeeper Data:", shopkeeperData);

    // Next page
    navigate("/ShopkeeperOTP");
  };

  return (
    <div className="min-h-screen bg-[#f8fafb] overflow-x-hidden">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <header className="w-full bg-white border-b border-gray-100">

        <div className="flex items-center justify-between px-4 sm:px-7 py-3">

          {/* Logo */}
          <div className="flex flex-col">

            <h1 className="text-xl sm:text-2xl font-extrabold text-[#0b2940]">
              NEAR
              <span className="text-[#FF922F]">
                -GO
              </span>
            </h1>

            <p className="text-[9px] sm:text-[10px] tracking-[1.5px] text-gray-500 font-medium">
              LOCAL SHOPS • REAL PEOPLE
            </p>

          </div>

          {/* Right Text */}
          <div className="text-right">

            <p className="text-xs sm:text-sm font-semibold text-[#183b50] leading-4">
              Grow your shop.
              <br />
              Reach more customers.
            </p>

            <span className="inline-block w-8 h-0.5 bg-[#FFAE00] mt-1" />

          </div>

        </div>

      </header>

      {/* ================================================= */}
      {/* MAIN */}
      {/* ================================================= */}

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-5 sm:py-8">

        {/* ================================================= */}
        {/* PROGRESS */}
        {/* ================================================= */}

        <div className="flex items-center gap-2 w-full mb-7">

          {/* Step 1 */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffae00] text-white shadow-md shadow-orange-200">
            <CheckCircle2 size={22} />
          </div>

          {/* Line */}
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#ffae00] to-[#ffca28]" />
          </div>

          {/* Step 2 */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-200 bg-white text-sm font-bold text-gray-400">
            2
          </div>

          {/* Line */}
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200" />

          {/* Step 3 */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-zinc-200 bg-white text-sm font-bold text-gray-400">
            3
          </div>

        </div>

        {/* ================================================= */}
        {/* TITLE */}
        {/* ================================================= */}

        <div className="mb-7">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
              <BsShop
                size={23}
                className="text-[#ffae00]"
              />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2940]">
                Register your shop
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Tell us about your shop so we can verify it
                and get you on NEAR-GO.
              </p>
            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* FORM CARD */}
        {/* ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(11,41,64,0.07)] p-5 sm:p-8"
        >

          {/* ================================================= */}
          {/* SHOP TYPE */}
          {/* ================================================= */}

          <div className="mb-7">

            <label className="mb-3 block text-sm font-bold text-[#183b50]">
              What type of shop are you registering?
            </label>

            <div className="grid grid-cols-2 gap-3">

              {/* Permanent */}
              <button
                type="button"
                onClick={() => setShopType("permanent")}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  shopType === "permanent"
                    ? "border-[#ffae00] bg-orange-50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-orange-200"
                }`}
              >

                <div className="flex items-center gap-3">

                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                      shopType === "permanent"
                        ? "bg-[#ffae00] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <Store size={21} />
                  </div>

                  <div>
                    <p className="font-bold text-[#183b50]">
                      Permanent
                    </p>

                    <p className="text-[11px] text-gray-500">
                      Regular shop
                    </p>
                  </div>

                </div>

              </button>

              {/* Temporary */}
              <button
                type="button"
                onClick={() => setShopType("temporary")}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  shopType === "temporary"
                    ? "border-[#ffae00] bg-orange-50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-orange-200"
                }`}
              >

                <div className="flex items-center gap-3">

                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                      shopType === "temporary"
                        ? "bg-[#ffae00] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="font-bold text-[#183b50]">
                      Temporary
                    </p>

                    <p className="text-[11px] text-gray-500">
                      Event / seasonal
                    </p>
                  </div>

                </div>

              </button>

            </div>

          </div>

          {/* ================================================= */}
          {/* SHOP NAME */}
          {/* ================================================= */}

          <div className="mb-5">

            <label className="mb-2 block text-sm font-bold text-[#183b50]">
              Shop Name
            </label>

            <div className="relative">

              <Store
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#496B87]"
              />

              <input
                type="text"
                name="shopName"
                value={formData.shopName}
                onChange={handleChange}
                placeholder="Enter your shop name"
                className={`h-14 w-full rounded-2xl border ${
                  errors.shopName
                    ? "border-red-300"
                    : "border-[#D7E1E9]"
                } bg-[#f8fafb] px-5 pl-14 text-[15px] text-[#123B63] outline-none transition focus:bg-white focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100`}
              />

            </div>

            {errors.shopName && (
              <p className="mt-1.5 px-1 text-xs text-red-500">
                {errors.shopName}
              </p>
            )}

          </div>

          {/* ================================================= */}
          {/* OWNER NAME */}
          {/* ================================================= */}

          <div className="mb-5">

            <label className="mb-2 block text-sm font-bold text-[#183b50]">
              Owner Name
            </label>

            <div className="relative">

              <User
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#496B87]"
              />

              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Enter owner's full name"
                className={`h-14 w-full rounded-2xl border ${
                  errors.ownerName
                    ? "border-red-300"
                    : "border-[#D7E1E9]"
                } bg-[#f8fafb] px-5 pl-14 text-[15px] text-[#123B63] outline-none transition focus:bg-white focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100`}
              />

            </div>

            {errors.ownerName && (
              <p className="mt-1.5 px-1 text-xs text-red-500">
                {errors.ownerName}
              </p>
            )}

          </div>

          {/* ================================================= */}
          {/* MOBILE + EMAIL */}
          {/* ================================================= */}

          <div className="grid sm:grid-cols-2 gap-5 mb-5">

            {/* Mobile */}
            <div>

              <label className="mb-2 block text-sm font-bold text-[#183b50]">
                Mobile Number
              </label>

              <div className="relative">

                <Phone
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#496B87]"
                />

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);

                    setFormData((prev) => ({
                      ...prev,
                      mobile: value,
                    }));

                    setErrors((prev) => ({
                      ...prev,
                      mobile: "",
                    }));
                  }}
                  placeholder="10-digit mobile"
                  inputMode="numeric"
                  maxLength={10}
                  className={`h-14 w-full rounded-2xl border ${
                    errors.mobile
                      ? "border-red-300"
                      : "border-[#D7E1E9]"
                  } bg-[#f8fafb] px-5 pl-14 text-[15px] text-[#123B63] outline-none transition focus:bg-white focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100`}
                />

              </div>

              {errors.mobile && (
                <p className="mt-1.5 px-1 text-xs text-red-500">
                  {errors.mobile}
                </p>
              )}

            </div>

            {/* Email */}
            <div>

              <label className="mb-2 block text-sm font-bold text-[#183b50]">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#496B87]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`h-14 w-full rounded-2xl border ${
                    errors.email
                      ? "border-red-300"
                      : "border-[#D7E1E9]"
                  } bg-[#f8fafb] px-5 pl-14 text-[15px] text-[#123B63] outline-none transition focus:bg-white focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100`}
                />

              </div>

              {errors.email && (
                <p className="mt-1.5 px-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}

            </div>

          </div>

          {/* ================================================= */}
          {/* CATEGORY */}
          {/* ================================================= */}

          <div className="mb-5">

            <label className="mb-2 block text-sm font-bold text-[#183b50]">
              Shop Category
            </label>

            <div className="relative">

              <BsShop
                size={19}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#496B87] pointer-events-none"
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`h-14 w-full appearance-none rounded-2xl border ${
                  errors.category
                    ? "border-red-300"
                    : "border-[#D7E1E9]"
                } bg-[#f8fafb] px-5 pl-14 pr-10 text-[15px] text-[#123B63] outline-none transition focus:bg-white focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100`}
              >

                <option value="">
                  Select shop category
                </option>

                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                ))}

              </select>

            </div>

            {errors.category && (
              <p className="mt-1.5 px-1 text-xs text-red-500">
                {errors.category}
              </p>
            )}

          </div>

          {/* ================================================= */}
          {/* ADDRESS */}
          {/* ================================================= */}

          <div className="mb-5">

            <label className="mb-2 block text-sm font-bold text-[#183b50]">
              Shop Address
            </label>

            <div className="relative">

              <MapPin
                size={20}
                className="absolute left-5 top-5 text-[#496B87]"
              />

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                placeholder="Enter complete shop address"
                className={`w-full rounded-2xl border ${
                  errors.address
                    ? "border-red-300"
                    : "border-[#D7E1E9]"
                } bg-[#f8fafb] px-5 py-4 pl-14 text-[15px] text-[#123B63] outline-none resize-none transition focus:bg-white focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100`}
              />

            </div>

            {errors.address && (
              <p className="mt-1.5 px-1 text-xs text-red-500">
                {errors.address}
              </p>
            )}

          </div>

          {/* ================================================= */}
          {/* LANDMARK + CITY */}
          {/* ================================================= */}

          <div className="grid sm:grid-cols-2 gap-5 mb-5">

            {/* Landmark */}
            <div>

              <label className="mb-2 block text-sm font-bold text-[#183b50]">
                Landmark
              </label>

              <div className="relative">

                <Navigation
                  size={19}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#496B87]"
                />

                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="Near / opposite / beside..."
                  className={`h-14 w-full rounded-2xl border ${
                    errors.landmark
                      ? "border-red-300"
                      : "border-[#D7E1E9]"
                  } bg-[#f8fafb] px-5 pl-14 text-[15px] text-[#123B63] outline-none transition focus:bg-white focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100`}
                />

              </div>

              {errors.landmark && (
                <p className="mt-1.5 px-1 text-xs text-red-500">
                  {errors.landmark}
                </p>
              )}

            </div>

            {/* City */}
            <div>

              <label className="mb-2 block text-sm font-bold text-[#183b50]">
                City
              </label>

              <div className="relative">

                <Map
                  size={19}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#496B87]"
                />

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className={`h-14 w-full rounded-2xl border ${
                    errors.city
                      ? "border-red-300"
                      : "border-[#D7E1E9]"
                  } bg-[#f8fafb] px-5 pl-14 text-[15px] text-[#123B63] outline-none transition focus:bg-white focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100`}
                />

              </div>

              {errors.city && (
                <p className="mt-1.5 px-1 text-xs text-red-500">
                  {errors.city}
                </p>
              )}

            </div>

          </div>

          {/* ================================================= */}
          {/* PINCODE */}
          {/* ================================================= */}

          <div className="mb-5">

            <label className="mb-2 block text-sm font-bold text-[#183b50]">
              Pincode
            </label>

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={(e) => {
                const value = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 6);

                setFormData((prev) => ({
                  ...prev,
                  pincode: value,
                }));

                setErrors((prev) => ({
                  ...prev,
                  pincode: "",
                }));
              }}
              placeholder="Enter 6-digit pincode"
              inputMode="numeric"
              maxLength={6}
              className={`h-14 w-full rounded-2xl border ${
                errors.pincode
                  ? "border-red-300"
                  : "border-[#D7E1E9]"
              } bg-[#f8fafb] px-5 text-[15px] text-[#123B63] outline-none transition focus:bg-white focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100`}
            />

            {errors.pincode && (
              <p className="mt-1.5 px-1 text-xs text-red-500">
                {errors.pincode}
              </p>
            )}

          </div>

          {/* ================================================= */}
          {/* TEMPORARY SHOP ONLY */}
          {/* ================================================= */}

          {shopType === "temporary" && (
            <div className="mb-5 p-5 rounded-2xl bg-orange-50 border border-orange-100">

              <div className="flex items-center gap-2 mb-4">

                <Clock3
                  size={19}
                  className="text-[#ffae00]"
                />

                <p className="font-bold text-[#183b50]">
                  Temporary Shop Details
                </p>

              </div>

              <label className="mb-2 block text-sm font-semibold text-[#183b50]">
                Expected Duration
              </label>

              <select
                name="temporaryDuration"
                value={formData.temporaryDuration}
                onChange={handleChange}
                className="h-14 w-full rounded-2xl border border-orange-200 bg-white px-5 text-[15px] text-[#123B63] outline-none focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100"
              >

                <option value="">
                  Select duration
                </option>

                <option value="1-day">
                  1 Day
                </option>

                <option value="2-7-days">
                  2–7 Days
                </option>

                <option value="1-month">
                  Up to 1 Month
                </option>

                <option value="1-3-months">
                  1–3 Months
                </option>

                <option value="3-6-months">
                  3–6 Months
                </option>

                <option value="6-months-plus">
                  More than 6 Months
                </option>

              </select>

              {errors.temporaryDuration && (
                <p className="mt-1.5 text-xs text-red-500">
                  {errors.temporaryDuration}
                </p>
              )}

            </div>
          )}

          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <div className="mb-6">

            <label className="mb-2 block text-sm font-bold text-[#183b50]">
              Shop Description
              <span className="text-gray-400 font-normal">
                {" "} (Optional)
              </span>
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              placeholder={
                shopType === "temporary"
                  ? "Tell customers what you are selling..."
                  : "Tell customers a little about your shop..."
              }
              className="w-full rounded-2xl border border-[#D7E1E9] bg-[#f8fafb] px-5 py-4 text-[15px] text-[#123B63] outline-none resize-none transition focus:bg-white focus:border-[#ffae00] focus:ring-4 focus:ring-orange-100"
            />

          </div>

          {/* ================================================= */}
          {/* CONTINUE */}
          {/* ================================================= */}

          <button
            type="submit"
            className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A18] to-[#FF922F] text-base font-bold text-white shadow-lg shadow-orange-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-200 active:translate-y-0"
          >

            Continue

            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />

          </button>

        </form>
          <p className="mt-7 text-center text-sm text-gray-500">

              Already have an account?{" "}

              <Link
                to="/ShopkeeperLogin"
                className="font-bold text-[#16aaa8] transition hover:text-[#0d8987] hover:underline"
              >
                Login
              </Link>

            </p>

        {/* Security */}
        <p className="text-center text-[11px] text-gray-400 mt-5">
          Your shop information is securely stored and used
          only for NEAR-GO registration and verification.
        </p>

      </main>

    </div>
  );
};

export default ShopkeeperSignup;