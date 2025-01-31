import React from "react";

// Events Component
export default class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            numbers: [],
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleEvent() {
        alert("Hello");
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    numberprint() {
        const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const doubledNumbers = number.map((num) => num * 5);

        this.setState({
            numbers: doubledNumbers,
        });
    }

    componentDidMount() {
        this.numberprint();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updated numbers (from componentDidUpdate):", this.state.numbers);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "ON" : "OFF"}
                </button>

                <button onClick={this.handleEvent}>Click me</button>

                <div>
                    {this.state.numbers.map((num) => (
                        <div key={num}>{num}</div>
                    ))}
                </div>
            </div>
        );
    }
}

// Blog Component
export function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
    const content = props.posts.map((post) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    ));
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

// Sample posts
export const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    { id: 2, title: "Installation", content: "You can install React from npm." },
];

// Export posts for testing.