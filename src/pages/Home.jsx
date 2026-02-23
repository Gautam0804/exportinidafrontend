import Header from "../components/Header";
import CategorySidebar from "../components/CategorySidebar";
import Banner from "../components/Banner";
import TrendingCategories from "../components/TrendingCategories";

export default function Home() {
  return (
    <>
      <Header />

      <div style={styles.main}>
        <CategorySidebar />

        <div style={styles.content}>
          <Banner />
          <TrendingCategories />
        </div>
      </div>
    </>
  );
}

const styles = {
  main: {
    display: "flex",
    padding: "20px",
    gap: "20px",
    background: "#f5f5f5"
  },
  content: {
    flex: 1
  }
};
