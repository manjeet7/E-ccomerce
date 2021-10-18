import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Homescreen from "./Screens/Homescreen";
import Cartscreen from "./Screens/Cartscreen";
import Productscreen from "./Screens/Productscreen";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Backdrop from "./component/Backdrop";

function App() {
  const [sidetoggle, setToggle] = useState(false);

  return (
    <div className="App">
      <main>
        <Navbar click={() => setToggle(true)} />
        <Sidebar show={sidetoggle} click={() => setToggle(false)} />
        <Backdrop show={sidetoggle} click={() => setToggle(false)} />
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/cart" component={Cartscreen} />
          <Route exact path="/product/:id" component={Productscreen} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
