// import logo from './logo.svg';
// import './App.css';

import Navbar from "./components/Navbar";


function App() { // this is stateless functional component which name is APP COMPONENT
  return (
  <div className="App">
    <Navbar title ="Portfolio" aboutText="About Chandrashekhar" contact="Contacts"/>
    {/* <Navbar/> */}
  </div>
  );
}

export default App;
