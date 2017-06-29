import React from "react";
import {Route, IndexRoute} from "react-router";
import Home from "./components/home";
import Wrapper from "./components/wrapper";
import Gallery from "./components/gallery";
import Materials from "./components/materials";
import ExplodingDots from "./components/exploding-dots";

export const routes = (
    <Route path="/" component={Wrapper} >
        <IndexRoute component={Home}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/materials" component={Materials}/>
        <Route path="/exploding-dots" component={ExplodingDots}/>
    </Route>
);
