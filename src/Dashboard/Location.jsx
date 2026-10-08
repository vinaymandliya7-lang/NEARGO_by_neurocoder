import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  LocateFixed,
  MapPin,
  Search,
  Store,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/nearg0_standalone_logo.png";

const Location = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationPanelOpen, setLocationPanelOpen] = useState(false);

  const locations = [
    {
      id: 1,
      city: "Mandsaur",
      area: "Mandsaur, Madhya Pradesh",
    },
    {
      id: 2,
      city: "Indore",
      area: "Indore, Madhya Pradesh",
    },
    {
      id: 3,
      city: "Ujjain",
      area: "Ujjain, Madhya Pradesh",
    },
    {
      id: 4,
      city: "Neemuch",
      area: "Neemuch, Madhya Pradesh",
    },
  ];

  const filteredLocations = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return locations;

    return locations.filter(
      (location) =>
        location.city.toLowerCase().includes(value) ||
        location.area.toLowerCase().includes(value)
    );
  }, [search]);

  const selectLocation = (location) => {
    setSelectedLocation(location);
    setLocationPanelOpen(false);
    setSearch("");
  };

  const useCurrentLocation = () => {
    // Demo location
    // Later connect this with browser geolocation / backend.
    const currentLocation = {
      id: "current",
      city: "Your Location",
      area: "Nearby shops around you",
    };

    setSelectedLocation(currentLocation);
  };

  const continueToDashboard = () => {
    if (!selectedLocation) return;

    sessionStorage.setItem(
      "nearGoCustomerLocation",
      JSON.stringify(selectedLocation)
    );

    navigate("/Customerdashboard");
  };

  return (
    <div className="min-h-screen bg-[#F6FAFC] text-[#123B63]">
      <div className="mx-auto min-h-screen w-full max-w-md overflow-hidden bg-white shadow-2xl shadow-slate-300/30">

        {/* ================= TOP AREA ================= */}

        <section className="relative overflow-hidden bg-[#123B63] px-5 pb-24 pt-8">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#16B8B5]/10" />

          <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#FF7A18]/10" />

          {/* Logo */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="rounded-2xl bg-white/95 px-5 py-3 shadow-lg">
              <img
                src={logo}
                alt="NEAR-GO"
                className="h-9 w-auto object-contain"
              />
            </div>
          </div>

          {/* Main heading */}
          <div className="relative z-10 mt-9 text-center text-white">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#16B8B5]/20 ring-1 ring-white/10">
              <MapPin
                size={30}
                strokeWidth={2}
                className="text-[#32C9C5]"
              />
            </div>

            <h1 className="text-[28px] font-extrabold leading-tight tracking-tight">
              Where do you shop?
            </h1>

            <p className="mx-auto mt-3 max-w-[310px] text-sm leading-6 text-white/75">
              Set your area to find nearby products, local shops and the best
              prices around you.
            </p>
          </div>
        </section>

        {/* ================= MAIN CONTENT ================= */}

        <section className="-mt-12 relative z-20 px-4 pb-8">

          {/* Location card */}
          <div className="rounded-[28px] bg-white p-4 shadow-[0_15px_45px_rgba(18,59,99,0.13)]">

            {/* Search location */}
            <button
              type="button"
              onClick={() => setLocationPanelOpen(true)}
              className="flex w-full items-center gap-3 rounded-2xl border border-[#D7E1E9] bg-[#F8FAFB] px-4 py-4 text-left transition active:scale-[0.99]"
            >
              <Search
                size={20}
                className="shrink-0 text-[#496B87]"
              />

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-[#8CA0B3]">
                  Your shopping area
                </p>

                <p
                  className={`mt-1 truncate text-sm font-bold ${
                    selectedLocation
                      ? "text-[#123B63]"
                      : "text-[#8CA0B3]"
                  }`}
                >
                  {selectedLocation
                    ? selectedLocation.area
                    : "Search city or area"}
                </p>
              </div>

              <ArrowRight
                size={19}
                className="shrink-0 text-[#8CA0B3]"
              />
            </button>

            {/* Current location */}
            <button
              type="button"
              onClick={useCurrentLocation}
              className="mt-3 flex w-full items-center gap-3 rounded-2xl border border-[#16B8B5]/20 bg-[#16B8B5]/5 px-4 py-4 text-left transition hover:bg-[#16B8B5]/10 active:scale-[0.99]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#16B8B5]/15">
                <LocateFixed
                  size={20}
                  className="text-[#16AAA8]"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-[#123B63]">
                  Use my current location
                </p>

                <p className="mt-0.5 text-xs text-[#71859B]">
                  Find shops and products around me
                </p>
              </div>
            </button>
          </div>

          {/* ================= WHAT YOU GET ================= */}

          <div className="mt-7">
            <p className="px-1 text-sm font-extrabold text-[#123B63]">
              What you'll find on NEAR-GO
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3">

              <FeatureCard
                icon={<Store size={19} />}
                title="Nearby Shops"
                description="Find local sellers"
              />

              <FeatureCard
                icon={<Search size={19} />}
                title="Product Availability"
                description="Know who has it"
              />

              <FeatureCard
                icon={<ArrowRight size={19} />}
                title="Price Comparison"
                description="Compare local prices"
              />

              <FeatureCard
                icon={<MapPin size={19} />}
                title="Shop Distance"
                description="See what's closer"
              />

            </div>
          </div>

          {/* ================= POPULAR LOCATIONS ================= */}

          <div className="mt-7">
            <div className="flex items-center justify-between">
              <p className="px-1 text-sm font-extrabold text-[#123B63]">
                Popular areas
              </p>

              <span className="text-xs font-semibold text-[#8CA0B3]">
                Select one
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">

              {locations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  onClick={() => selectLocation(location)}
                  className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                    selectedLocation?.id === location.id
                      ? "border-[#16B8B5] bg-[#16B8B5]/10 text-[#129A97]"
                      : "border-[#D7E1E9] bg-white text-[#496B87] hover:border-[#16B8B5]"
                  }`}
                >
                  {location.city}
                </button>
              ))}

            </div>
          </div>

          {/* ================= SELECTED LOCATION ================= */}

          {selectedLocation && (
            <div className="mt-6 rounded-2xl border border-[#16B8B5]/20 bg-[#16B8B5]/5 p-4">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#16B8B5] text-white">
                  <Check size={20} strokeWidth={3} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#129A97]">
                    Shopping location selected
                  </p>

                  <p className="mt-1 font-bold text-[#123B63]">
                    {selectedLocation.city}
                  </p>

                  <p className="mt-0.5 text-xs text-[#71859B]">
                    {selectedLocation.area}
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* ================= CONTINUE ================= */}

          <button
            type="button"
            disabled={!selectedLocation}
            onClick={continueToDashboard}
            className={`mt-7 flex h-14 w-full items-center justify-center gap-2 rounded-full text-sm font-extrabold text-white shadow-lg transition ${
              selectedLocation
                ? "bg-[#FF7A18] shadow-orange-200 hover:bg-[#f56e0d] active:scale-[0.98]"
                : "cursor-not-allowed bg-[#CBD5DD] shadow-none"
            }`}
          >
            Continue to NEAR-GO

            <ArrowRight size={19} />
          </button>

        </section>

        {/* ================= LOCATION PANEL ================= */}

        {locationPanelOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#123B63]/45 backdrop-blur-[2px]">

            <div className="w-full max-w-md rounded-t-[30px] bg-white p-5 shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-extrabold text-[#123B63]">
                    Select your area
                  </h2>

                  <p className="mt-1 text-xs text-[#8CA0B3]">
                    We'll show products and shops near you.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setLocationPanelOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F6F8] text-[#496B87]"
                >
                  <X size={19} />
                </button>

              </div>

              {/* Search */}
              <div className="mt-5 flex h-12 items-center gap-3 rounded-xl border border-[#D7E1E9] bg-[#F8FAFB] px-4">

                <Search
                  size={19}
                  className="text-[#71859B]"
                />

                <input
                  autoFocus
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search city or area..."
                  className="min-w-0 flex-1 bg-transparent text-sm text-[#123B63] outline-none placeholder:text-[#8CA0B3]"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                  >
                    <X
                      size={17}
                      className="text-[#8CA0B3]"
                    />
                  </button>
                )}

              </div>

              {/* Current location */}
              <button
                type="button"
                onClick={() => {
                  useCurrentLocation();
                  setLocationPanelOpen(false);
                }}
                className="mt-4 flex w-full items-center gap-3 rounded-xl bg-[#16B8B5]/10 p-4 text-left"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16B8B5] text-white">
                  <LocateFixed size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#123B63]">
                    Use current location
                  </p>

                  <p className="text-xs text-[#71859B]">
                    Find nearby shops automatically
                  </p>
                </div>

              </button>

              {/* Location list */}
              <div className="mt-4 max-h-[40vh] overflow-y-auto">

                {filteredLocations.length > 0 ? (
                  filteredLocations.map((location) => (
                    <button
                      key={location.id}
                      type="button"
                      onClick={() => selectLocation(location)}
                      className="flex w-full items-center gap-3 border-b border-slate-100 py-4 text-left last:border-0"
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1F6F8] text-[#496B87]">
                        <MapPin size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-[#123B63]">
                          {location.city}
                        </p>

                        <p className="mt-0.5 truncate text-xs text-[#8CA0B3]">
                          {location.area}
                        </p>
                      </div>

                      {selectedLocation?.id === location.id && (
                        <Check
                          size={19}
                          className="text-[#16B8B5]"
                        />
                      )}

                    </button>
                  ))
                ) : (
                  <div className="py-10 text-center">

                    <MapPin
                      size={30}
                      className="mx-auto text-[#CBD5DD]"
                    />

                    <p className="mt-3 text-sm font-bold text-[#496B87]">
                      No area found
                    </p>

                    <p className="mt-1 text-xs text-[#8CA0B3]">
                      Try another city or area.
                    </p>

                  </div>
                )}

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl border border-[#E4EBF0] bg-white p-4 shadow-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#123B63]/5 text-[#123B63]">
        {icon}
      </div>

      <p className="mt-3 text-sm font-bold text-[#123B63]">
        {title}
      </p>

      <p className="mt-1 text-[11px] leading-4 text-[#8CA0B3]">
        {description}
      </p>
    </div>
  );
};

export default Location;