const products = [
  {
    name: "Pure Leather Men Formal Shoes",
    image: "https://images.unsplash.com/photo-1588433963378-82d7b8fc1552?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UHVyZSUyMExlYXRoZXIlMjBNZW4lMjBGb3JtYWwlMjBTaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Metal Square Rings",
    image: "https://images.unsplash.com/photo-1642575904226-e43265872da4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWV0YWwlMjBzcXVhcmUlMjByaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Cotton Printed Cushion Covers",
    image: "https://media.istockphoto.com/id/2170859845/photo/unmade-bed-with-crumpled-blanket-and-hypoallergenic-pillow-on-clean-bedsheets.webp?a=1&b=1&s=612x612&w=0&k=20&c=FTdFAxo_NwDvsqWxLlsmPfDdeM2V_bR-vqyNoFh0VtE=",
  },
  {
    name: "Mild Steel Portable Folding Chair",
    image: "https://media.istockphoto.com/id/2191528562/photo/black-and-white-folding-chair.webp?a=1&b=1&s=612x612&w=0&k=20&c=YytGX2XGNcBKS3U5b1kiEMEJ24DiLMmdF59asOTBCcM=",
  },
  {
    name: "BAJAJ Electric Automatic",
    image: "https://media.istockphoto.com/id/817635450/photo/blue-auto-rickshaw-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=pzF6yQuXbHZLkjptGgOsES8DNdrUQdIeG81JQ2uFhvc=",
  },
  {
    name: "Plain Fancy Felt Laptop Sleeve",
    image: "https://plus.unsplash.com/premium_photo-1744439174469-4f3a354fcd58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGxhaW4lMjBGYW5jeSUyMEZlbHQlMjBMYXB0b3AlMjBTbGVldmV8ZW58MHx8MHx8fDA%3D",
  },
];

export default function PopularProducts() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Popular Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {products.map((product, i) => (
          <div
            key={i}
            className="border rounded-md p-3 text-center hover:shadow-sm transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-24 object-contain mb-2"
            />

            <p className="text-xs text-blue-700 leading-snug">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}