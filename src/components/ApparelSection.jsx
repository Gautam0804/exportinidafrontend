import { useNavigate } from "react-router-dom";

export default function ApparelSection() {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Apparel and Fashion Accessories</h2>

      <div style={styles.row}>
        {/* Card 1 */}
        <div
          style={styles.card}
          onClick={() => navigate("/category/men-wear")}
        >
          <img
            src="https://via.placeholder.com/140x120?text=Men+Wear"
            alt="Men Wear"
            style={styles.image}
          />
          <div>
            <h4>Men Shirts, Jeans & Clothing →</h4>
            <p style={styles.link}>Mens T Shirt</p>
            <p style={styles.link}>Formal Shirts</p>
            <p style={styles.link}>Casual Shirts</p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={styles.card}
          onClick={() => navigate("/category/women-wear")}
        >
          <img
            src="https://via.placeholder.com/140x120?text=Women+Wear"
            alt="Women Wear"
            style={styles.image}
          />
          <div>
            <h4>Ladies Dresses, Apparels & →</h4>
            <p style={styles.link}>Ladies Woolen Kurti</p>
            <p style={styles.link}>Designer Sarees</p>
            <p style={styles.link}>Ladies Tops</p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          style={styles.card}
          onClick={() => navigate("/category/unisex")}
        >
          <img
            src="https://via.placeholder.com/140x120?text=Unisex"
            alt="Unisex Clothing"
            style={styles.image}
          />
          <div>
            <h4>Unisex Clothing →</h4>
            <p style={styles.link}>Winter Coat</p>
            <p style={styles.link}>Hoodies</p>
            <p style={styles.link}>Track Suits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    marginTop: "30px",
    background: "#fff",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "6px"
  },
  heading: {
    marginBottom: "20px"
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px"
  },
  card: {
    display: "flex",
    gap: "15px",
    border: "1px solid #eee",
    padding: "15px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  image: {
    width: "140px",
    height: "120px",
    objectFit: "cover"
  },
  link: {
    color: "#0b5ed7",
    margin: "6px 0"
  }
};
