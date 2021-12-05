import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Welcome from "./components/Welcome/Welcome";
import Main from "./components/Main/Main";


function App() {
  return (
      <>
          <Header/>

          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/welcome" component={Welcome} />
      </>
  );
}

export default App;
