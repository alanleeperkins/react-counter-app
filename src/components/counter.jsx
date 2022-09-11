import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // start and update etc.
    }
  }

  componentWillUnmount() {
    console.log("counter '%d' unmounted", this.props.counter.id);
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag.toString()}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log("counter '%d' rendered", this.props.counter.id);

    return (
      <div>
        <span Style="display:inline-block; width:100px;">
          {this.props.counter.name}
        </span>
        <span
          className={this.getBadgeClasses()}
          Style="width:50px; height: 22px"
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
          Style="margin-right:5px"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Empty" : value;
  }
}

export default Counter;
