import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ArrowUp from "./Components/ArrowUp";

// Pages
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Loign from "./Pages/Login";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import NotFound from "./Pages/Not_Found";
import PrivateRoute from "./routesTypes/privateRoute";
import RestrictedRoute from "./routesTypes/restrictedRoute";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
        <RestrictedRoute path="/login" restricted component={Loign} />
        <PrivateRoute path="/blog/:id" component={SingleBlog} />
        <Route path="*" component={NotFound} />
      </Switch>
      <ArrowUp />
      <Footer />
    </Router>
  );
};

export default App;
