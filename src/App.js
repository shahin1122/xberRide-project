import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
     
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
         

          <PrivateRoute path='/destination/:carId'>
              <Destination></Destination>
          </PrivateRoute>

           <PrivateRoute path="/destination">
              <Destination></Destination>
          </PrivateRoute>
          
          <Route path="/login">
             <Login></Login>
          </Route>

        </Switch>
      </Router>

      
    </UserContext.Provider>
  );
}

export default App;
