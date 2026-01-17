import { useEffect } from "react";
import { useSelector } from "react-redux";
import { handleDeleteBlog, SetBlogOnInitialPageLoad } from "../store/slice/blogSlice";
import { useDispatch } from "react-redux";

function BlogLists() {
   const dispatch = useDispatch();
   const { blog } = useSelector(state => state);
   const { blogList } = blog;
   console.log(blogList.map((singleBlog)=>console.log(singleBlog.id)));
   useEffect(() => {
      dispatch(SetBlogOnInitialPageLoad(
         JSON.parse(localStorage.getItem('blogList')) || []
      ))
   }, [])

   function onDelteBlog (getCurrentId){
      dispatch(handleDeleteBlog(getCurrentId));
   }
   return (
      <div className="space-y-6">
         <h1 className="text-3xl font-bold text-gray-900 border-b pb-4">Blog Lists</h1>
         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {blogList?.length > 0 ? (
               blogList.map((singleBlog) => (
                  <div
                     key={singleBlog.id}
                     className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 flex flex-col justify-between"
                  >
                     <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                           {singleBlog.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3">
                           {singleBlog.description}
                        </p>
                     </div>
                     <div className="mt-6 flex space-x-3">
                        <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                           Update
                        </button>
                        <button onClick={()=>onDelteBlog(singleBlog.id)} className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200">
                           Delete
                        </button>
                     </div>
                  </div>
               ))
            ) : (
               <div className="col-span-full py-12 text-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <h1 className="text-xl font-medium text-gray-500">
                     No Blog has been added! Make one
                  </h1>
               </div>
            )}
         </div>
      </div>
   );
}

export default BlogLists;