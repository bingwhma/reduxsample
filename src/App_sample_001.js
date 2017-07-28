import React, { Component } from 'react';

// import CustTable from './CustTableComponent'

import { createStore } from 'redux'
import { connect } from 'react-redux' // 引入connect 
import { Provider } from 'react-redux'

import counter from './counter_reducers'
import Counter from './CounterComponent'
// import Cnt001 from './Cnt001Component'

const store = createStore(counter)



export default class App extends Component {

  getDefaultProps() {
        console.log("getDefaultProps")
  }

  // getInitialState() {
  //   console.log("getInitialState")

  //   return { cnt: 1 };
  // }

componentWillReceiveProps() {
    console.log("componentWillReceiveProps")
}
componentWillMount() {
  console.log("componentWillMount")
}

componentDidMount(){
  console.log("componentDidMount")
}

componentWillUpdate() {
   console.log("componentWillUpdate")
}

componentDidUpdate() {
   console.log("componentDidUpdate")
}

  constructor() {
    super()

    console.log("constructor")

    this.state = { cnt: 0 };
  }

  render() {
    console.log("render")
    let unsubscribe = store.subscribe(() => {
      console.log(store.getState())
      this.setState({ cnt: store.getState().aa });
    })


    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Provider store={store}>
            <Counter
              value={this.state.cnt}
              onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
              onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />

          </Provider>
          {/*<Cnt001 />*/}
        </div>
      </div>
    );
  }
}





