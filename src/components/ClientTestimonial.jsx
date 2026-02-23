import { useEffect, useState } from "react";

const testimonials = [
  {
    message:
      "Ever since I registered with exportersindia, they have been there for me. They have assisted me with the smallest of problems.",
    name: "Mr. Tejash Patel",
    company: "Radhe Polypack, India",
  },
  {
    message:
      "The portal is quite effective. I could get a lot of orders throughout the world. I am one happy client of exportersindia.",
    name: "Mr. Prashant Bothra",
    company: "Shree Balaji Equipments Pvt Ltd., India",
  },
  {
    message:
      "Exportersindia and the related teams worked quickly to resolve our issue efficiently with our website.",
    name: "Mr. Dinesh Patel",
    company: "Sparkle Industries, India",
  },
  {
    message:
      "Exportersindia.com is one of the B2B sites I have ever met. I appreciate your service and promise to bring more friends.",
    name: "Mr. Mickeybrown Marley",
    company: "Globalhouse Co. Ltd, United States",
  },
];

export default function ClientTestimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-8">
          Client Testimonial
        </h2>

        {/* VIEWPORT */}
        <div className="overflow-hidden">
          {/* SLIDER TRACK */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / 3)}%)`,
              width: `${(testimonials.length * 100) / 3}%`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="w-full md:w-1/3 px-3 flex-shrink-0"
              >
                <div className="bg-white p-6 border border-gray-200 shadow-sm h-full">
                  <div className="text-orange-500 text-2xl mb-3">“</div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.message}
                  </p>

                  <p className="font-semibold text-sm text-gray-900">
                    {item.name},
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-5 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === i ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}