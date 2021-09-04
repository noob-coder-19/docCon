import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import Speciality from "./pages/Speciality";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorDashboard from "./pages/DoctorDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/:speciality" component={Speciality}></Route>
          <Route exact path="/user/register" component={UserRegister}></Route>
          <Route exact path="/user/login" component={UserLogin}></Route>
          <Route exact path="/doctor/login" component={DoctorLogin}></Route>
          <Route
            exact
            path="/doctor/dasboard"
            component={DoctorDashboard}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
