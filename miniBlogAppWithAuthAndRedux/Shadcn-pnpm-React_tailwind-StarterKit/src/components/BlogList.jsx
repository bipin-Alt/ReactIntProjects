import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Clock, User, Heart, MessageSquare } from "lucide-react";

const BlogList = () => {
   // Dummy data for visualization
   const blogs = [
      {
         id: 1,
         title: "Mastering React Hooks",
         excerpt: "Learn how to use React Hooks effectively in your modern web applications. From useState to custom hooks...",
         author: "John Doe",
         date: "Jan 15, 2024",
         category: "Development"
      },
      {
         id: 2,
         title: "The Future of Web Design",
         excerpt: "Exploring the latest trends in UI/UX design for 2024 and beyond. Glassmorphism, minimalism, and more...",
         author: "Jane Smith",
         date: "Jan 20, 2024",
         category: "Design"
      },
      {
         id: 3,
         title: "Optimizing Your CSS Performance",
         excerpt: "Tips and tricks to make your stylesheets load faster and perform better in production environments...",
         author: "Alex Johnson",
         date: "Jan 22, 2024",
         category: "Performance"
      }
   ];

   return (
      <div className="max-w-5xl mx-auto p-6 md:p-10">
         <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div className="space-y-1">
               <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Latest Blogs</h1>
               <p className="text-lg text-gray-500">Stay updated with the latest in tech and design</p>
            </div>
            <Link to="/add-blog">
               <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 shadow-lg shadow-blue-500/20 px-6 py-6 h-auto text-lg transition-transform hover:scale-105 active:scale-95">
                  <Plus className="w-5 h-5" />
                  New Story
               </Button>
            </Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
               <Card key={blog.id} className="group flex flex-col h-full border-2 border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium bg-blue-600/80 px-3 py-1 rounded-full text-xs">
                           Read Article
                        </span>
                     </div>
                     <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 font-bold text-4xl">{blog.title[0]}</span>
                     </div>
                  </div>
                  <CardHeader className="flex-1 pb-2">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                           {blog.category}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                           <Clock className="w-3 h-3" />
                           5 min read
                        </span>
                     </div>
                     <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                        {blog.title}
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                     <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                        {blog.excerpt}
                     </p>
                  </CardContent>
                  <CardFooter className="pt-4 border-t flex items-center justify-between mt-auto bg-gray-50/30">
                     <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs uppercase">
                           {blog.author[0]}
                        </div>
                        <div className="flex flex-col">
                           <span className="text-xs font-semibold text-gray-900">{blog.author}</span>
                           <span className="text-[10px] text-gray-500">{blog.date}</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 text-gray-400">
                        <Heart className="w-4 h-4 hover:text-red-500 cursor-pointer transition-colors" />
                        <MessageSquare className="w-4 h-4 hover:text-blue-500 cursor-pointer transition-colors" />
                     </div>
                  </CardFooter>
               </Card>
            ))}
         </div>
      </div>
   );
};

export default BlogList;