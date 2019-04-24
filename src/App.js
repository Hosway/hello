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
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='error'>error</h1>
        <h1 className={styles.success}>success</h1>
        {/*<Inline />
        <Stylesheet primary={true} />
        <ParentComponent />
        <NameList />
        <UserGreeting />
        <ParentComponent />
        <EventBind />
        <FunctionClick />
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
