export default function Footer() {
  return (
    <>
      {/* Description Section */}
      <div style={styles.desc}>
        <p>
          Exporters India is India's largest searchable B2B marketplace and
          Exporters Directory that connects Manufacturers, Exporters, Suppliers
          and Buyers to generate value from unlimited online trade
          opportunities and Buyer Enquiries. ExportersIndia.com is the trusted
          B2B Marketplace where only genuine business enquiries supplement trade
          deals between buyers, suppliers, exporters and importers of every
          origin.
        </p>
      </div>

      {/* Main Footer */}
      <footer style={styles.footer}>
        <div style={styles.grid}>
          {/* Column 1 */}
          <div>
            <h4>OUR SERVICES</h4>
            <p>Advertise with us</p>
            <p>Membership Plan</p>
            <p>Banner Advertisement</p>
          </div>

          {/* Column 2 */}
          <div>
            <h4>BUYERS</h4>
            <p>Post Your Requirement</p>
            <p>Browse Suppliers</p>
            <p>Manufacturers Directory</p>
            <p>Country Suppliers</p>
            <p>Buyer FAQ</p>
          </div>

          {/* Column 3 */}
          <div>
            <h4>SELLERS</h4>
            <p>Sell Your Product</p>
            <p>Latest Buyleads</p>
            <p>Seller FAQ</p>
          </div>

          {/* Column 4 */}
          <div>
            <h4>QUICK LINKS</h4>
            <p>About Us</p>
            <p>Jobs & Careers</p>
            <p>Feedback</p>
            <p>Testimonials</p>
            <p>Sitemap</p>
          </div>

          {/* Column 5 */}
          <div>
            <h4>CONNECT WITH US</h4>

            <div style={styles.apps}>
              <button style={styles.appBtn}>App Store</button>
              <button style={styles.appBtn}>Google Play</button>
            </div>

            <div style={styles.social}>
              <span>🔵</span>
              <span>❌</span>
              <span>📌</span>
              <span>📸</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Partner Sites */}
      <div style={styles.partners}>
        <strong>Partner Sites:</strong>
        <p>PlacementIndia | RealEstateIndia | TourTravelWorld | MatrimonialsIndia | WeblinkIndia</p>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottom}>
        © 1997–2026 Weblink.In Pvt. Ltd. All rights reserved.
        <span style={{ float: "right" }}>
          Privacy Policy | Terms & Conditions
        </span>
      </div>
    </>
  );
}

const styles = {
  desc: {
    padding: "30px",
    background: "#fff",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#444"
  },
  footer: {
    background: "#0a1f44",
    color: "#fff",
    padding: "40px 30px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "30px",
    maxWidth: "1200px",
    margin: "auto"
  },
  apps: {
    display: "flex",
    gap: "10px",
    margin: "10px 0"
  },
  appBtn: {
    background: "#000",
    color: "#fff",
    border: "1px solid #555",
    padding: "6px 10px",
    fontSize: "12px",
    cursor: "pointer"
  },
  social: {
    display: "flex",
    gap: "12px",
    fontSize: "20px",
    cursor: "pointer"
  },
  partners: {
    background: "#f1f1f1",
    padding: "15px",
    textAlign: "center",
    fontSize: "14px"
  },
  bottom: {
    background: "#06142c",
    color: "#ccc",
    padding: "12px 20px",
    fontSize: "13px"
  }
};
