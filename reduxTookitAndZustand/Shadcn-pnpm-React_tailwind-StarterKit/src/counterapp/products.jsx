import { useEffect } from "react";
import useCounter, { useAction } from "../store/useCounter";


function Products() {
  const {fetchListOfProducts} = useAction();
  const productList = useCounter((state) => state.products);
 

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
  <>
    <h1 className="text-4xl font-bold text-center mt-8 bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
      This is a product list component here you can get products.
    </h1>

    <div className="max-w-7xl mx-auto px-6 mt-10">
      <p className="text-center text-gray-400 text-lg mb-10">
        The list of products are :
      </p>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productList.length > 0 ? (
          productList.map((singleElement) => {
            return (
              <div
                key={singleElement?.id}
                className="bg-slate-900 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-800"
              >
                <img
                  src={singleElement?.thumbnail}
                  className="h-44 w-full object-contain bg-white rounded-xl p-3"
                />

                <h1 className="mt-4 font-semibold text-lg line-clamp-2 text-[#f2f2f2]">
                  {singleElement?.title}
                </h1>

                <p className="mt-2 text-xl font-bold text-sky-400">
                  Rs {singleElement.price}
                </p>

                <button className="mt-4 w-full bg-gradient-to-r from-sky-500 to-indigo-500 py-2 rounded-xl font-semibold hover:scale-105 transition">
                  Buy Now
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No Products available at this moment!
          </p>
        )}
      </ul>
    </div>
  </>
);
}

export default Products;