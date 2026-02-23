const suppliers = [
  {
    name: "ABC Garments Pvt Ltd",
    location: "Delhi, India",
    category: "Apparel Manufacturer"
  },
  {
    name: "Global Foods Exporters",
    location: "Mumbai, India",
    category: "Food Products Supplier"
  },
  {
    name: "Shree Chemicals",
    location: "Ahmedabad, India",
    category: "Industrial Chemicals"
  },
  {
    name: "Techno Electricals",
    location: "Pune, India",
    category: "Electrical Equipment"
  }
];

export default function TopSuppliers() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Top Suppliers</h2>

      <div style={styles.grid}>
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(0,0,0,0.12)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow = "none")
            }
          >
            <div style={styles.logo}>
              {supplier.name.charAt(0)}
            </div>

            <h4>{supplier.name}</h4>
            <p style={styles.category}>{supplier.category}</p>
            <p style={styles.location}>{supplier.location}</p>

            <button style={styles.btn}>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #e5e5e5"
  },
  heading: {
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px"
  },
  card: {
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    transition: "all 0.3s ease",
    background: "#fff"
  },
  logo: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#0b5ed7",
    color: "#fff",
    fontSize: "26px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px"
  },
  category: {
    color: "#555",
    fontSize: "14px"
  },
  location: {
    color: "#777",
    fontSize: "13px",
    marginBottom: "10px"
  },
  btn: {
    padding: "8px 16px",
    border: "1px solid #0b5ed7",
    background: "#fff",
    color: "#0b5ed7",
    borderRadius: "20px",
    cursor: "pointer"
  }
};
