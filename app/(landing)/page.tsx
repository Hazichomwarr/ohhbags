//app/(landing)/page.tsx
import Categories from "./_components/Categories";
import Classes from "./_components/Classes";
import Featured from "./_components/Featured";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Story from "./_components/Story";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Categories />
      <Featured />
      <Story />
      <Classes />
      <Footer />
    </main>
  );
}
