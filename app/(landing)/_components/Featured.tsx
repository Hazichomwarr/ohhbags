// app/(landing)/_components/Featured.tsx
const products = [
  { name: "Ankara Dress", tag: "Coming Soon" },
  { name: "Luxury Clutch", tag: "Available In-Store" },
  { name: "Oud Perfume", tag: "Available In-Store" },
  { name: "Gold Chain", tag: "Available In-Store" },
];

export default function Featured() {
  return (
    <section className="py-16 px-6 bg-neutral-900">
      <h2 className="text-3xl text-center mb-10 font-serif">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-black p-4 rounded-xl">
            <div className="h-40 bg-gray-800 mb-4" />
            <h3>{p.name}</h3>
            <p className="text-sm text-gray-400">{p.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
