
import { useNavigate } from "react-router-dom";

export default function HomeCategorySection({
  title,
  category,
  sideImage,
  highlights,
  products
}) {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      {/* LEFT SIDE IMAGE */}
      <div
        style={{
          ...styles.left,
          backgroundImage: `url(${sideImage})`
        }}
      >
        <h2 style={styles.title}>{title}</h2>

        <ul style={styles.list}>
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <button
          style={styles.viewAll}
          onClick={() => navigate(`/category/${category}`)}
        >
          View All
        </button>
      </div>

      {/* RIGHT PRODUCTS */}
      <div style={styles.right}>
        {products.map((product, index) => (
          <div key={index} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"   // ✅ SMALL IMAGE
            />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    display: "flex",
    gap: "20px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px"
  },

  /* LEFT SIDE IMAGE */
  left: {
    width: "240px",
    height: "260px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "8px",
    padding: "15px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  title: {
    fontSize: "20px",
    fontWeight: "600"
  },

  list: {
    paddingLeft: "18px",
    fontSize: "14px"
  },

  viewAll: {
    background: "#e53935",
    color: "#fff",
    border: "none",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "4px"
  },

  /* RIGHT PRODUCTS */
  right: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px"
  },

  card: {
    textAlign: "center",
    border: "1px solid #eee",
    padding: "8px",
    borderRadius: "6px"
  }
};
