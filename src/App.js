import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      coders: [
        {
          name: "ahmed",
          id:'123ty'
        },
        {
          name: "asad",id:'1243ty'
        },
        {
          name: "samana",id:'1273ty'
        }
    
      ]
    
    }
    
  }
  render() {
    return (
      <div className="App">
        {this.state.coders.map((coder) => {
          return <div key={coder.id}>
          <h1 >{coder.name}</h1>
          </div>
        })}
        
      </div>
    )
  }
}  
 
export default App;

