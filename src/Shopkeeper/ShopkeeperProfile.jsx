import React, { useState } from "react";
import {
  ArrowLeft,
  Check,
  Clock3,
  Edit3,
  Home,
  LogOut,
  MapPin,
  Package,
  Phone,
  Save,
  Store,
  User,
  Users,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { currentShop } from "./shopkeeperData";

const readProfile = () => {
  try {
    const saved = JSON.parse(
      localStorage.getItem("nearGoShopkeeperProfile") || "null"
    );

    return (
      saved || {
        ...currentShop,
        openTime: "9:00 AM",
        closeTime: "8:30 PM",
        description: "Your trusted neighbourhood electrical store.",
      }
    );
  } catch {
    return {
      ...currentShop,
      openTime: "9:00 AM",
      closeTime: "8:30 PM",
      description: "Your trusted neighbourhood electrical store.",
    };
  }
};

export default function ShopkeeperProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(readProfile);
  const [editing, setEditing] = useState(false);
  const [notice, setNotice] = useState("");

  const update = (key, value) => {
    setProfile((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const save = () => {
    localStorage.setItem(
      "nearGoShopkeeperProfile",
      JSON.stringify(profile)
    );

    setEditing(false);
    setNotice("Shop profile saved");

    window.setTimeout(() => setNotice(""), 2200);
  };

  const logout = () => {
    sessionStorage.removeItem("nearGoShopkeeperSession");
    navigate("/", { replace: true });
  };

  return (
    <main className="min-h-screen bg-[#f5f6f2] pb-[calc(5.8rem+env(safe-area-inset-bottom))] text-[#173d3b]">
      <header className="border-b border-[#dfe4dd] bg-[#fffdfa]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-full p-2 text-[#65737a] hover:bg-[#f0f1ed]"
              aria-label="Go back"
            >
              <ArrowLeft size={19} />
            </button>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f28a2e]">
                Shopkeeper account
              </p>

              <h1 className="text-2xl font-semibold tracking-[-0.05em]">
                Shop profile
              </h1>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setEditing((value) => !value)}
            className="flex items-center gap-2 text-sm font-bold text-[#b75d17]"
          >
            {editing ? <X size={16} /> : <Edit3 size={16} />}
            {editing ? "Cancel" : "Edit profile"}
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8 lg:px-12">
        {notice && (
          <div className="mb-5 flex items-center gap-2 border border-[#c9e0d3] bg-[#edf7f0] px-4 py-3 text-sm font-bold text-[#3b806a]">
            <Check size={17} />
            {notice}
          </div>
        )}

        <section className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="bg-[#113b52] p-7 text-white sm:p-9">
            <div className="flex h-16 w-16 items-center justify-center bg-[#f28a2e] text-2xl font-bold">
              <Store size={28} />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.05em]">
              {profile.name}
            </h2>

            <p className="mt-2 text-sm text-white/60">
              {profile.category}
            </p>

            <div className="mt-10 space-y-4 border-t border-white/20 pt-5 text-sm text-white/70">
              <p className="flex gap-3">
                <MapPin
                  size={17}
                  className="shrink-0 text-[#f28a2e]"
                />
                {profile.address}, {profile.city}
              </p>

              <p className="flex gap-3">
                <Phone
                  size={17}
                  className="shrink-0 text-[#f28a2e]"
                />
                {profile.phone}
              </p>

              <p className="flex gap-3">
                <Clock3
                  size={17}
                  className="shrink-0 text-[#f28a2e]"
                />
                {profile.openTime} – {profile.closeTime}
              </p>
            </div>
          </div>

          <section className="border border-[#e3e1d9] bg-[#fffdfa] p-6 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f28a2e]">
                  Public information
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  How customers see you
                </h2>
              </div>

              {editing && (
                <span className="bg-[#fff1e4] px-2 py-1 text-[10px] font-bold uppercase text-[#b75d17]">
                  Editing
                </span>
              )}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Field
                label="Shop name"
                value={profile.name}
                disabled={!editing}
                onChange={(value) => update("name", value)}
              />

              <Field
                label="Owner name"
                value={profile.ownerName}
                disabled={!editing}
                onChange={(value) => update("ownerName", value)}
              />

              <Field
                label="Phone number"
                value={profile.phone}
                disabled={!editing}
                onChange={(value) => update("phone", value)}
              />

              <Field
                label="Category"
                value={profile.category}
                disabled={!editing}
                onChange={(value) => update("category", value)}
              />

              <Field
                label="Address"
                value={profile.address}
                disabled={!editing}
                onChange={(value) => update("address", value)}
              />

              <Field
                label="City"
                value={profile.city}
                disabled={!editing}
                onChange={(value) => update("city", value)}
              />

              <Field
                label="Opening time"
                value={profile.openTime}
                disabled={!editing}
                onChange={(value) => update("openTime", value)}
              />

              <Field
                label="Closing time"
                value={profile.closeTime}
                disabled={!editing}
                onChange={(value) => update("closeTime", value)}
              />

              <label className="sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#7c8583]">
                  Shop description
                </span>

                <textarea
                  value={profile.description}
                  disabled={!editing}
                  onChange={(event) =>
                    update("description", event.target.value)
                  }
                  rows={3}
                  className="mt-2 w-full resize-none border-b border-[#cfd5d1] bg-transparent py-3 text-sm outline-none focus:border-[#f28a2e] disabled:text-[#7c8583]"
                />
              </label>
            </div>

            {editing && (
              <button
                type="button"
                onClick={save}
                className="mt-7 flex w-full items-center justify-center gap-2 bg-[#f28a2e] px-5 py-3 text-sm font-bold text-white"
              >
                <Save size={17} />
                Save shop profile
              </button>
            )}
          </section>
        </section>

        <section className="mt-7 grid gap-4 sm:grid-cols-2">
          <Preference
            title="Shop visibility"
            text="Show your shop and products to nearby customers."
            value={profile.isOpen}
            label={profile.isOpen ? "Visible" : "Hidden"}
            onClick={() => update("isOpen", !profile.isOpen)}
          />

          <Preference
            title="Accept reservations"
            text="Allow customers to reserve products for pickup."
            value={profile.acceptsReservations}
            label={
              profile.acceptsReservations ? "Enabled" : "Disabled"
            }
            onClick={() =>
              update(
                "acceptsReservations",
                !profile.acceptsReservations
              )
            }
          />
        </section>

        <section className="mt-7 flex flex-col justify-between gap-4 border border-[#ead4cd] bg-[#fff8f5] p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold text-[#7d4035]">
              Sign out of this shop account
            </p>

            <p className="mt-1 text-xs text-[#a45d4c]">
              Your inventory and shop details will remain saved.
            </p>
          </div>

          <button
            type="button"
            onClick={logout}
            className="flex items-center justify-center gap-2 border border-[#d7aaa0] px-4 py-2.5 text-sm font-bold text-[#a45d4c] hover:bg-[#f5e8e4]"
          >
            <LogOut size={16} />
            Log out
          </button>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#dfe3de] bg-[#fffdfa]/95 pb-[calc(0.45rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl">
        <div className="mx-auto flex max-w-xl items-center justify-around">
          <ShopNav
            icon={<Home />}
            label="Dashboard"
            onClick={() => navigate("/ShopkeeperDashboard")}
          />

          <ShopNav
            icon={<PackageIcon />}
            label="Inventory"
            onClick={() => navigate("/ShopkeeperInventory")}
          />

          <ShopNav
            icon={<Users />}
            label="Requests"
            onClick={() => navigate("/ShopkeeperReservations")}
          />

          <ShopNav
            icon={<User />}
            label="Profile"
            active
            onClick={() => navigate("/ShopkeeperProfile")}
          />
        </div>
      </nav>
    </main>
  );
}

