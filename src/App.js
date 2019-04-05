import React, { Component } from 'react'
import './App.css'

import Form from './components/molecules/Form'
import Header from './components/organisms/Header'
import Card from './components/molecules/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Card text="Bruna"/>
      </div>
    );
  }
}

export default App
