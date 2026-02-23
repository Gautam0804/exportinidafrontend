import CategoryMegaSection from "./CategoryMegaSection";

export default function FoodProductsSection() {
  return (
    <CategoryMegaSection
      title="Food Products & Beverages"
      leftImage="https://images.unsplash.com/photo-1542838132-92c53300491e"
      highlights={[
        "Confectionery & Bakery Products",
        "Fresh, Dried & Preserved Fruits",
        "Edible Oil & Allied Products",
        "Sweets & Desserts",
      ]}
      categories={[
        {
          title: "Dry Fruits & Nuts",
          items: [
            "Almond",
            "Dehydrated Fruits",
            "Cashew Nuts",
            "Cashew Nuts W400",
            "Edible Nuts",
          ],
          img: "https://images.unsplash.com/photo-1598371624473-4d95aca694e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJ5JTIwZnJ1aXRzfGVufDB8fDB8fHww",
        },
        {
          title: "Tea & Coffee",
          items: [
            "Tea",
            "Coffee",
            "Instant Coffee",
            "Green Tea",
            "Coffee Beans",
          ],
          img: "https://images.unsplash.com/photo-1511725300345-f87a25ebb232?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhJTIwY29mZmV8ZW58MHx8MHx8fDA%3D",
        },
        {
          title: "Food Grains & Cereals",
          items: [
            "Flours",
            "Basmati Rice",
            "Pulses",
            "Non Basmati Rice",
            "Broken Rice",
          ],
          img: "https://plus.unsplash.com/premium_photo-1661852201886-0c20ec2e226a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGdyYWlufGVufDB8fDB8fHww",
        },
        {
          title: "Cooking Spices and Masala",
          items: [
            "Curry Leaves",
            "Turmeric Powder",
            "Green Cardamom",
            "Coriander Seeds",
            "Beet Root Powder",
          ],
          img: "https://plus.unsplash.com/premium_photo-1692776206795-60a58a4dc817?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZyUyMHNwaWNlcyUyMG1hc2FsYXxlbnwwfHwwfHx8MA%3D%3Ds",
        },
        {
          title: "Dairy & Milk Products",
          items: [
            "Cow Ghee",
            "Milk Powder",
            "Paneer",
            "Milk",
            "Skimmed Milk Powder",
          ],
          img: "https://images.unsplash.com/photo-1566828791229-3804b533f840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlhcnklMjBhbmQlMjBtaWxrJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          title: "Food Additives & Ingredients",
          items: [
            "Acetic Acid",
            "Cocoa Powder",
            "Food Preservative",
            "Mint Powder",
            "Liquid Glucose",
          ],
          img: "https://images.unsplash.com/photo-1605655293594-92e21b3409bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBhZGRpdGF0aXZlJTIwaW5ncmF0aWVudHxlbnwwfHwwfHx8MA%3D%3D",
        },
      ]}
    />
  );
}