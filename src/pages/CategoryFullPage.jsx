import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CategoryFullPage() {
  const { id } = useParams();

  return (
    <>
      <Header />

      <div className="bg-gray-100 py-10">
        <div className="max-w-[1300px] mx-auto px-4">

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-4 capitalize">
              {id === "all" ? "All Categories" : id.replace(/-/g, " ")}
            </h1>

            <p className="text-gray-600 mb-6">
              Showing complete details for category: {id}
            </p>

            {/* Example content */}
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-gray-100 p-4 rounded">Product 1</div>
              <div className="bg-gray-100 p-4 rounded">Product 2</div>
              <div className="bg-gray-100 p-4 rounded">Product 3</div>
              <div className="bg-gray-100 p-4 rounded">Product 4</div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}