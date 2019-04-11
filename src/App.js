import React, { Component } from 'react';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Josh from './components/Josh'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/functionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind />
        {/*<FunctionClick />
        <ClassClick />
        <Counter />
        <Message />
        <Greet name="josh" heroName="boy">
        <p>this is children</p>
        </Greet>
        <Greet name="emely" heroName="girl">
        <button>click</button>
        </Greet>
        <Greet name="none" heroName="na"/>
        <Welcome name="josh" heroName="boy"/>
        <Welcome name="emely" heroName="girl"/>
        <Welcome name="none" heroName="na"/>
        <Hello />
    <Josh /> */}
      </div>

    );
  }
}

export default App;
