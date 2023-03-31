import React from "react";
import {HashRouter as Router} from "react-router-dom";

import {RoutesPage} from "@/pages/routes-page/RoutesPage";
import {Banner} from "@/components/ui/banner/Banner";

const App = () => {
  return (
    <div className="App">
      <Banner />
      <Router>
        <RoutesPage/>
      </Router>
    </div>
  );
};

export {App};
