import { useState } from "react";
import React from "react";

export default function Student (props) {
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState("XYZ@gmail.com");
    function apple(){
        alert("hello");
    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{props.other.address}</h1>
            {/* <button onClick={ () => useState("ABC")}>Click</button> */}
            <button onClick={() => setName("ABC")}>Click</button>
            <button onClick={() => setEmail(apple())}>Click</button>

        </div>
    )
}


