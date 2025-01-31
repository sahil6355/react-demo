import React from "react";


export default class Student1 extends React.Component {

    render() {
        return (
            <div style={{background:"skyblue"}}>
                <h1>{this.props.name}</h1>
                <h1>{this.props.id}</h1>
                <h1>{this.props.id}</h1>
            </div>
        );
    }
}

