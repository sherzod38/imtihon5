import { Switch, Route } from "react-router-dom";

import { Link } from "react-router-dom";

import RegistrForm1 from "../../components/registrForm1/RegistrForm1";
import RegistrForm2 from "../../components/registrForm2/RegistrForm2";
import RegForm3 from "../../components/registrForm2/RegForm3";
import RegForm4 from "../../components/registrForm2/RegForm4";

import im1 from "../../assets/images/Rectangle26.png";
import im2 from "../../assets/images/rinner.png";

import "./Registr.scss";

const Registr = () => {
  return (
    <div className="registr">
      <div className="registr-inner container">
        <div className="registr-inner-left">
          <Switch>
            <Route path="/auth/form1" exact>
              <RegistrForm1 />
            </Route>
            <Route path="/auth/form2" exact>
              <RegistrForm2 />
            </Route>
            <Route path="/auth/form3" exact>
              <RegForm3 />
            </Route>
            <Route path="/auth/form4" exact>
              <RegForm4 />
            </Route>
          </Switch>
        </div>
        <div className="registr-inner-right ">
          <img
            className="registr-inner-right-img1 container"
            src={im1}
            alt=""
          />
          <Link to="/form3">
            <img className="registr-inner-right-img2" src={im2} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registr;
