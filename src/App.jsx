import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./pages/Header";
import HomePages from "./pages/Home";
import Footer from "./pages/Footer/Footer";
import SectionPage from "./pages/sectionPage";
import Section2 from "./pages/section2";
import Registr from "./pages/registr/Registr";
// import RegistrForm1 from "./components/registrForm1/RegistrForm1";
// import RegistrForm2 from "./components/registrForm2/RegistrForm2";
// import RegForm3 from "./components/registrForm2/RegForm3";
import Arenda from "./components/arenda";

import Obnavleniya from "./components/obnavleniya";

import "./assets/styles/main.scss";
import Table from "./components/Table/Table";
import Chat from "./components/Chat/Chat";
import * as AuthContext from "./context/Auth";

function App() {
  return (
    <div className="App">
      <AuthContext.Provider>
        <Router>
          <Header />

          <Switch>
            <Route path="/" exact>
              <HomePages />
            </Route>
            <Route path="/bir" exact>
              <SectionPage />
            </Route>
            <Route path="/auth">
              <Registr />
            </Route>
            <Route path="/tort" exact>
              <Obnavleniya />
            </Route>
            <Route path="/besh" exact>
              <Table />
            </Route>
            <Route path="/olti" exact>
              <Chat />
            </Route>
            <Route path="/uch" exact>
              <Section2 />
            </Route>
            <Route path="/arenda" component={Arenda}/>
          </Switch>
          <Footer />
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
