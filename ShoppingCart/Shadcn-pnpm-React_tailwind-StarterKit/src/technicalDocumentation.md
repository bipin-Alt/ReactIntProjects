### About the Product :
This is a shopping Cart project, made to practice and exercise diffferent concepts of React. This project is also made to exercise modern concepts to handle promise, and dynamic request. This project uses the API's of DummyJson, You can view the api used following this link : https://dummyjson.com/docs/products .    

### Concepts Used :

1) Tanstack Query
2) Dynamic Forms
3) Store with Zustand
4) React Router DOM
5) Shadcn for UI


### Intend of this Documentation :
This documentation is constructed to explain about the concepts, why they are used, What are they responsible for in my project. This documentation also justify the use cases of the concepts used in other projects. 

### Tanstack Query ( React Query )

## Introduction : 
TanStack Query (formerly React Query) is a powerful, framework-agnostic library designed to simplify server state management in web applications.  It automates the complex processes of data fetching, caching, synchronization, and updating server state, allowing developers to build performant and scalable applications with minimal boilerplate code.It is used primarily to replace manual data fetching patterns (like useEffect combined with useState).

## Advantages :

# Smart Caching: 
Automatically caches API responses and reuses them until they become stale, significantly reducing unnecessary network requests and improving performance. 

# Automatic Synchronization (Most  Important Advantage) :
Keeps the UI up-to-date with background refetching, window focus detection, and polling, ensuring data remains fresh without manual intervention. 

# Simplified Error and Loading Handling:
Offers built-in hooks like useQuery and useMutation that provide immediate access to isLoading, isError, and data states, eliminating the need for custom state management logic. 

# SSR Support:
Seamlessly integrates with frameworks like Next.js for server-side rendering, enabling data prefetching on the server and hydration on the client for better SEO and load times. 

# Advanced Features: 
Supports complex scenarios such as pagination, infinite queries, optimistic updates, and devtools for debugging, which are difficult to implement manually. 

## Use of Tankstack in my project and it's syntax :

# Syntax :
const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["products", searchTerm, sortOption],
      queryFn: async ({ pageParam = 0 }) => {
        let url = `https://dummyjson.com/products?limit=10&skip=${pageParam}&select=title,price,thumbnail,reviews,likes`;
        if (searchTerm) {
          url = `https://dummyjson.com/products/search?q=${searchTerm}`;
        }

        if (sortOption === "Price High to low") {
          url += "&sortBy=price&order=desc";
        } else if (sortOption === "Price low to High") {
          url += "&sortBy=price&order=asc";
        }
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch Products");
        return response.json();
      },
      getNextPageParam: (lastPage) => {
        const nextSkip = lastPage.skip + lastPage.limit;
        if (nextSkip >= lastPage.total) return undefined;

        return nextSkip;
      },
    });

## How it Works ?
 Use of data, fetchNextPage,hasNextPage, isFetchingNextPage and status . 

 The data is used to store the data send by the querFn  notice it returns response.json()_which is stored in the data and used to render it.
 
 The fetchNextPage is used to fetch next page/pagination we have limit and skip  to do that. It is triggered by intersectionObserver (given by the browser) when user scrolls. 
 
 The hasNextPage is used to check if there exists another page/paginatio exists or this is the last of the pagination.
 
 The isFetchingNextPage gives the answer of is the next pagination/page is being fetch currently? It is useful to show a loader or instruct the user to wait until it fetched next page.

 Status gives the error or success, it helps to tell the user that he/she has got some problem of success then data will fetch.


Use of queryKey, queryFn, getNextPageParam 
queryKey is used to identify the request.
as i have this in my useInfiniteQuery : 

queryKey: ["products", searchTerm, sortOption]

| searchTerm | sortOption     | What happens         |
| ---------- | -------------- | -------------------- |
| ""         | default        | load normal products |
| "iphone"   | default        | load search results  |
| ""         | price high→low | load sorted products |

When user types or changes dropdown:
 queryKey changes → query auto refetches → pages reset.

This is why search + sort work automatically.

## queryFn → “How to fetch data”

This function builds the API URL based on:

searchTerm
sortOption
pageParam (pagination)

It returns JSON → React Query stores it in cache.

This is the only place API calls happen

## getNextPageParam → “How to calculate next page”

getNextPageParam: (lastPage) => {
  const nextSkip = lastPage.skip + lastPage.limit;
  if (nextSkip >= lastPage.total) return undefined;
  return nextSkip;
}

This teaches React Query:

how many products API returns
when to stop pagination

Returning undefined tells React Query:
 no more pages → hasNextPage = false

This powers your infinite scroll.

I used useInfiniteQuery to handle paginated product fetching with automatic caching, background refetching, and infinite scroll, while dynamically refetching data when search or sort parameters change via the queryKey.