// app/(landing)/_components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <img
        src="/ohhbags_hero.png"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-serif mb-4">
          Elevate Your Style with African Elegance
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Discover premium bags, authentic fashion, jewelry, and fragrances.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg">
            Shop Collection
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            Visit Store
          </button>
        </div>
      </div>
    </section>
  );
}
