export default function CategoryProducts({ category }) {
  const name =
    category === "all"
      ? "All Categories"
      : category.replace(/-/g, " ");

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {name}
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded">
          {name} Product 1
        </div>
        <div className="bg-gray-100 p-4 rounded">
          {name} Product 2
        </div>
        <div className="bg-gray-100 p-4 rounded">
          {name} Product 3
        </div>
      </div>
    </div>
  );
}