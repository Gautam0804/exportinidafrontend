import { Link } from "react-router-dom";
import { useState } from "react";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!formData.name || !formData.company || !formData.mobile || !formData.email) {
      setError("All fields are required!");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      setError("Enter valid 10 digit mobile number");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Enter valid email address");
      return;
    }

    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setMessage("Account Created Successfully 🎉");
      setFormData({ name: "", company: "", mobile: "", email: "" });
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= HEADER ================= */}
      <div className="bg-white border-b">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-2xl font-bold text-blue-700">
            Exporters<span className="text-red-600">India</span>.com
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm justify-center">
            <span>
              Sales : <span className="text-red-600 font-medium">+91-9953717914</span>
            </span>
            <span>
              Support : <span className="text-red-600 font-medium">+91-9700318318</span>
            </span>
            <Link
              to="/"
              className="bg-orange-500 text-white px-4 py-1.5 rounded hover:bg-orange-600 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-[750px] lg:min-h-[650px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7')"
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-16 lg:py-0 h-full flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-[550px] text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Sell your products to millions of customer !
            </h2>

            <p className="text-lg mb-2">
              Register your Business with us Free
            </p>

            <p className="mb-10">
              Get started with ExportersIndia!
            </p>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 justify-center lg:justify-start">
              {[
                { title: "2 Crore+", desc: "Products/Services" },
                { title: "20 Lakh+", desc: "Suppliers" },
                { title: "50 Lakh+", desc: "Verified Buyers" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 text-xl mx-auto lg:mx-0">
                    ⭐
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white w-full max-w-[420px] rounded-md shadow-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold mb-3">
              Register your Company <span className="text-blue-600">FREE</span>
            </h3>

            {error && (
              <div className="bg-red-100 text-red-600 text-sm p-2 mb-3 rounded">
                {error}
              </div>
            )}

            {message && (
              <div className="bg-green-100 text-green-600 text-sm p-2 mb-3 rounded">
                {message}
              </div>
            )}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full mb-4 px-4 py-2 border rounded"
            />

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full mb-4 px-4 py-2 border rounded"
            />

            <div className="flex mb-4">
              <div className="px-3 py-2 border bg-gray-100 rounded-l text-sm">
                🇮🇳 +91
              </div>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border rounded-r"
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full mb-6 px-4 py-2 border rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded text-white font-medium transition ${
                loading
                  ? "bg-gray-400"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {loading ? "Creating..." : "Create Account →"}
            </button>
          </form>

        </div>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

          <h2 className="text-3xl font-semibold text-center mb-16">
            How ExportersIndia Works?
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* LEFT IMAGE */}
            <div className="w-full lg:w-[40%]">
              <div className="bg-white shadow-lg border p-4">
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
                  alt="Business Platform"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT STEPS */}
            <div className="flex-1 w-full">
              {[
                "Register on ExportersIndia",
                "Add Your Product & Services",
                "Your products/services will display online",
                "Receive Buyer Inquiries in your Folder",
                "Connect with buyer Instantly for further Deals"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-6 mb-8">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white border shadow px-6 py-4">
                    {step}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}