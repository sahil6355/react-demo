import React, { useState } from "react";

export default function GetForm(val) {
    const [data, setData] = useState(null);
    const [print, printData] = useState(false);

    function get(val) {
        console.warn(val.target.value);
        setData(val.target.value);
        printData(false);
    }

    return (
        <div className="Formdata">
            {
                print ? <h1>{data}</h1>
                    : null
            }
            <input type="text" onChange={get}></input>
            <button onClick={() => printData(true)}>Submit</button>
        </div>
    );
}




export function Hideshow() {
    const [status, setState] = useState(true);
    return (
        <div>
            {
                status ? <h1>Hello From User</h1> : null
            }

            <button onClick={() => setState(false)}>Hide</button>
            <button onClick={() => setState(true)}>Show</button>
            <button onClick={() => setState(!status)}>Toggle</button>
        </div>
    );
}


// export function Car() {
//     const [car, setCar] = useState({
//       brand: "Ford",
//       model: "Mustang",
//       year: "1964",
//       color: "red"
//     });

//     return (
//       <>
//         <h1>My {car.brand}</h1>
//         <p>
//           It is a {car.color} {car.model} from {car.year}.
//         </p>
//       </>
//     )
//   }


export function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" };
        });
    };

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateColor}
            >Blue</button>
        </>
    );
}


export function Formsubmit() {

    const [name, setName] = useState('');
    const [select, setoption] = useState('');
    const [checkbox, setcheck] = useState(false);

    function getForm(e){
        console.warn(name,select,checkbox);
        e.preventDefault()
    }

    return (
        <>
            <h1>Form Data</h1>
            <form onSubmit={getForm}>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input>
                <select onChange={(e)=>setoption(e.target.value)}>
                    <option>select option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select>
                <input type="checkbox" onChange={(e)=>setcheck(e.target.checked)} /><span>Accept Terms and conditions</span>

                <button type="submit">Submit Form</button>
                <button>Clear</button>
            </form>
        </>
    );

}


export function LogginData() {
    // const [LogginIn, setLoggin] = useState(1)
    const LogginIn = 1;
    return(
        <>
            {
                LogginIn===1 ? <h1>Login User1</h1> : LogginIn===2? <h1>Login User2 </h1> : <h1>Login User3</h1>
            }
        </>
    )
}



export function LogginForm (){

    const [User , setUser] = useState(false);
    const [Password , setPass] = useState(false);
    const [userdata , setUserData] = useState("");
    const [Passdata , setPassdata] = useState("");

    function loginhandler(e){
        e.preventDefault();

        if(userdata.length <3 && Passdata.length < 3) {
            alert ('Enter Valid User name and Password!');
        } else {
            alert ('Thank You for Login :)');
        }

    }

    function UserHandler(e){
        const item = e.target.value;

        if(item.length <=3) {
            setUser(true);
        } else {
            setUser(false);
        }

        setUserData(item)

        console.warn(item);
    }

    function PassHandler(e){
        const pass = e.target.value;
        if(pass.length <=3) {
            setPass(true);
        } else {
            setPass(false);
        }

        setPassdata(pass)
        console.warn(pass);
        
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={loginhandler}>
                <input type="text" placeholder="Enter Your Name.." onChange={UserHandler} /> <br/>
                { User ?   <span>Enter Valid User Name</span> : "" }
                <br/><br/>
                <input type="text" placeholder="Enter Your Password" onChange={PassHandler}/> <br/>
                { Password ?   <span>Enter Valid Password</span> : "" }
                <br/><br/>
                <button type="Submit">Submit Login Form</button>
            </form><br/><br/><br/>
        </>
    )
}