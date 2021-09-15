import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import VerUsers from "../components/examples/Users/VerUsers";
import LoginUsers from "../components/examples/LoginUsers/LoginUsers";
import FoodOrder from "../components/examples/FoodOrder/FoodOrder";
import VerBasicForm from "../components/examples/BasicForm/VerBasicForm";

const MenuApps = () => {
  return (
    <div>
      <h1>Menu Apps</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/users">VerUsers -- Project 1</Link>
            </li>
            <li>
              <Link to="/loginusers">LoginUsers -- Project 2</Link>
            </li>
            <li>
              <Link to="/foodorder">FoodOrder -- Project 3</Link>
            </li>            
            <li>
              <Link to="/verbasicform">Basic Form</Link>
            </li>                                                            
          </ul>
        </nav>

        <Switch>
          <Route path="/users">
            <VerUsers />
          </Route>
          <Route path="/loginusers">
            <LoginUsers />
          </Route>
          <Route path="/foodorder">
            <FoodOrder />
          </Route>          
          <Route path="/verbasicform">
            <VerBasicForm />
          </Route>          
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MenuApps;
