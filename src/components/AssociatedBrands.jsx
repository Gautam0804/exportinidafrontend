import React from "react";

const brands = [
  { name: "Tata Steel", logo: "https://logo.clearbit.com/tatasteel.com" },
  { name: "SEGA", logo: "https://logo.clearbit.com/sega.com" },
  { name: "Nilkamal", logo: "https://logo.clearbit.com/nilkamal.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
  { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
  { name: "Sony", logo: "https://logo.clearbit.com/sony.com" },
  { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
  { name: "LG", logo: "https://logo.clearbit.com/lg.com" },

  // Working placeholder examples
  { name: "Victory", logo: "https://placehold.co/200x120?text=Victory" },
  { name: "JWI", logo: "https://placehold.co/200x120?text=JWI" },
  { name: "Bodycare", logo: "https://placehold.co/200x120?text=Bodycare" },
  { name: "Fun2", logo: "https://placehold.co/200x120?text=Fun2" },
  { name: "Salzer", logo: "https://placehold.co/200x120?text=Salzer" },
  { name: "Naulakha", logo: "https://placehold.co/200x120?text=Naulakha" }
];

export default function AssociatedBrands() {
  return (
    <section className="bg-white rounded-xl p-8 shadow-sm">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Associated Premium Brands
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="border rounded-xl h-24 flex items-center justify-center bg-white hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
              className="max-h-12 max-w-[120px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}