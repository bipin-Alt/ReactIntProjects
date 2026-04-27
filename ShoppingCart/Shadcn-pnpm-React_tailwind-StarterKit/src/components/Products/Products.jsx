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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10">
      {/* Decorative glow orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-2/3 left-2/3 w-64 h-64 bg-indigo-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Page Header ───────────────────────────────────────── */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/30 mb-4">
            <ShoppingCart size={26} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            All Products
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Browse our collection — scroll to load more
          </p>
        </div>

        {/* ── Search Bar ─────────────────────────────────────────── */}
        <div className="mb-8 max-w-xl mx-auto">
          <div className="relative">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <Input
              type="search"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products…"
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-200 text-sm outline-none transition-all duration-200 hover:border-white/20 focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
            {searchTerm && (
              <Button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                {/* <X size={16} /> */}
              </Button>
            )}
          </div>

          {/* Search result count */}
          {searchTerm && searchQuery.data && (
            <p className="text-center text-xs text-slate-400 mt-3">
              <span className="text-violet-400 font-semibold">
                {searchQuery.data.products?.length ?? 0}
              </span>{" "}
              result{searchQuery.data.products?.length !== 1 ? "s" : ""} for{" "}
              <span className="text-white font-medium">
                &ldquo;{searchTerm}&rdquo;
              </span>
            </p>
          )}
        </div>

        {/* ── Initial Loading ────────────────────────────────────── */}
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

        {/* ── Error State ────────────────────────────────────────── */}
        {status === "error" && (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <PackageSearch size={28} className="text-red-400" />
            </div>
            <p className="text-white font-semibold">Failed to load products</p>
            <p className="text-slate-400 text-sm">Please try again later.</p>
          </div>
        )}

        {/* ── Product Grid ───────────────────────────────────────── */}
        {products.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product) => {
              const avgRating = product.reviews?.length
                ? product.reviews.reduce((sum, r) => sum + r.rating, 0) /
                  product.reviews.length
                : null;

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-black/30 hover:border-violet-500/40 hover:shadow-violet-500/10 hover:shadow-xl transition-all duration-300"
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
        )}

        {/* ── Infinite Scroll Sentinel ───────────────────────────── */}

        <div ref={loadMoreRef} className="flex justify-center items-center py-10 mt-4">
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
      </div>
    </div>
  );
}

export default Products;
