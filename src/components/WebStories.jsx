const stories = [
  {
    title: "Top 5 Curtain Trends For 2026",
    date: "February 18, 2026",
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=800",
  },
  {
    title: "Top Casual Shirt Trends For Men In 2026",
    date: "February 18, 2026",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800",
  },
  {
    title: "Top 5 Herbal Powders And Their Current Market Price",
    date: "February 16, 2026",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=800",
  },
  {
    title: "Best Ceiling Fan Price Under 1000 In India – Budget Picks 2026",
    date: "February 16, 2026",
    image:
      "https://media.istockphoto.com/id/1205875924/photo/ceiling-fan-is-mounted-on-the-ceiling-of-a-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=bYrXTGxu6FgLcmZB6VtKghHkFEbnSI0oq1Yvfy58KSw=",
  },
  {
    title: "How To Choose The Right T-Shirt For Every Occasion",
    date: "February 14, 2026",
    image:
      "https://plus.unsplash.com/premium_photo-1690820318448-f2f7e938cb58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SG93JTIwVG8lMjBDaG9vc2UlMjBUaGUlMjBSaWdodCUyMFQtU2hpcnQlMjBGb3IlMjBFdmVyeSUyME9jY2FzaW9ufGVufDB8fDB8fHww",
  },
];

export default function WebStories() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Web Stories
        </h2>

        {/* Stories row */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {stories.map((story, index) => (
            <div
              key={index}
              className="min-w-[220px] h-[360px] rounded-xl overflow-hidden relative shadow-sm flex-shrink-0"
            >
              {/* Image */}
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-semibold leading-snug mb-1">
                  {story.title}
                </p>
                <p className="text-xs text-gray-200">
                  {story.date}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}