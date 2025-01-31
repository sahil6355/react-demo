import React from "react";

function Button(){
    let data = 'Hello User'
    function apple (){
        data = 'hello...';
        alert('Click Me ' + data);
    }
    return(
        <div>
            <h1>{data}</h1>
            {/* <button onClick={apple()}>Click me</button> */}
            <button onClick={apple}>Click me</button>
        </div>
    );
}


export default Button;