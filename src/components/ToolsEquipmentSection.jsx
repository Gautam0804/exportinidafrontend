import CategoryMegaSection from "./CategoryMegaSection";

export default function ToolsEquipmentSection() {
  return (
    <CategoryMegaSection
      title="Tools & Equipment"
      leftImage="https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=900&q=80"
      highlights={[
        "Industrial Tools",
        "Testing Equipment",
        "Power Tools",
        "Hardware & Tool Kits",
      ]}
      categories={[
        {
          title: "Testing Equipment & Machinery",
          items: [
            "Impact Testers",
            "Hardness Tester",
            "Compression Testing Machine",
            "UTM Machine",
          ],
          img: "https://images.unsplash.com/photo-1581091215367-59ab6c92c2f1?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Grinders, Drills & Power Tools",
          items: [
            "Heavy Drilling Machine",
            "Sander",
            "Angle Grinder",
            "Electric Drill",
          ],
          img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Hammers, Pliers & Screwdrivers",
          items: [
            "Ratchet Set",
            "Tool Kits",
            "Combination Pliers",
            "Screwdriver Set",
          ],
          img: "https://images.unsplash.com/photo-1605900009749-b3cdb75ce9c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFtbWVycyUyQyUyMFBsaWVycyUyMCUyNiUyMFNjcmV3ZHJpdmVyc3xlbnwwfHwwfHx8MA%3D%3D",
        },
      ]}
    />
  );
}