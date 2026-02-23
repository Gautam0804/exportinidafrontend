import { NavLink } from "react-router-dom";

const staticCategories = [
  { name: "Home Supplies", slug: "home-supplies", icon: "🏠" },
  { name: "Agriculture", slug: "agriculture", icon: "🌾" },
  { name: "Food Product & Beverages", slug: "food-products", icon: "🍔" },
  { name: "Apparel & Fashion", slug: "apparel-fashion", icon: "👕" },
  { name: "Chemicals", slug: "chemicals", icon: "🧪" },
  { name: "Industrial Supplies", slug: "industrial", icon: "🏭" },
  { name: "Construction & Real Estate", slug: "construction", icon: "🏗️" },
  { name: "Furniture", slug: "furniture", icon: "🛋️" },
  { name: "Health & Beauty", slug: "health-beauty", icon: "💄" }
];

export default function CategorySidebar() {
  return (
    <div className="w-[260px] bg-white rounded-xl shadow-lg overflow-hidden border">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#5aa1d6] to-blue-600 text-white px-4 py-3 font-semibold flex items-center gap-2 text-sm tracking-wide">
        <span className="text-lg">☰</span>
        Top Categories
      </div>

      {/* CATEGORY LIST */}
      {staticCategories.map((cat) => (
        <NavLink
          key={cat.slug}
          to={`/category/${cat.slug}`}
          className={({ isActive }) =>
            `group relative flex justify-between items-center px-4 py-3 text-sm border-b
            transition-all duration-200
            ${isActive 
              ? "bg-blue-50 font-semibold text-blue-700" 
              : "hover:bg-gray-50"}`
          }
        >
          {/* Active Left Border */}
          <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-600 scale-y-0 group-[.active]:scale-y-100 transition-transform"></span>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-blue-100 transition">
              <span className="text-base">{cat.icon}</span>
            </div>
            <span>{cat.name}</span>
          </div>

          <span className="text-gray-400 text-lg group-hover:translate-x-1 transition-transform duration-200">
            ›
          </span>
        </NavLink>
      ))}

      {/* ALL CATEGORIES */}
      <NavLink
        to="/category/all"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 text-sm
          transition duration-200
          ${isActive 
            ? "bg-blue-50 font-semibold text-blue-700" 
            : "text-blue-600 hover:bg-gray-50"}`
        }
      >
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
          🔷
        </div>
        All Categories
      </NavLink>
    </div>
  );
}