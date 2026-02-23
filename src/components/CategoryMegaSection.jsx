export default function CategoryMegaSection({
  title,
  leftImage,
  highlights,
  categories,
}) {
  return (
    <section className="bg-white border rounded-lg p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <span className="h-[1px] flex-1 bg-gray-200 ml-4" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* LEFT IMAGE PANEL */}
        <div className="col-span-12 lg:col-span-4 relative rounded-lg overflow-hidden min-h-[280px]">
          <img
            src={leftImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 p-5 flex flex-col justify-between">
            <div className="text-white text-sm space-y-2">
              {highlights.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>

            <button className="bg-red-600 hover:bg-red-700 transition text-white text-sm px-5 py-2 rounded-md w-fit">
              View All
            </button>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={i} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ title, items, img }) {
  return (
    <div className="group border rounded-lg p-4 flex justify-between gap-3 hover:shadow-md hover:-translate-y-[2px] transition bg-white">
      <div>
        <h3 className="font-medium text-gray-900 mb-2 flex items-center justify-between">
          {title}
          <span className="text-blue-600 group-hover:translate-x-1 transition">
            ➜
          </span>
        </h3>

        <ul className="space-y-1 text-sm text-blue-600">
          {items.map((item, i) => (
            <li key={i} className="hover:underline cursor-pointer">
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