// app/_components/Categories
import Link from "next/link";

const categories = [
  { title: "Bags", img: "/images/ohh_bags.jpg", slug: "bags" },
  {
    title: "African Clothing",
    img: "/images/ohh_clothes.jpg",
    slug: "clothing",
  },
  { title: "Jewelery", img: "/images/ohh_jewelery.jpg", slug: "jewelery" },
  { title: "Fragrances", img: "/images/ohh_fragances.png", slug: "fragances" },
  {
    title: "Accessories",
    img: "/images/ohh_accessories.jpg",
    slug: "accessories",
  },
];

export default function Categories() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl mb-10 text-center font-serif">Our Collections</h2>

      <div className="grid md:grid-cols-3 gap-6 ">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="relative group rounded-xl overflow-hidden cursor-pointer"
          >
            <Link href={`/categories/${cat.slug}`}>
              <img
                src={cat.img}
                className="w-full h-64 object-cover group-hover:scale-105 transition hover:cursor-pointer"
              />
            </Link>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-xl">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
