import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/user/register" component={UserRegister}></Route>
          <Route exact path="/user/login" component={UserLogin}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
