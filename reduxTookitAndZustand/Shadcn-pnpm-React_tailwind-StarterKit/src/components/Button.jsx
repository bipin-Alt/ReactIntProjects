import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../store/slice/counter";

function Button() {
    const dispatch = useDispatch()
    function handleClick (){
        dispatch(handleIncreaseCountAction({
            id:1,
            name:"Bipin",
            surname:"Poudel"
         }));

    }
    return ( 
      <button onClick={handleClick}>
        Increase Count
      </button>
     );
}

export default Button;