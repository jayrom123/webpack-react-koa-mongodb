import React, {Component} from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";


/*
 * pages
 */
import AppWrapper from "../pages/AppWrapper.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Blob from "../pages/Blob.jsx";

let Routers = (
  <HashRouter >
    <div>
      <Route component={AppWrapper}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/blob" component={Blob}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  </HashRouter>
);

// let Routers =  <div>Roger</div>;


export default Routers;

