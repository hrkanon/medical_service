import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Appointment from "./pages/Appointment/Appointment";
import Doctors from "./pages/Doctors/Doctors";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import Services from "./pages/Services/Services";
import ShowDetails from "./pages/ShowDetails/ShowDetails";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import PrivateRoute from "./Private/PrivateRoute";
import Review from "./pages/Review/Review";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/doctors">
            <Doctors></Doctors>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <ShowDetails></ShowDetails>
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route exact path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
