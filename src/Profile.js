import React, {Profiler,useState} from "react";

function onRenderCallback (
    id, 
    phase,
    actualDuration,
    baseDuration,
    startTime, 
    commitTime,
    interactions 
  
){
    console.log(`[Profiler: ${id}]`);
    console.log(`Phase: ${phase}`);
    console.log(`Actual duration: ${actualDuration}ms`);
    console.log(`Base duration: ${baseDuration}ms`);
    console.log(`Start time: ${startTime}ms`);
    console.log(`Commit time: ${commitTime}ms`);
    console.log(`Interactions:`, interactions);
  }


  function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  }

export default  function App3() {
    return (
      <Profiler id="AppProfiler" onRender={onRenderCallback}>
        <div>
          <h1>React Profiler Example</h1>
          <Counter />
        </div>
      </Profiler>
    );
  }


 