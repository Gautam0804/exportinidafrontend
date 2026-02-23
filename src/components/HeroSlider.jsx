import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "India’s Largest B2B Marketplace",
    subtitle: "Connect with verified exporters & manufacturers",
    btn: "Explore Products",
    bg: "#0b5ed7"
  },
  {
    title: "Buy Directly from Manufacturers",
    subtitle: "Best prices, trusted suppliers",
    btn: "Post Buy Requirement",
    bg: "#198754"
  },
  {
    title: "Grow Your Business Globally",
    subtitle: "Join India’s fastest growing B2B platform",
    btn: "Join Free",
    bg: "#6f42c1"
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleButtonClick = () => {
    const buttonText = slides[index].btn;

    if (buttonText === "Join Free") {
      navigate("/join");
    } else if (buttonText === "Explore Products") {
      navigate("/category/all");
    } else if (buttonText === "Post Buy Requirement") {
      navigate("/post"); // optional route
    }
  };

  return (
    <div style={{ ...styles.slider, background: slides[index].bg }}>
      
      {/* Left Arrow */}
      <button style={styles.leftArrow} onClick={prevSlide}>
        ❮
      </button>

      {/* Content */}
      <div style={styles.content}>
        <h1>{slides[index].title}</h1>
        <p>{slides[index].subtitle}</p>

        <button style={styles.btn} onClick={handleButtonClick}>
          {slides[index].btn}
        </button>
      </div>

      {/* Right Arrow */}
      <button style={styles.rightArrow} onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div style={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              ...styles.dot,
              background: i === index ? "#fff" : "rgba(255,255,255,0.5)"
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  slider: {
    position: "relative",
    color: "#fff",
    padding: "70px 60px",
    borderRadius: "12px",
    transition: "all 0.6s ease",
    overflow: "hidden"
  },
  content: {
    maxWidth: "700px"
  },
  btn: {
    marginTop: "20px",
    padding: "12px 28px",
    border: "none",
    borderRadius: "25px",
    background: "#fff",
    color: "#000",
    fontWeight: "600",
    cursor: "pointer"
  },
  leftArrow: {
    position: "absolute",
    top: "50%",
    left: "15px",
    transform: "translateY(-50%)",
    fontSize: "28px",
    background: "rgba(255,255,255,0.3)",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    color: "#fff"
  },
  rightArrow: {
    position: "absolute",
    top: "50%",
    right: "15px",
    transform: "translateY(-50%)",
    fontSize: "28px",
    background: "rgba(255,255,255,0.3)",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    color: "#fff"
  },
  dots: {
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px"
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer"
  }
};