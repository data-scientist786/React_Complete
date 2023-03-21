
import { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      codersList: [],
      filteredList:''
      
      
      
       }
    
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
    .then((users)=>this.setState(()=>{return{codersList:users}}))
      
  }  
  whenChange=(event) => {
           
            
            const filteredList = event.target.value.toLocaleLowerCase();
            
           
            this.setState(() => { return { filteredList } ;
            }
            )
        }
  
  render() {
    const { codersList, filteredList } = this.state;
    const { whenChange } = this;

     const givenName = codersList.filter((coder) => {
              return coder.name.toLocaleLowerCase().includes(filteredList)
            })
    return (
      <div className="App">
        <input type="search" className='search_coder' placeholder='name'
          onChange={whenChange}
        />  
        
        {givenName.map((coder) => {
          return <h1 key={coder.id}>{ coder.name}</h1>
        })}  
      </div>
    )
  }
}  
 
export default App;

