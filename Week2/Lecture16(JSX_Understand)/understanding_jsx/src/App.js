import logo from './logo.svg';
import './App.css';

function App() {
  const name="Rohit Kumar";
  return (
    <div>

      <div style={{color:"red", 
      textAlign:"center"}
      }>
        <h1>Hello From {name}!</h1>
      </div>
      <div>
        <p>This is {name}</p>
      </div>

    </div>
  );
}

export default App;
