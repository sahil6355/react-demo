import React, { Component } from "react";


export default class State extends Component {
    constructor() {
        super();
        this.state = {
            data: "Hello User...",
        }
    }

    apple2() {
        this.setState({data:'hi'})
    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=> this.apple2()}>Click</button>
            </div>
        );
    }
}
