import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { name: "Milk", id: 1, value: 4 },
      { name: "Sugar", id: 2, value: 0 },
      { name: "Coffee", id: 3, value: 0 },
      { name: "Alcohol", id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("app - constructor");
  }

  componentDidMount() {
    // time for exp. an ajax call
    console.log("app - mounted");
  }

  componentWillUnmount() {
    console.log("app - unmounted");
  }

  handleIncrement = (counter) => {
    console.log(counter);
    counter.value++;
    const counters = this.state.counters;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    console.log(counter);
    if (counter.value > 0) counter.value--;
    const counters = this.state.counters;
    this.setState({ counters });
  };

  handleReset = () => {
    this.resetCounter();
  };

  resetCounter = () => {
    const counters = [
      { name: "Milk", id: 1, value: 4 },
      { name: "Sugar", id: 2, value: 0 },
      { name: "Coffee", id: 3, value: 0 },
      { name: "Wodka", id: 4, value: 0 },
      { name: "Tea", id: 5, value: 0 },
      { name: "Water", id: 6, value: 0 },
    ];
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters }); // identical to (key and value are the same) : this.setState({ counters: counters });
  };

  render() {
    console.log("app - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
