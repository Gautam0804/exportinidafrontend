const regions = [
  { name: "New Delhi", icon: "🏛️" },
  { name: "Mumbai", icon: "🏙️" },
  { name: "Gurgaon", icon: "🏢" },
  { name: "Noida", icon: "🏬" },
  { name: "Bangalore", icon: "🏗️" },
  { name: "Ahmedabad", icon: "🏛️", active: true },
  { name: "Kolkata", icon: "🏰" },
  { name: "Chennai", icon: "🛕" },
];

export default function FindSuppliersByRegion() {
  return (
    <section className="bg-white border rounded-lg p-5">
      <h2 className="text-xl font-semibold text-gray-900 mb-5">
        Find Suppliers by Region
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {regions.map((region, i) => (
          <div
            key={i}
            className={`border rounded-md p-4 text-center cursor-pointer transition
              ${
                region.active
                  ? "border-blue-600 text-blue-600"
                  : "hover:shadow-md"
              }`}
          >
            <div className="text-3xl mb-2">{region.icon}</div>
            <p className="text-sm font-medium">{region.name}</p>
          </div>
        ))}

        {/* MORE */}
        <div className="border rounded-md p-4 text-center cursor-pointer hover:shadow-md">
          <div className="text-2xl mb-2">…</div>
          <p className="text-sm font-medium">More Cities</p>
        </div>
      </div>
    </section>
  );
}