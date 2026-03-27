// app/(landing)/_components/Categories
const categories = [
  { title: "Bags", img: "/bags.jpg" },
  { title: "African Clothing", img: "/clothes.jpg" },
  { title: "Jewelry", img: "/jewelry.jpg" },
  { title: "Fragrances", img: "/images/ohh_fragances.png" },
  { title: "Accessories", img: "/images/ohh_new.jpg" },
];

export default function Categories() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl mb-10 text-center font-serif">Our Collections</h2>

      <div className="grid md:grid-cols-3 gap-6 ">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="relative group rounded-xl overflow-hidden"
          >
            <img
              src={cat.img}
              className="w-full h-64 object-cover group-hover:scale-105 transition hover:cursor-pointer"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-xl">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
