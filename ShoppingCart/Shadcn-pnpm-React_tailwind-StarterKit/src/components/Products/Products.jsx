import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  Loader2,
  Search,
  ShoppingCart,
  Star,
  X,
  PackageSearch,
} from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { useRef } from "react";

function Products() {
  const loadMoreRef = useRef(null);

  // for searching the product
  const [searchTerm, setSearchTerm] = useState("");

  useState(()=>{
  const timer = setTimeout(()=>{
    setSearchTerm(searchTerm)
  },500);
   return ()=>{
    clearTimeout(timer);
   }
  },[searchTerm])

  //This is the search query used for searching an element//
  const searchQuery = useQuery({
    queryKey: ["searchProducts", searchTerm],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchTerm}`,
      );
      if (!response.ok) throw new Error("Couldn't find the product");
      return response.json();
    },
    enabled: searchTerm.length > 0,
  });

  //we need to use tanstack hook called useInfiniteQuery//
  //for fetching the products with limit //
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: async ({ pageParam = 0 }) => {
        const response = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${pageParam}&select=title,price,thumbnail,reviews`,
        );
        if (!response.ok) throw new Error("Failed to fetch Products");
        return response.json();
      },
      getNextPageParam: (lastPage) => {
        const nextSkip = lastPage.skip + lastPage.limit;
        if (nextSkip >= lastPage.total) return undefined;

        return nextSkip;
      },
    });
    //useEffect for debouncing //



  // use of useEffect inorder to automate the fetchnext pagte insted of clicking button//
  useEffect(() => {
    // Here we have created  the IntersetionObserver which is a browser API it watches an element and tells us that it that element shown in the screeen or not, instead of listening to the scroll event this is fast and efficient way//
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
    const currentRef = loadMoreRef.current;

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasNextPage, fetchNextPage]);

  const products = data?.pages.flatMap((page) => page.products) ?? [];
  const searchResults = searchQuery.data?.products ?? [];
  const isSearching = searchTerm.length > 0;
  const displayProducts = isSearching ? searchResults : products;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10 overflow-x-hidden">
      {/* Decorative glow orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-2/3 left-2/3 w-64 h-64 bg-indigo-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Page Header ─────────*/}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30 mb-4 animate-in fade-in zoom-in duration-500">
            <ShoppingCart size={26} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            All Products
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Browse our collection — scroll to load more
          </p>
        </div>

        {/* ── Search Bar ───────── */}
        <div className="mb-12 max-w-xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-violet-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative">
              <Search
                size={18}
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${isSearching ? "text-violet-400" : "text-slate-400"
                  }`}
              />
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products by title, category..."
                className="w-full pl-12 pr-12 py-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-base outline-none transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/10"
              />
              {isSearching && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  {searchQuery.isFetching && (
                    <Loader2 size={16} className="text-violet-400 animate-spin" />
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchTerm("")}
                    className="h-8 w-8 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <X size={16} />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Search stats */}
          {isSearching && !searchQuery.isFetching && searchQuery.data && (
            <div className="flex justify-center mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-xs text-slate-400">
                  Found <span className="text-violet-400 font-bold">{searchResults.length}</span>{" "}
                  {searchResults.length === 1 ? "product" : "products"} for{" "}
                  <span className="text-white font-medium italic">&ldquo;{searchTerm}&rdquo;</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── Initial Loading ──────*/}
        {status === "pending" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="aspect-square bg-white/5" />
                <div className="p-4 flex flex-col gap-3">
                  <div className="h-4 bg-white/10 rounded-lg w-3/4" />
                  <div className="h-3 bg-white/10 rounded-lg w-1/2" />
                  <div className="h-8 bg-white/10 rounded-xl mt-2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Error State ──────────*/}
        {status === "error" && (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <PackageSearch size={28} className="text-red-400" />
            </div>
            <p className="text-white font-semibold">Failed to load products</p>
            <p className="text-slate-400 text-sm">Please try again later.</p>
          </div>
        )}

        {/* ── Product Grid ─────────*/}
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {displayProducts.map((product) => {
              const avgRating = product.reviews?.length
                ? product.reviews.reduce((sum, r) => sum + r.rating, 0) /
                product.reviews.length
                : null;

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-black/30 hover:border-violet-500/40 hover:shadow-violet-500/10 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden bg-white/5 aspect-square">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Price badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30">
                        ${product.price?.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="flex flex-col gap-2 p-4 flex-1">
                    <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-violet-300 transition-colors duration-200">
                      {product.title}
                    </h3>

                    {/* Star Rating */}
                    {avgRating !== null && (
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={12}
                            className={
                              star <= Math.round(avgRating)
                                ? "fill-violet-400 text-violet-400"
                                : "text-slate-600 fill-slate-700"
                            }
                          />
                        ))}
                        <span className="ml-1 text-xs text-slate-400">
                          {avgRating.toFixed(1)}
                        </span>
                      </div>
                    )}

                    {/* Add to Cart */}
                    <div className="mt-auto pt-3">
                      <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold tracking-wide shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/40 active:scale-[0.97] transition-all duration-200 cursor-pointer">
                        <ShoppingCart size={14} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          !searchQuery.isFetching && isSearching && (
            <div className="flex flex-col items-center gap-6 py-24 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl">
                <PackageSearch size={32} className="text-slate-500" />
              </div>
              <div className="space-y-2">
                <p className="text-white text-lg font-semibold">No products found</p>
                <p className="text-slate-400 text-sm max-w-xs mx-auto">
                  We couldn't find any products matching &ldquo;{searchTerm}&rdquo;.
                  Try searching for a different keyword.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setSearchTerm("")}
                className="mt-2 border-white/10 text-white hover:bg-white/5 rounded-xl px-6 cursor-pointer"
              >
                Clear Search
              </Button>
            </div>
          )
        )}

        {/* ── Infinite Scroll----------*/}

        {!isSearching && (
          <div ref={loadMoreRef} className="flex justify-center items-center py-12 mt-8">
            {isFetchingNextPage && (
              <div className="flex flex-col items-center gap-3">
                <Loader2 size={28} className="text-violet-400 animate-spin" />
                <span className="text-slate-400 text-xs tracking-wide">
                  Loading more products…
                </span>
              </div>
            )}
            {!hasNextPage && products.length > 0 && !isFetchingNextPage && (
              <div className="flex flex-col items-center gap-2 opacity-60">
                <div className="h-px w-40 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
                <p className="text-slate-500 text-xs">
                  You&apos;ve seen all products
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
