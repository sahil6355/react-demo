import './App.css';
// import User from './User';
// import {User} from './User';
// import Test1 from './component';
import React, { Component } from "react";
// import Jsx from './jsx';
// import App3 from './Profile';
// import Button from './Button';
// import Button from './Button';
// import State from './State';
// import Student from './Student';

// import Student1 from './Student1';
// import State1 from './State1';
// import Events ,{Blog,posts} from './Events';
import GetForm,{Hideshow , Car,Formsubmit, LogginData,LogginForm} from './Formdata';


class Display extends Component {
  constructor() {
    super();
    this.state = {
      data: 1,
      idno: 1
    };
  }

  increase(no) {
    return (
      no += 1
    );
  }

  increaseboth() {
    this.setState((prevState) => ({
      data: prevState.data + 1,
      idno: prevState.idno + 1,
    }));
  };

  render() {
    return (

      <div>
        {/* <Student1 name={this.state.data} id={this.state.idno} /> */}
        <button onClick={() => this.setState({ data: this.increase(this.state.data) })} >data increase</button>
        <button onClick={() => this.setState({ idno: this.increase(this.state.idno) })} >id increase</button>
        <button onClick={() => this.increaseboth()} >Both increase</button>
      </div>
    );
  }
}

const name = {
  firstname: "sahil",
  lastname: "kotadiya"
};

function Fullname(name) {
  return (
    <h1>{name.firstname + name.lastname}</h1>
  );
}


function App() {

  // function App2() {
  //   return (
  //     <h1>App2 Component</h1>
  //   );
  // }
  return (
    <div className="App">
      {/* <User /> */}
      {/* <App2 /> */}
      {/* <Test2 /> */}
      {/* <Jsx /> */}
      {/* <App3 /> */}
      {/* <Button /> */}
      {/* <State /> */}

      {/* <Student name="sahil" id="1" email="xyz@gmail.com" other={{ mobile: "000000000", address: "ABC" }} /> */}
      {/* <Student name="def" id="2" email="def@gmail.com" other={{ mobile: "1245451524515", address: "deffd" }} /> */}
      {/* {Fullname(name)} */}
      {/* <Display /> */}

      <LogginForm />

      <GetForm />

      <Hideshow />

      <Car />

      <Formsubmit />

      <LogginData />

    </div>
  );
}

// class Test2 extends Component {
//   render() {
//     return (
//       <h1>Test2 Class Component</h1>
//     );
//   }
// }

export default App;
