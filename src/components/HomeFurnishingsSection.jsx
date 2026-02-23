export default function HomeFurnishingsSection() {
  return (
    <section className="bg-white border rounded-lg p-5">
      {/* SECTION HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-gray-900">
          Home Furnishings
        </h2>
        <span className="h-[1px] flex-1 bg-gray-200 ml-4" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* LEFT IMAGE PANEL */}
        <div className="col-span-12 lg:col-span-4 relative rounded-lg overflow-hidden min-h-[280px]">
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
            alt="Home Furnishings"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 p-5 flex flex-col justify-between">
            <div className="text-white text-sm space-y-2 leading-relaxed">
              <p>PU Foam, Spring & Coir Mattresses</p>
              <p>Drapes and Curtains</p>
              <p>Kitchen Linens & Textiles</p>
              <p>Tablecloths & Placemats</p>
            </div>

            <button className="bg-red-600 hover:bg-red-700 transition text-white text-sm px-5 py-2 rounded-md w-fit">
              View All
            </button>
          </div>
        </div>

        {/* RIGHT CATEGORY GRID */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <CategoryCard
            title="Blankets & Quilts"
            items={[
              "Blankets",
              "Quilts",
              "Dohar Set",
              "Thermal Blankets",
              "Woollen Blanket",
            ]}
            img="https://images.unsplash.com/photo-1743215929645-100ab204115d?w=600&auto=format&fit=crop&q=60"
          />

          <CategoryCard
            title="Bed Linen & Bedspreads"
            items={[
              "Duvets & Comforters",
              "Comforter Set",
              "Bed Comforters",
              "Duvet Covers",
              "Bed Covers",
            ]}
            img="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          />

          <CategoryCard
            title="Carpets and Rugs"
            items={[
              "Wool Rugs",
              "Wool Carpets",
              "Hand Woven Rugs",
              "Floor Carpet",
              "Floor Rugs",
            ]}
            img="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
          />

          <CategoryCard
            title="Door Mats & Bath Mats"
            items={[
              "Floor Mats",
              "Coir Mat",
              "Jute Mats",
              "Polypropylene Mat",
              "Printed Mats",
            ]}
            img="https://images.unsplash.com/photo-1607082349566-187342175e2f"
          />

          <CategoryCard
            title="Drapes and Curtains"
            items={[
              "Designer Curtains",
              "Printed Curtains",
              "Cotton Curtains",
              "PVC Curtains",
              "Window Curtains",
            ]}
            img="https://images.unsplash.com/photo-1634122175668-36e23d073064?w=600&auto=format&fit=crop&q=60"
          />

          <CategoryCard
            title="Kitchen Linens & Textiles"
            items={[
              "Kitchen Towel Set",
              "Kitchen Rolls",
              "Dishcloths",
              "Kitchen Napkins",
              "Oven Mitts",
            ]}
            img="https://images.unsplash.com/photo-1675279200694-8529c73b1fd0?w=600&auto=format&fit=crop&q=60"
          />
        </div>
      </div>
    </section>
  );
}

/* ======================
   SUB CATEGORY CARD
====================== */
function CategoryCard({ title, items, img }) {
  return (
    <div className="group border rounded-lg p-4 flex justify-between gap-3 bg-white hover:shadow-md hover:-translate-y-[2px] transition">
      <div>
        <h3 className="font-medium text-gray-900 mb-2 flex items-center justify-between">
          {title}
          <span className="text-blue-600 group-hover:translate-x-1 transition">
            ➜
          </span>
        </h3>

        <ul className="space-y-1 text-sm text-blue-600">
          {items.map((item, i) => (
            <li
              key={i}
              className="hover:underline cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <img
        src={img}
        alt={title}
        className="w-20 h-20 object-cover rounded-md border group-hover:scale-105 transition"
      />
    </div>
  );
}