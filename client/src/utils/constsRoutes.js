export const HOME_ROUTE = "/";
export const ABOUT_ROUTE = "/about";
export const SHOP_ROUTE = "/shop";
export const SHOP_COLLECTIONS_ROUTE = `${SHOP_ROUTE}/:collection`;
export const SHOP_COLLECTIONS_NAME_ROUTE = `${SHOP_COLLECTIONS_ROUTE}/:name`;

export const SHOP_COLLECTIONS = {
  "airPurifying": {
    name: "airPurifying",
    link: `${SHOP_ROUTE}/airPurifying`,
  },
  "beginner": {
    name: "beginner",
    link: `${SHOP_ROUTE}/beginner`,
  },
  "petFriendly": {
    name: "petFriendly",
    link: `${SHOP_ROUTE}/petFriendly`,
  },
  "succulents": {
    name: "succulents",
    link: `${SHOP_ROUTE}/succulents`,
  },
};
