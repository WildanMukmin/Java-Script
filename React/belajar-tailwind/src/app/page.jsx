export const metadata = {
  title: "Home",
  description: "Belajar Tailwind",
};

export default function Home() {
  return (
    <main className="p-1">
      <h1 className="">Mari Belajar Tailwind</h1>

      <section className="">
        <h2 className="">Spacing</h2>
        <div className="my-3 mx-3 ">Margin</div>
        <div className="p-4 ">Padding</div>
      </section>
    </main>
  );
}
