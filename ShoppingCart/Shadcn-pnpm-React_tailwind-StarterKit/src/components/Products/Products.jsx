import { useInfiniteQuery } from "@tanstack/react-query";

function Products() {
  //we need to use tanstack hook called useInfiniteQuery//
  const{data, fetchNextPage, hasNextPage,isFetchingNextPage,status} = useInfiniteQuery({
    queryKey :['products'],
    queryFn : async({pageParam = 0})=>{
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${pageParam}&select=title,price`);

      if(!response.ok) throw new Error("Failed to fetch Products");

      return response.json()
    },
    getNextPageParam : (lastPage) => {
      const nextSkip =  lastPage.skip + lastPage.limit;
      if(nextSkip >= lastPage.total) return undefined;

      return nextSkip;
    },
  })

  // console.log(products);
  return <></>;
}

export default Products;
