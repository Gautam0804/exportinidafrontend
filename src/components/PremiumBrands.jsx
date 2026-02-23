const brands = [
  {
    name: "Link",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Link_logo.png/320px-Link_logo.png",
  },
  {
    name: "Tata Steel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tata_Steel_Logo.svg/320px-Tata_Steel_Logo.svg.png",
  },
  {
    name: "Sega",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sega_logo.svg/320px-Sega_logo.svg.png",
  },
  {
    name: "Victory",
    logo: "https://via.placeholder.com/200x120?text=Victory",
  },
  {
    name: "JWI",
    logo: "https://via.placeholder.com/200x120?text=JWI",
  },
  {
    name: "Bodycare",
    logo: "https://via.placeholder.com/200x120?text=Bodycare",
  },
  {
    name: "Fun2",
    logo: "https://via.placeholder.com/200x120?text=Fun2",
  },
  {
    name: "Salzer",
    logo: "https://via.placeholder.com/200x120?text=Salzer",
  },
  {
    name: "Nilkamal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Nilkamal_logo.svg/320px-Nilkamal_logo.svg.png",
  },
  {
    name: "Naulakha",
    logo: "https://via.placeholder.com/200x120?text=Naulakha",
  },
];

export default function PremiumBrands() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Associated Premium Brands
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="border bg-white rounded-md p-4 flex items-center justify-center hover:shadow-sm transition"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}