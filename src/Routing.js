import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './component/Home'
import Form from './component/Forms'
import Page2 from './component/Page2'


const Routing = () => (
    <Router>
     <Switch>
        <Route path="/" component={Home} />
        <Route path="/Form" component={Form} />
        <Route path="/Page2" component={Page2} />
     </Switch>
    </Router>
  );
export default Routing