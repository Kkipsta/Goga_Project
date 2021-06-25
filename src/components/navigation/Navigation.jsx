import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Login from "../login/Login";
import Home from "../home/Home";
import Registration from "../registration/Registration";
import Posts from "../posts/Posts";
import Resources from "../resources/Resources";


import "./navigation.css";

const Navigation = () => {
  let history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
    history.go(0);
  };

  return (
    <>
      <Router>
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">

            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/">
                Home
              </Link>
            </li>


            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/login">
                Login
              </Link>
            </li>


            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/register">
                Register
              </Link>
            </li>



            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/posts">
                Posts
              </Link>
            </li>

            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500"
                to="/resources">
                Resources
              </Link>
            </li>


            <li
              className="text-sm text-gray-400 hover:text-gray-500"
              onClick={() => logout()}
              style={{ cursor: "pointer" }}>
              <p>Log out</p>
            </li>


          </ul>
        </nav>






        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/login" component={Login} />

          <Route path="/register" component={Registration} />
          
          <Route path="/posts" component={Posts} />

          <Route path="/resources" component={Resources} />

        </Switch>
      </Router>
    </>
  );
};

export default Navigation;
