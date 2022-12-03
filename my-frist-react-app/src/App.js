// import logo from './logo.svg';
// import './App.css';

import Form from "./components/Form";
import Navbar from "./components/Navbar";


function App() { // this is stateless functional component which name is APP COMPONENT
  return (
  <div className="App">
    <Navbar title ="Portfolio" aboutText="About" contact="Contacts"/>
    <div className="container"><Form heading ="Enter Your Text In the Below Text Area"/></div>
  </div>
  );
}

export default App;
