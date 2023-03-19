
import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      coders: [],
      
      
      
       }
    
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
    .then((users)=>this.setState(()=>{return{coders:users}}))
      
  }  
  
  render() {
    return (
      <div className="App">
        <input type="search" className='search_coder' placeholder='name'
          onChange={(event) => {
            console.log(event.target.value);
            const searchedName = event.target.value.toLocaleLowerCase();
            
            const filerName = this.state.coders.filter((coder) => {
              return coder.name.toLocaleLowerCase().includes(searchedName)
            })
            this.setState(() => { return { coders: filerName } })
        }}
        />  
        
        {this.state.coders.map((coder) => {
          return <h1 key={coder.id}>{ coder.name}</h1>
        })}  
      </div>
    )
  }
}  
 
export default App;

