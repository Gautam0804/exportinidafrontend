import { useState } from "react";

export default function PostRequirementPage() {
  const [formData, setFormData] = useState({
    product: "",
    category: "",
    quantity: "",
    budget: "",
    location: "",
    urgency: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Requirement Submitted Successfully ✅");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Post Your Buying Requirement
          </h1>
          <p className="text-gray-500 mt-3 text-lg">
            Get quotes from verified suppliers quickly and easily.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-lg rounded-2xl p-10 border border-gray-200">

          <form onSubmit={handleSubmit} className="space-y-12">

            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-8 text-center">
                Basic Information
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                    required
                  >
                    <option value="">Select Category</option>
                    <option>Electronics</option>
                    <option>Machinery</option>
                    <option>Clothing</option>
                    <option>Construction</option>
                    <option>Other</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Requirement Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-8 text-center">
                Requirement Details
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Quantity Required *
                  </label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Budget (₹) *
                  </label>
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                    required
                  />
                </div>

              </div>

              <div className="mt-8">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Delivery Location *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                  required
                />
              </div>

              <div className="mt-8">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Urgency *
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) =>
                    setFormData({ ...formData, urgency: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                  required
                >
                  <option value="">Select Urgency</option>
                  <option>Immediate (1-3 days)</option>
                  <option>Within a week</option>
                  <option>Within a month</option>
                </select>
              </div>

              <div className="mt-8">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Requirement Description *
                </label>
                <textarea
                  rows="4"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                  required
                />
              </div>

            </div>

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-12 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Submit Requirement
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}