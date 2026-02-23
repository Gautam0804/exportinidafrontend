import React from "react";

const countries = [
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
  { name: "Malaysia", flag: "https://flagcdn.com/w40/my.png" },
  { name: "Singapore", flag: "https://flagcdn.com/w40/sg.png" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
  { name: "Australia", flag: "https://flagcdn.com/w40/au.png" }
];

export default function SuppliersByCountry() {
  return (
    <section className="bg-white rounded-xl p-6 mt-8">
      <h2 className="text-xl font-semibold mb-5">
        Find Suppliers by Country
      </h2>

      <div className="flex flex-wrap gap-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-sm cursor-pointer hover:text-blue-600 transition"
          >
            <div className="w-14 h-14 rounded-full border flex items-center justify-center">
              <img
                src={country.flag}
                alt={country.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="mt-2">{country.name}</span>
          </div>
        ))}

        {/* More Countries */}
        <div className="flex flex-col items-center text-sm cursor-pointer">
          <div className="w-14 h-14 rounded-full border flex items-center justify-center text-xl">
            …
          </div>
          <span className="mt-2">More Countries</span>
        </div>
      </div>
    </section>
  );
}