const countries = [
  { name: "India", code: "IN" },
  { name: "United States", code: "US" },
  { name: "Canada", code: "CA" },
  { name: "Malaysia", code: "MY" },
  { name: "Singapore", code: "SG" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Australia", code: "AU" },
];

export default function FindSuppliersByCountry() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Find Suppliers by Country
      </h2>

      <div className="flex flex-wrap gap-6">
        {countries.map((country, i) => (
          <div
            key={i}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
              alt={country.name}
              className="w-16 h-16 rounded-full border object-cover"
            />
            <p className="text-sm mt-2 text-gray-700">
              {country.name}
            </p>
          </div>
        ))}

        {/* More button */}
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="w-16 h-16 rounded-full border flex items-center justify-center text-xl text-gray-500">
            …
          </div>
          <p className="text-sm mt-2 text-gray-700">
            More
          </p>
        </div>
      </div>
    </section>
  );
}