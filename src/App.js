import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import News from './components/news.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export class App extends Component {
  state={
    progress:0
  }
  setProgress=(element)=>{
    this.setState({progress:element})
  }
  render() {
    return (
      <>
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
              color='black' progress={this.state.progress} height="3px"
        />
        <Switch>
          <Route path="/General"><News setProgress={this.setProgress} key="General" NumberOfNews={12} country={'in'} category={'General'}/></Route>
          <Route path="/Sports"><News setProgress={this.setProgress} key="Sports"NumberOfNews={12} country={'in'} category={'sports'}/></Route>
          <Route path="/Business"><News  setProgress={this.setProgress}key="Business"NumberOfNews={12} country={'in'} category={'business'}/></Route>
          <Route path="/Health"><News  setProgress={this.setProgress}key="Health" NumberOfNews={12} country={'in'} category={'health'}/></Route>
          <Route path="/Entertainment"><News setProgress={this.setProgress} key="Entertainment"NumberOfNews={12} country={'in'} category={'entertainment'}/></Route>
          <Route path="/Science"><News setProgress={this.setProgress} key="Science" NumberOfNews={12} country={'in'} category={'science'}/></Route>
          <Route path="/Technology"><News setProgress={this.setProgress} key="Technology" NumberOfNews={12} country={'in'} category={'technology'}/></Route>
        </Switch>
        
        </Router>
      </div>
      </>
    )
  }
}

export default App