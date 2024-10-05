import Header from "../../Home/Navigation/Header";
import Navbar from "../../Home/Navigation/Navbar";

const Products = () => {
  return (<>
    {/* Header part  */}
    <Header />
    <Navbar />

    {/* Product Page  */}
    <div className="flex items-center justify-center h-auto min-h-screen">
      <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-800">
        Coming Soon
      </h1>
    </div>

  </>)
}

export default Products



// import Header from "../../Home/Navigation/Header";
// import Navbar from "../../Home/Navigation/Navbar";

// const Products = () => {
//   return (
//     <>
//       {/* Header part */}
//       <header>
//         <Header />
//         <Navbar />
//       </header>

//       {/* Main product page */}
//       <main className="px-16 py-8  flex items-center">
//         <section className="lg:w-[33%] bg-slate-950">
//           <p>Hi</p>
//         </section>
//         <section className="w-full bg-orange-500">
//           <p>Hi</p>
//         </section>
//       </main>
//     </>
//   );
// }

// export default Products;
