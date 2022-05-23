// React stuff
import { useContext } from "react";
import { StateContext } from "./context/State";

// Styles
import "./style.css";

// 3rd Party Lib
import { Switch, Route } from "react-router-dom";
import { BrowserView } from "react-device-detect";

// Pages
import Home from "./pages/Home";
import Client from "./pages/Client";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Modal from "./components/Modal";

function App() {
  const { openModal } = useContext(StateContext);

  return (
    <>
      <div className="App">
        <div onClick={openModal}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/client">
              <Client />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </div>
        <BrowserView>
          <Cursor />
        </BrowserView>

        <Modal />
      </div>
    </>
  );
}

export default App;
