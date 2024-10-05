import Header from "../../Home/Navigation/Header";
import Navbar from "../../Home/Navigation/Navbar";

const Products = () => {
  return (
    <>
      {/* Header part */}
      <header>
        <Header />
        <Navbar />
      </header>

      {/* Main product page */}
      <main className="px-16 py-8 flex items-center">
        <section className="lg:w-[33%] bg-slate-950">
          <p>Hi</p>
        </section>
        <section className="w-full bg-orange-500">
          <p>Hi</p>
        </section>
      </main>
    </>
  );
}

export default Products;
