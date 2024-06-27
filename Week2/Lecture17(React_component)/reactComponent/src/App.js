import logo from './logo.svg';
import './App.css';
import { Component} from 'react'

class App extends Component {
   name="Rohit Kumar";
    render(){
      return(
        <div>
          <div>
            <h1>This is {this.name}</h1>
          </div>
          <div>
            <p>This is Paragraph and Name is {this.name} </p>
          </div>
        </div>
      )
    }
}

export default App;
