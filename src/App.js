import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header"
import {Menu} from "./menu/Menu"
import {Footer} from "./footer/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Menu/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
