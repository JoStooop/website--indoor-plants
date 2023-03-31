import {lazy} from "react";
import {HOME_ROUTE} from "@/utils/constsRoutes";

const HomePage = lazy(() => import("@/pages/home-page/HomePage"));

export const publicRoutes = [
  {path: HOME_ROUTE, Component: HomePage},
];
