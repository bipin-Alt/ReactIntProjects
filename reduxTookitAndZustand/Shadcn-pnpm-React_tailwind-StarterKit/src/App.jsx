import AddNewBlog from "./Blog-App/addNewBlog";
import BlogLists from "./Blog-App/blog-list";



function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center tracking-tight">
          BlogList Application
        </h1>
        <div className="bg-white shadow sm:rounded-lg p-6">
          <AddNewBlog />
        </div>
        <div className="space-y-6">
          <BlogLists />
        </div>
      </div>
    </div>
  );
}

export default App;
