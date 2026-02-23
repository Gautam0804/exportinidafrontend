import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { id } = useParams();

  const name =
    id && id !== "all"
      ? id.replace(/-/g, " ")
      : "All Categories";

  return (
    <>
      <h2 className="text-2xl font-bold capitalize">
        {name}
      </h2>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-4 rounded shadow">
          {name} Product 1
        </div>
        <div className="bg-white p-4 rounded shadow">
          {name} Product 2
        </div>
        <div className="bg-white p-4 rounded shadow">
          {name} Product 3
        </div>
      </div>
    </>
  );
}