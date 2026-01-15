import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function AddNewBlog() {
  const state = useSelector((state)=> state);
  console.log("Current State in AddNewBlog Component:", state);
 const dispatch = useDispatch();
  
function handleOnChange (e){
  
}
    return ( 
        <div>
            <form>
                <div>
                    <label>Enter Blog Title</label>
                    <input
                    type="text"
                    placeholder="Enter your Blog Title"
                    name="title"
                    onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label>Enter Blog Description</label>
                    <input
                    type="text"
                    placeholder="Enter your Blog Description"
                    name="title"
                    onChange={handleOnChange}
                    />
                </div>
                <button type="submit">Add New Blog</button>
            </form>
        </div>
     );
}

export default AddNewBlog;