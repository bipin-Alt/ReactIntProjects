import CounterValue from "./counterapp/counter-value";
import ManageCounter from "./counterapp/manage-counter";




function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
       <h1>React With Zustand</h1>
       <ManageCounter/> 
        <CounterValue/>
    </div>
  );
}

export default App;
