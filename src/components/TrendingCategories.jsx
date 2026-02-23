const items = [
  {
    name: "Water Cooler",
    img: "https://images.unsplash.com/photo-1643324520514-8ed019f29561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJjb29sZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Fruit Juice",
    img: "https://plus.unsplash.com/premium_photo-1663091544172-794c537af00c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXQlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Essential Oil",
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
  },
  {
    name: "T Shirts",
    img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
  },
  {
    name: "Dry Fruits",
    img: "https://images.unsplash.com/photo-1607664608695-45aaa6d621fc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bakery Products",
    img: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ceiling Fans",
    img: "https://images.unsplash.com/photo-1621905252472-943afaa20e20",
  },
  {
    name: "Dietary Supplements",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
];

export default function TrendingCategories() {
  return (
    <section className="bg-white p-6 rounded-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Trending Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="group border rounded-lg p-4 text-center cursor-pointer 
                       transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-md bg-gray-100">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-28 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <p className="mt-3 text-sm font-medium text-blue-700">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}