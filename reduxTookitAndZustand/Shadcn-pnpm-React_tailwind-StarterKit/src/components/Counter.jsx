import { useSelector } from "react-redux";

function Counter() {
    const state = useSelector(state=>state);
    const{count} = state;
    return ( 
        <>
         <div>
            <h2>The count is {count}.</h2>
         </div>
        </>
     );
}

export default Counter;