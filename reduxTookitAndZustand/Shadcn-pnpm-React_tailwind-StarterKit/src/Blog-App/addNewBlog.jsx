import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleAddTodo, handleInputChange, handleUpdateBlog, setCurrentEditedBlogId } from "../store/slice/blogSlice";

function AddNewBlog() {
  const { blog } = useSelector((state) => state);
  const {currentEditedBlogId} = blog;
  console.log("Current State in AddNewBlog Component:", blog);
  const dispatch = useDispatch();

  function handleOnChange(e) {
    dispatch(
      handleInputChange({
        [e.target.name]: e.target.value

      })
    )
  }
  function handleOnSubmit(event) {
    event.preventDefault();
    if(currentEditedBlogId !== null){
      dispatch(handleUpdateBlog());
    }
    else{
      dispatch(handleAddTodo());
    }
    if(currentEditedBlogId !== null){dispatch(setCurrentEditedBlogId(null))};
    dispatch(handleInputChange({
      title :'',
      description:''
    }));
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Add New Blog</h2>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Blog Title
          </label>
          <input
            type="text"
            placeholder="Enter your Blog Title"
            name="title"
            onChange={handleOnChange}
            value={blog?.formData?.title}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Blog Description
          </label>
          <input
            type="text"
            placeholder="Enter your Blog Description"
            name="description"
            onChange={handleOnChange}
            value={blog?.formData?.description}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          {
            blog?.currentEditedBlogId ? "Update Blog" : "Add New Blog"
          }
        </button>
      </form>
    </div>
  );
}

export default AddNewBlog;