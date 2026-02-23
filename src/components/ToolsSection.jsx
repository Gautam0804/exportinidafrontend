import CategoryMegaSection from "./CategoryMegaSection";

export default function ToolsSection() {
  return (
    <CategoryMegaSection
      title="Tools & Equipment"
      leftImage="https://images.unsplash.com/photo-1586864387789-628af9feed72"
      highlights={[
        "Testing Equipment & Machinery",
        "Power Tools & Accessories",
        "Hand Tools",
        "Construction & Industrial Tools",
      ]}
      categories={[
        {
          title: "Testing Equipment & Machinery",
          items: [
            "Impact Testers",
            "Hardness Tester",
            "Ultrasonic Meters",
            "Table Top Scales",
            "Punching Machines",
          ],
          img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
        },
        {
          title: "Grinders, Drills & Power Tools",
          items: [
            "Heavy Drilling Machine",
            "Angle Grinder",
            "Electric Drill",
            "Power Sander",
            "Cutting Machine",
          ],
          img: "https://images.unsplash.com/photo-1586864387789-628af9feed72",
        },
        {
          title: "Hammers, Pliers & Screwdrivers",
          items: [
            "Ratchet Set",
            "Tool Kits",
            "Combination Pliers",
            "Screwdriver Set",
            "Claw Hammer",
          ],
          img: "https://images.unsplash.com/photo-1597764699513-0b8b4ef63f83",
        },
        {
          title: "Welding Equipment",
          items: [
            "Arc Welding Machine",
            "MIG Welding Machine",
            "Welding Electrodes",
            "Welding Rods",
            "Welding Accessories",
          ],
          img: "https://images.unsplash.com/photo-1581091215367-59ab6c92c2f1",
        },
        {
          title: "Cutting Tools",
          items: [
            "Cutting Blades",
            "Industrial Knives",
            "Metal Cutting Tools",
            "Saw Blades",
          ],
          img: "https://images.unsplash.com/photo-1581091012184-7b4c21c03c55",
        },
        {
          title: "Measuring Instruments",
          items: [
            "Vernier Caliper",
            "Micrometer",
            "Digital Weighing Scale",
            "Measuring Tape",
          ],
          img: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58",
        },
      ]}
    />
  );
}