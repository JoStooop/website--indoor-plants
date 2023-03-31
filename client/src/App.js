import React from "react";
import {HashRouter as Router} from "react-router-dom";

import {RoutesPage} from "@/pages/routes-page/RoutesPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <RoutesPage/>
      </Router>
    </div>
  );
};

export {App};
