import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CategorySidebar from "./components/CategorySidebar";
import HeroSlider from "./components/HeroSlider";
import TrendingCategories from "./components/TrendingCategories";
import HomeFurnishingsSection from "./components/HomeFurnishingsSection";
import FoodProductsSection from "./components/FoodProductsSection";
import ToolsSection from "./components/ToolsSection";
import CosmeticsSection from "./components/CosmeticsSection";
import TopSuppliers from "./components/TopSuppliers";
import ClientTestimonial from "./components/ClientTestimonial";
import WebStories from "./components/WebStories";
import RecentBlogs from "./components/RecentBlogs";
import PopularProducts from "./components/PopularProducts";
import PremiumBrands from "./components/PremiumBrands";
import FindSuppliersByCountry from "./components/FindSuppliersByCountry";
import Footer from "./components/Footer";

import JoinPage from "./pages/JoinPage";
import SignInPage from "./pages/SignInPage";
import PostRequirementPage from "./pages/PostRequirementPage";

/* ================= HOME LAYOUT ================= */
function HomeLayout() {
  return (
    <>
      <Header />

      <div className="bg-gray-100 py-6">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex gap-6">

            {/* LEFT SIDEBAR */}
            <aside className="w-[260px] shrink-0">
              <CategorySidebar />
            </aside>

            {/* RIGHT CONTENT */}
            <main className="flex-1 flex flex-col gap-10">
              <HeroSlider />
              <TrendingCategories />
              <HomeFurnishingsSection />
              <FoodProductsSection />
              <ToolsSection />
              <CosmeticsSection />
              <TopSuppliers />
              <ClientTestimonial />
              <WebStories />
              <RecentBlogs />
              <PopularProducts />
              <PremiumBrands />
              <FindSuppliersByCountry />
            </main>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* ================= APP ROUTES ================= */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/category/:id" element={<HomeLayout />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/post" element={<PostRequirementPage />} />
    </Routes>
  );
}