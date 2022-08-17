import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Welcome greeting="Hi" />
      </div>
    )
  }
}

export default App
