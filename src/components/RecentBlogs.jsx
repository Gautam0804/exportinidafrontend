const blogs = [
  {
    title: "Top 6 Fabric Manufacturers in India",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=800",
  },
  {
    title: "Top 7 Cashew Nuts Manufacturers in India",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800",
  },
  {
    title: "Top 9 Turmeric Powder Manufacturers in India",
    image:
      "https://images.unsplash.com/photo-1625207336348-1d1c31a6bd36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9wJTIwOSUyMFR1cm1lcmljJTIwUG93ZGVyJTIwTWFudWZhY3R1cmVycyUyMGluJTIwSW5kaWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "How to Choose the Right Winter Clothes for Kids",
    image:
      "https://images.unsplash.com/photo-1679466944332-57c15a051ef3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG93JTIwdG8lMjBDaG9vc2UlMjB0aGUlMjBSaWdodCUyMFdpbnRlciUyMENsb3RoZXMlMjBmb3IlMjBLaWRzfGVufDB8fDB8fHww",
  },
];

export default function RecentBlogs() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {blogs.map((blog, i) => (
          <div key={i} className="cursor-pointer">
            <div className="rounded-md overflow-hidden border">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-36 object-cover"
              />
            </div>

            <p className="text-sm mt-2 text-gray-800 leading-snug">
              {blog.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}