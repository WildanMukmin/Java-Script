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
      <section id="myskils" className="py-20">
        <div className="flex justify-center items-center pb-10">
          <h1 className="text-[50px] font-bold text-dua uppercase tracking-wider  px-6 rounded-lg lg:text-[65px] xl:text-[80px] ">
            My Skils
          </h1>
        </div>
        <MySkils />
      </section>
    </>
  );
}
