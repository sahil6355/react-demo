import React from "react";


export default class Componentdidupdate extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    componentDidUpdate(prePoses, preState, snapshot) {
        console.log("componentDidUpdate" ,preState, this.state.count, snapshot);
        if (this.state.count < 10) {
            this.setState({count:this.state.count +1})
        }
    }

    shouldComponentUpdate () {
        console.log("shouldComponentUpdate");
        return true;
    }

    render() {
        return (
            <div>
                <h1>Component did Update {this.state.count}</h1>
                <button onClick={() => { this.setState({ count: 1 }); }}> Update Click </button>
            </div>
        );
    }
}