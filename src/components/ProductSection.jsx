import { useNavigate } from "react-router-dom";

export default function ProductSection({ title, products, category }) {
  const navigate = useNavigate();

  return (
    <div style={styles.section}>
      {/* Header */}
      <div style={styles.header}>
        <h2>{title}</h2>
        <button
          style={styles.viewAll}
          onClick={() => navigate(`/category/${category}`)}
        >
          View All →
        </button>
      </div>

      {/* Products */}
      <div style={styles.grid}>
        {products.map((product, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() =>
              navigate(
                `/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`
              )
            }
          >
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <h4>{product.name}</h4>
            <p style={styles.company}>{product.company}</p>
            <p style={styles.location}>{product.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  section: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #e5e5e5"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px"
  },
  viewAll: {
    background: "none",
    border: "none",
    color: "#0b5ed7",
    cursor: "pointer",
    fontSize: "14px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px"
  },
  card: {
    cursor: "pointer",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    marginBottom: "8px"
  },
  company: {
    fontSize: "14px",
    color: "#555"
  },
  location: {
    fontSize: "13px",
    color: "#777"
  }
};
