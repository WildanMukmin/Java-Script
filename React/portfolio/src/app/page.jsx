import Hero from "../components/utils/hero";
import About from "../components/utils/about";
import MySkils from "../components/utils/myskils";

export default function Home() {
  return (
    <>
      <section id="home" className="pb-[100px]">
        <Hero />
      </section>
      <section id="about" className="py-20 bg-tiga">
        <About />
      </section>
      <section id="myskils" className="py-20 bg-empat">
        <MySkils />
      </section>
    </>
  );
}
