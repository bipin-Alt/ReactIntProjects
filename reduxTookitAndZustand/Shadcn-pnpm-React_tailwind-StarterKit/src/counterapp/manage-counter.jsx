import useCounter from "../store/useCounter";

function ManageCounter() {

   
    const count = useCounter((state)=>state);

  return ( 
    <div>
        <button className="bg-sky-300 font-black p-5 m-3" onClick={count.increase}> Increament Count </button> 
        <button className="bg-sky-300 font-black p-5 " onClick={count.decrease}> Decreament Count </button> 
    </div>
   );
}

export default ManageCounter;