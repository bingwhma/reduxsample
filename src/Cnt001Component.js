import React, { Component } from 'react'

class Cnt001 extends Component {

  getInitialState() {
    console.log("getInitialState")

    return { cnt: 1 };
  }

  constructor() {
    super()
    console.log("constructor")
    this.state = { cnt: 1 };

    this.onIncrement = () => {
      this.setState({ cnt: this.state.cnt + 1 })
    }

    this.onDecrement = () => {
      this.setState({ cnt: this.state.cnt - 1 })
    }
  }

  render() {

    return (
      <p>
        Clicked: {this.state.cnt} times
        {' '}xxxxxxxxxxxxxx
        <button onClick={this.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.onDecrement}>
          -
        </button>

      </p>
    )
  }
}


export default Cnt001