import React, { Component } from 'react'
import './App.css'

import Form from './components/molecules/Form'
import Header from './components/organisms/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App
