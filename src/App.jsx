import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./pages/Header";
import HomePages from "./pages/Home";
import Footer from "./pages/Footer/Footer";
import SectionPage from "./pages/sectionPage";

import Modal2 from './components/modal2/Modal2'
import Modal1 from './components/modal1/Modal1'


import "./assets/styles/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
          {/* <Modal1 /> */}
        <Header />
       

        <Switch>
          <Route path="/bir" exact>
            <SectionPage />
          </Route>
          <Route path="/ikki" exact>
          <Modal1 />
          </Route>
          <Route path="/uch" exact>
          <Modal2 />
          </Route>
          <Route path="/" exact>
            <HomePages />
          </Route>
        </Switch>
        <Footer />  
      </Router>
    </div>
  );
}

export default App;