const Field = ({ label, value, onChange, disabled }) => (
  <label>
    <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#7c8583]">
      {label}
    </span>

    <input
      value={value || ""}
      disabled={disabled}
      onChange={(event) => onChange(event.target.value)}
      className="mt-2 w-full border-b border-[#cfd5d1] bg-transparent py-3 text-sm outline-none focus:border-[#f28a2e] disabled:text-[#7c8583]"
    />
  </label>
);

const Preference = ({
  title,
  text,
  value,
  label,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center justify-between gap-4 border border-[#e3e1d9] bg-[#fffdfa] p-5 text-left"
  >
    <span>
      <b className="block text-sm">{title}</b>

      <small className="mt-1 block max-w-sm text-xs leading-5 text-[#7c8583]">
        {text}
      </small>
    </span>

    <span
      className={`shrink-0 px-2 py-1 text-[10px] font-bold uppercase ${
        value
          ? "bg-[#e5f1ec] text-[#3b806a]"
          : "bg-[#f5e8e4] text-[#a45d4c]"
      }`}
    >
      {label}
    </span>
  </button>
);

const ShopNav = ({
  icon,
  label,
  active,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative flex min-w-0 flex-1 flex-col items-center gap-1 py-1.5 ${
      active ? "text-[#113b52]" : "text-[#87908d]"
    }`}
  >
    {React.cloneElement(icon, {
      size: 21,
      strokeWidth: active ? 2.7 : 1.9,
    })}

    <span className="text-[10px] font-bold sm:text-[11px]">
      {label}
    </span>

    {active && (
      <span className="absolute -bottom-1 h-0.5 w-8 bg-[#f28a2e]" />
    )}
  </button>
);

const PackageIcon = (props) => <Package {...props} />;