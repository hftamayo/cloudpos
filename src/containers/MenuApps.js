import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import VerUsers from "../components/examples/Users/VerUsers";
import LoginUsers from "../components/examples/LoginUsers/LoginUsers";
import FoodOrderDemo from "../components/examples/FoodOrder/FoodOrderDemo";
import VerBasicForm from "../components/examples/BasicForm/VerBasicForm";
import FoodOrder from "../components/FoodOrder/FoodOrder";

const MenuApps = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li><h3>CloudPOS: versiones alfa</h3></li>
            <li>
              <Link to="/orders">Shop Products</Link>
            </li>
            <li><h3>Codigo Fuente de Ejemplo</h3></li>
            <li>
              <Link to="/users">VerUsers -- Project 1</Link>
            </li>
            <li>
              <Link to="/loginusers">LoginUsers -- Project 2</Link>
            </li>
            <li>
              <Link to="/foodorderdemo">FoodOrder -- Project 3</Link>
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
          <Route path="/foodorderdemo">
            <FoodOrderDemo />
          </Route>          
          <Route path="/verbasicform">
            <VerBasicForm />
          </Route>          
          <Route path="/orders">
            <FoodOrder />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MenuApps;
