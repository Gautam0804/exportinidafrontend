import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/category/${query.toLowerCase().replace(/\s+/g, "-")}`);
      setQuery("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* TOP INFO BAR */}
      <div style={styles.topBar}>
        <div>India's Largest B2B Marketplace</div>
        <div>
          📞 Sales: <span style={{ color: "#e53935" }}>+91-9953717914</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          💬 Support: <span style={{ color: "#e53935" }}>+91-9700318318</span>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div style={styles.header}>
        
        {/* LOGO */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={styles.logo}>
            <span style={{ fontSize: "30px", color: "#0b5ed7" }}>e</span>
            <strong style={{ color: "#0b5ed7" }}>Exporters</strong>
            <span style={{ color: "#e53935" }}>India</span>
          </div>
        </Link>

        {/* SEARCH */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search products, suppliers, services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            style={styles.search}
          />
          <button style={styles.searchBtn} onClick={handleSearch}>
            🔍 Search
          </button>
        </div>

        {/* RIGHT BUTTONS */}
        <div style={styles.rightSection}>

          <Link to="/post" style={{ textDecoration: "none" }}>
            <button style={styles.postBtn}>
              Post Requirement
            </button>
          </Link>

          <Link to="/signin" style={{ textDecoration: "none" }}>
            <button style={styles.signBtn}>
              Sign In
            </button>
          </Link>

          <Link to="/join" style={{ textDecoration: "none" }}>
            <button style={styles.joinBtn}>
              Join Free
            </button>
          </Link>

        </div>

      </div>
    </>
  );
}

const styles = {
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 30px",
    fontSize: "13px",
    background: "#f8f9fa",
    borderBottom: "1px solid #e5e5e5"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    padding: "14px 30px",
    background: "#ffffff",
    borderBottom: "1px solid #e5e5e5",
    position: "sticky",
    top: 0,
    zIndex: 100
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  searchContainer: {
    display: "flex",
    flex: 1,
    maxWidth: "600px"
  },
  search: {
    flex: 1,
    padding: "12px 18px",
    borderRadius: "30px 0 0 30px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none"
  },
  searchBtn: {
    background: "#0b5ed7",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "0 30px 30px 0",
    cursor: "pointer",
    fontWeight: "500"
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },
  postBtn: {
    background: "#e53935",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "500"
  },
  signBtn: {
    background: "#6c757d",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "30px",
    cursor: "pointer"
  },
  joinBtn: {
    background: "#0b5ed7",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "600"
  }
};