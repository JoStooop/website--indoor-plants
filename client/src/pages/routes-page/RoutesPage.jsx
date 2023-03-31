import React, {Suspense} from "react";
import {useLocation, Routes, Route} from "react-router-dom";

import {publicRoutes} from "@/routes";
import {Spinner} from "@/components/ui/spinner/Spinner";

const RoutesPage = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Spinner/>}>
      <Routes location={location} key={location.pathname}>
        {publicRoutes.map(({path, Component}) => (
          <Route key={path} path={path} element={<Component/>}></Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export {RoutesPage};
