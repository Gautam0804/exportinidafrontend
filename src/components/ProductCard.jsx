export default function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />

      <h4>{product.name}</h4>
      <p style={styles.company}>{product.company}</p>
      <p style={styles.location}>{product.location}</p>

      <button style={styles.btn}>Contact Supplier</button>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px"
  },
  company: {
    fontSize: "14px",
    color: "#555"
  },
  location: {
    fontSize: "13px",
    color: "#777"
  },
  btn: {
    marginTop: "10px",
    padding: "8px 12px",
    background: "#0b5ed7",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }
};
