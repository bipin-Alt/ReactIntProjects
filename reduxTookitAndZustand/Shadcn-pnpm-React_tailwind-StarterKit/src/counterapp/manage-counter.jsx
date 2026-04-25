import useCounter, { useAction } from "../store/useCounter";

function ManageCounter() {

   
    const {increase,decrease} = useAction();
    


  return ( 
    <div>
        <button className="bg-sky-300 font-black p-5 m-3" onClick={increase}> Increament Count </button> 
        <button className="bg-sky-300 font-black p-5 " onClick={decrease}> Decreament Count </button> 
    </div>
   );
}

export default ManageCounter;