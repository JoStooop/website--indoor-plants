import {lazy} from "react";
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  SHOP_COLLECTIONS_NAME_ROUTE,
  SHOP_COLLECTIONS_ROUTE,
  SHOP_ROUTE,
} from "@/utils/constsRoutes";

const HomePage = lazy(() => import("@/pages/home-page/HomePage"));
const AboutPage = lazy(() => import("@/pages/about-page/AboutPage"));
const ShopPage = lazy(() => import("@/pages/shop-page/ShopPage"));
const ShopCollectionPage = lazy(() => import("@/pages/shop-collection-page/ShopCollectionPage"));
const ShopCollectionNamePage = lazy(() => import("@/pages/shop-collection-name-page/ShopCollectionNamePage"));

export const publicRoutes = [
  {path: HOME_ROUTE, Component: HomePage},
  {path: ABOUT_ROUTE, Component: AboutPage},
  {path: SHOP_ROUTE, Component: ShopPage},
  {path: SHOP_COLLECTIONS_ROUTE, Component: ShopCollectionPage},
  {path: SHOP_COLLECTIONS_NAME_ROUTE, Component: ShopCollectionNamePage},
];
