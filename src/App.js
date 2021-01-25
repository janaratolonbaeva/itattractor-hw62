import './App.css';
import Home from "./container/Home/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <div className="App-bg"></div>
      <div className="Container">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/contacts" exact component={Contacts}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
