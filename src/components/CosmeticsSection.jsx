import CategoryMegaSection from "./CategoryMegaSection";

export default function CosmeticsSection() {
  return (
    <CategoryMegaSection
      title="Cosmetics & Personal Care"
      leftImage="https://media.istockphoto.com/id/2167711128/photo/model-applying-shimmering-highlighter-on-cheekbone-with-makeup-brush.webp?a=1&b=1&s=612x612&w=0&k=20&c=5k_yi-Z662Vy5u006bkn11ymo6avMAp160ouP293A_U="
      highlights={[
        "Fragrances and Perfumes",
        "Bindi & Body Beautification Products",
        "Salon & Beauty Equipment",
        "Hand Sanitizers & Personal Hygiene",
      ]}
      categories={[
        {
          title: "Hand Sanitizers & Personal Hygiene",
          items: [
            "Body Lotion",
            "Hand Sanitizer",
            "Hand Wash",
            "Face Wash",
            "Sanitary Napkins",
          ],
          img: "https://images.unsplash.com/photo-1592169384638-30234255cdb7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Child & Baby Care Products",
          items: [
            "Baby Diapers",
            "Baby Care Products",
            "Baby Powder",
            "Baby Bag",
            "Baby Bibs",
          ],
          img: "https://plus.unsplash.com/premium_photo-1661322603027-cc56a691b4f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpbGQlMjAlMjYlMjBCYWJ5JTIwQ2FyZSUyMFByb2R1Y3RzfGVufDB8fDB8fHww",
        },
        {
          title: "Massage Products & Equipment",
          items: [
            "Massage Roller",
            "Massager",
            "Stone Massage Wands",
            "Massage Table",
          ],
          img: "https://images.unsplash.com/photo-1621554012422-237bc0b03ed3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFzc2FnZSUyMFByb2R1Y3RzJTIwJTI2JTIwRXF1aXBtZW50fGVufDB8fDB8fHww",
        },
        {
          title: "Cosmetics, Hair Care & Beauty",
          items: [
            "Hair Oil",
            "Indigo Powder",
            "Hair Shampoo",
            "Hair Conditioner",
          ],
          img: "https://images.unsplash.com/photo-1760038548850-bfc356d88b12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29zbWV0aWNzJTJDJTIwSGFpciUyMENhcmUlMjAlMjYlMjBCZWF1dHl8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Soaps & Detergents",
          items: [
            "Sodium Sulphate",
            "Dishwash Liquid",
            "Liquid Detergent",
          ],
          img: "https://plus.unsplash.com/premium_photo-1671379481002-c4324aa68966?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29hcHMlMjAlMjYlMjBEZXRlcmdlbnRzfGVufDB8fDB8fHww",
        },
        {
          title: "Herbal, Ayurvedic Oils & Cosmetics",
          items: [
            "Rose Water",
            "Herbal Hair Oil",
            "Ayurvedic Face Wash",
          ],
          img: "https://plus.unsplash.com/premium_photo-1661609454173-56055da4f2ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVyYmFsJTJDJTIwQXl1cnZlZGljJTIwT2lscyUyMCUyNiUyMENvc21ldGljc3xlbnwwfHwwfHx8MA%3D%3D",
        },
      ]}
    />
  );
}