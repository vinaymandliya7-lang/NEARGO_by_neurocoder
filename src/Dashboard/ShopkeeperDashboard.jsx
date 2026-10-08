import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  BarChart3,
  Users,
  Tag,
  Settings,
  Bell,
  MapPin,
  Star,
  TrendingUp,
  TrendingDown,
  Eye,
  Search,
  Plus,
  ArrowUpRight,
  MoreHorizontal,
  Store,
  ChevronRight,
  Zap,
  CircleDollarSign,
  Boxes,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ShopkeeperDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const shopData = JSON.parse(
    sessionStorage.getItem("nearGoShopkeeperData") || "{}"
  );

  const shopName = shopData.shopName || "Sharma Electronics";
  const city = shopData.city || "Mandsaur";

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Products", icon: Package },
    { name: "Inventory", icon: Boxes },
    { name: "Orders", icon: ShoppingBag },
    { name: "Analytics", icon: BarChart3 },
    { name: "Customers", icon: Users },
    { name: "Offers", icon: Tag },
  ];

  const products = [
    {
      name: "iPhone Charger",
      category: "Mobile Accessories",
      price: 349,
      searches: 128,
      trend: "+18%",
      up: true,
    },
    {
      name: "Philips LED Bulb",
      category: "Electronics",
      price: 120,
      searches: 94,
      trend: "+9%",
      up: true,
    },
    {
      name: "USB Type-C Cable",
      category: "Accessories",
      price: 199,
      searches: 71,
      trend: "-3%",
      up: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F8FA] text-[#102F46]">
      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden sticky top-0 z-50 bg-[#08283F] px-5 py-4 text-white flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center"
        >
          <Menu size={22} />
        </button>

        <div className="text-center">
          <p className="text-[10px] tracking-[0.25em] text-[#7DE5E1] font-bold">
            NEAR-GO
          </p>
          <p className="font-bold text-sm">Shopkeeper</p>
        </div>

        <button className="relative w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF7A18] rounded-full" />
        </button>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 bottom-0 z-[70] w-[290px] bg-[#08283F] text-white p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <p className="text-[#55DAD6] text-xs tracking-[0.3em] font-black">
                    NEAR-GO
                  </p>
                  <p className="font-bold text-lg">Merchant Panel</p>
                </div>

                <button
                  onClick={() => setSidebarOpen(false)}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"
                >
                  <X size={19} />
                </button>
              </div>

              <SidebarItems
                items={navItems}
                active={active}
                setActive={setActive}
                close={() => setSidebarOpen(false)}
              />

              <div className="absolute bottom-6 left-6 right-6">
                <button className="w-full flex items-center gap-3 p-3 text-white/60">
                  <Settings size={19} />
                  Settings
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="flex">
        {/* ================= DESKTOP SIDEBAR ================= */}
        <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[245px] bg-[#08283F] text-white p-5 flex-col z-40">
          <div className="px-3 py-5 mb-7">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#18B8B4] flex items-center justify-center shadow-lg">
                <Store size={22} />
              </div>

              <div>
                <p className="font-black tracking-wide">NEAR-GO</p>
                <p className="text-[10px] text-white/45 uppercase tracking-widest">
                  Merchant
                </p>
              </div>
            </div>
          </div>

          <SidebarItems
            items={navItems}
            active={active}
            setActive={setActive}
          />

          <div className="mt-auto">
            <div className="p-4 rounded-3xl bg-white/[0.06] border border-white/[0.08] mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF7A18] flex items-center justify-center font-bold">
                  {shopName.charAt(0)}
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold truncate">{shopName}</p>
                  <p className="text-[11px] text-white/40">{city}</p>
                </div>
              </div>
            </div>

            <button className="w-full flex items-center gap-3 px-3 py-3 text-white/50 hover:text-white transition">
              <Settings size={18} />
              <span className="text-sm">Settings</span>
            </button>
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="w-full lg:ml-[245px]">
          {/* DESKTOP TOPBAR */}
          <header className="hidden lg:flex h-[82px] bg-white border-b border-[#E5EDF1] px-8 items-center justify-between">
            <div>
              <p className="text-xs text-[#7890A2]">
                {getGreeting()}
              </p>
              <h1 className="text-xl font-black text-[#102F46]">
                Good to see you, {shopData.ownerName || "Shopkeeper"} 👋
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative w-11 h-11 rounded-2xl border border-[#E2EAF0] flex items-center justify-center">
                <Bell size={19} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF7A18] rounded-full" />
              </button>

              <div className="h-9 w-px bg-[#E4EBEF]" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#18B8B4] text-white flex items-center justify-center font-black">
                  {shopName.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-bold">{shopName}</p>
                  <p className="text-[11px] text-[#8CA0B3] flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Shop Online
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* CONTENT */}
          <div className="p-4 sm:p-6 lg:p-8 max-w-[1500px] mx-auto">
            {/* ================= HERO ================= */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-[30px] bg-[#08283F] p-6 sm:p-8 text-white"
            >
              {/* decorative circles */}
              <div className="absolute -right-16 -top-20 w-64 h-64 rounded-full bg-[#18B8B4]/20 blur-2xl" />
              <div className="absolute right-24 bottom-[-100px] w-56 h-56 rounded-full bg-[#FF7A18]/20 blur-3xl" />

              <div className="relative z-10 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-7">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18B8B4]/10 border border-[#18B8B4]/20 text-[#7DE5E1] text-xs font-bold mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#18B8B4] animate-pulse" />
                    YOUR SHOP IS LIVE
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-2xl">
                    Turn nearby searches
                    <span className="text-[#18B8B4]"> into customers.</span>
                  </h2>

                  <p className="text-white/55 mt-4 max-w-xl text-sm sm:text-base leading-relaxed">
                    Customers are discovering products around them.
                    Keep your prices and stock updated to appear higher
                    in their local search.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <button className="px-5 py-3 rounded-full bg-[#FF7A18] font-bold text-sm flex items-center gap-2 hover:scale-[1.02] transition">
                      <Plus size={17} />
                      Add Product
                    </button>

                    <button className="px-5 py-3 rounded-full bg-white/10 border border-white/10 font-bold text-sm flex items-center gap-2">
                      <Eye size={17} />
                      View Shop
                    </button>
                  </div>
                </div>

                {/* SCORE */}
                <div className="w-full xl:w-[260px] bg-white/[0.07] border border-white/10 rounded-[25px] p-5 backdrop-blur">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-xs text-white/50">
                      Shop visibility
                    </span>

                    <TrendingUp
                      size={18}
                      className="text-[#55DAD6]"
                    />
                  </div>

                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black">86</span>
                    <span className="text-white/40 mb-2">/100</span>
                  </div>

                  <div className="h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "86%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-[#18B8B4] rounded-full"
                    />
                  </div>

                  <p className="text-xs text-white/40 mt-3">
                    You're performing better than 72% of nearby shops.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* ================= STATS ================= */}
            <section className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mt-5">
              <StatCard
                icon={Eye}
                label="Shop Views"
                value="1,284"
                change="+18.4%"
                positive
              />

              <StatCard
                icon={Search}
                label="Product Searches"
                value="342"
                change="+12.8%"
                positive
              />

              <StatCard
                icon={ShoppingBag}
                label="Orders"
                value="86"
                change="+7.2%"
                positive
              />

              <StatCard
                icon={CircleDollarSign}
                label="Revenue"
                value="₹42.8K"
                change="+21.4%"
                positive
              />
            </section>

            {/* ================= MAIN GRID ================= */}
            <section className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-5 mt-5">
              {/* SALES GRAPH */}
              <div className="bg-white rounded-[28px] border border-[#E6EDF1] p-5 sm:p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-[#8CA0B3] font-semibold">
                      REVENUE PERFORMANCE
                    </p>
                    <div className="flex items-end gap-3 mt-2">
                      <h3 className="text-3xl font-black">₹42,860</h3>
                      <span className="text-xs font-bold text-green-600 mb-1">
                        +21.4%
                      </span>
                    </div>
                  </div>

                  <button className="px-3 py-2 rounded-xl bg-[#F4F8FA] text-xs font-bold">
                    This week
                  </button>
                </div>

                {/* fake chart */}
                <div className="relative h-[220px] mt-7">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[40, 30, 20, 10, 0].map((n) => (
                      <div
                        key={n}
                        className="border-t border-dashed border-[#E8EEF2]"
                      />
                    ))}
                  </div>

                  <svg
                    viewBox="0 0 700 220"
                    className="absolute inset-0 w-full h-full overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id="area"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#18B8B4"
                          stopOpacity=".25"
                        />
                        <stop
                          offset="100%"
                          stopColor="#18B8B4"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 175 C70 150 80 165 140 125 S220 160 270 110 S350 120 400 95 S480 130 530 75 S620 105 700 40 V220 H0Z"
                      fill="url(#area)"
                    />

                    <path
                      d="M0 175 C70 150 80 165 140 125 S220 160 270 110 S350 120 400 95 S480 130 530 75 S620 105 700 40"
                      fill="none"
                      stroke="#18B8B4"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="flex justify-between text-[10px] text-[#91A2B1] mt-2">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>

              {/* DEMAND */}
              <div className="bg-white rounded-[28px] border border-[#E6EDF1] p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#8CA0B3] font-semibold">
                      LOCAL DEMAND
                    </p>
                    <h3 className="text-xl font-black mt-1">
                      What customers want
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#FFF3E9] text-[#FF7A18] flex items-center justify-center">
                    <Zap size={19} />
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  {[
                    ["iPhone Charger", "128 searches", "🔥"],
                    ["LED Bulbs", "94 searches", "🔥"],
                    ["Type-C Cable", "71 searches", "↗"],
                    ["Power Bank", "58 searches", "↗"],
                  ].map(([name, count, icon], i) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-[#F7FAFB]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-lg">
                        {icon}
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-bold">{name}</p>
                        <p className="text-[11px] text-[#8CA0B3]">
                          {count} nearby
                        </p>
                      </div>

                      <ChevronRight
                        size={17}
                        className="text-[#A6B5C0]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= MARKET PULSE ================= */}
            <section className="bg-white rounded-[28px] border border-[#E6EDF1] p-5 sm:p-6 shadow-sm mt-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-[#8CA0B3] font-semibold">
                    MARKET PULSE
                  </p>
                  <h3 className="text-xl font-black mt-1">
                    Your products vs local demand
                  </h3>
                </div>

                <button className="text-sm font-bold text-[#18AAA7] flex items-center gap-1">
                  Manage products
                  <ArrowUpRight size={16} />
                </button>
              </div>

              <div className="overflow-x-auto mt-5">
                <div className="min-w-[650px]">
                  <div className="grid grid-cols-[2fr_1fr_1fr_1fr_40px] px-4 py-3 text-[10px] uppercase tracking-wider text-[#9AAAB6] font-bold">
                    <span>Product</span>
                    <span>Price</span>
                    <span>Searches</span>
                    <span>Trend</span>
                    <span />
                  </div>

                  {products.map((product) => (
                    <div
                      key={product.name}
                      className="grid grid-cols-[2fr_1fr_1fr_1fr_40px] items-center px-4 py-4 border-t border-[#EEF2F4]"
                    >
                      <div>
                        <p className="text-sm font-bold">
                          {product.name}
                        </p>
                        <p className="text-[11px] text-[#9AAAB6]">
                          {product.category}
                        </p>
                      </div>

                      <p className="font-black">
                        ₹{product.price}
                      </p>

                      <p className="text-sm font-semibold">
                        {product.searches}
                      </p>

                      <div
                        className={`flex items-center gap-1 text-xs font-bold ${
                          product.up
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {product.up ? (
                          <TrendingUp size={15} />
                        ) : (
                          <TrendingDown size={15} />
                        )}
                        {product.trend}
                      </div>

                      <button className="w-9 h-9 rounded-xl hover:bg-[#F4F8FA] flex items-center justify-center">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= BOTTOM CARDS ================= */}
            <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
              {/* RATING */}
              <div className="bg-[#FF7A18] text-white rounded-[28px] p-6 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-10 w-40 h-40 rounded-full bg-white/10" />

                <p className="text-xs text-white/60 font-bold">
                  SHOP RATING
                </p>

                <div className="flex items-end gap-3 mt-4">
                  <span className="text-5xl font-black">4.8</span>
                  <div className="mb-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((x) => (
                        <Star
                          key={x}
                          size={15}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="text-[11px] text-white/60 mt-1">
                      128 customer reviews
                    </p>
                  </div>
                </div>

                <button className="mt-6 text-sm font-bold flex items-center gap-1">
                  View reviews <ArrowUpRight size={15} />
                </button>
              </div>

              {/* INVENTORY */}
              <div className="bg-[#18B8B4] text-white rounded-[28px] p-6">
                <p className="text-xs text-white/60 font-bold">
                  INVENTORY HEALTH
                </p>

                <div className="flex items-end gap-2 mt-4">
                  <span className="text-5xl font-black">92%</span>
                  <span className="text-sm mb-2 text-white/60">
                    healthy
                  </span>
                </div>

                <div className="h-2 bg-white/20 rounded-full mt-5">
                  <div className="h-full w-[92%] bg-white rounded-full" />
                </div>

                <p className="text-xs text-white/60 mt-4">
                  7 products need restocking soon.
                </p>
              </div>

              {/* CUSTOMERS */}
              <div className="bg-white border border-[#E6EDF1] rounded-[28px] p-6">
                <p className="text-xs text-[#8CA0B3] font-bold">
                  CUSTOMER ACTIVITY
                </p>

                <h3 className="text-3xl font-black mt-3">
                  186
                </h3>

                <p className="text-xs text-[#8CA0B3] mt-1">
                  customers interacted today
                </p>

                <div className="flex items-center gap-2 mt-5 text-green-600 text-xs font-bold">
                  <TrendingUp size={15} />
                  14.8% from yesterday
                </div>
              </div>
            </section>

            {/* MOBILE BOTTOM SPACE */}
            <div className="h-8" />
          </div>
        </main>
      </div>
    </div>
  );
};

/* ================= COMPONENTS ================= */

const SidebarItems = ({ items, active, setActive, close }) => (
  <nav className="space-y-1">
    {items.map(({ name, icon: Icon }) => {
      const selected = active === name;

      return (
        <button
          key={name}
          onClick={() => {
            setActive(name);
            close?.();
          }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition ${
            selected
              ? "bg-[#18B8B4] text-white shadow-lg shadow-[#18B8B4]/10"
              : "text-white/45 hover:bg-white/[0.05] hover:text-white"
          }`}
        >
          <Icon size={18} />
          {name}
        </button>
      );
    })}
  </nav>
);

const StatCard = ({
  icon: Icon,
  label,
  value,
  change,
  positive,
}) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="bg-white rounded-[24px] border border-[#E6EDF1] p-4 sm:p-5 shadow-sm"
  >
    <div className="flex items-start justify-between">
      <div className="w-10 h-10 rounded-xl bg-[#F0FAFA] text-[#18AAA7] flex items-center justify-center">
        <Icon size={19} />
      </div>

      <div
        className={`text-[10px] font-bold px-2 py-1 rounded-full ${
          positive
            ? "bg-green-50 text-green-600"
            : "bg-red-50 text-red-500"
        }`}
      >
        {change}
      </div>
    </div>

    <p className="text-[11px] text-[#8CA0B3] font-semibold mt-4">
      {label}
    </p>

    <p className="text-2xl sm:text-3xl font-black mt-1">
      {value}
    </p>
  </motion.div>
);

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

export default ShopkeeperDashboard;