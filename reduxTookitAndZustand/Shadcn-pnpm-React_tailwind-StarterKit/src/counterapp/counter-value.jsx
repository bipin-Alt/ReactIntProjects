import useCounter from "../store/useCounter";

function CounterValue() {
 const counter= useCounter(state => state);
 const count = counter.count;
 console.log(counter);

  return ( 
    <div>
      Counter Value  is {count}
    </div>
   );
}

export default CounterValue;