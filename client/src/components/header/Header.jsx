import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {ABOUT_ROUTE, HOME_ROUTE, SHOP_ROUTE} from "@/utils/constsRoutes";
import {Basket} from "@/components/basket/Basket";

const Header = () => {
  const [openBasket, setOpenBasket] = useState(false);

  const handleBasketClick = () => setOpenBasket(true);

  return (
    <>
      <div className="absolute w-full">
        <nav className="flex h-18 py-4 w-full m-auto text-white">
          <Link to={HOME_ROUTE}>
            <h1
              className="transform duration-300 hover:-translate-y-1 font-display font-thin tracking-wide m-auto pl-4 md:pl-12 text-2xl md:text-5xl w-[450px]">Indoor
              Plants</h1>
          </Link>

          <ul
            className="flex justify-end items-end pr-4 md:pr-24 w-full space-x-6 md:space-x-12 font-display font-thin md:font-light">
            <Link to={ABOUT_ROUTE}>
              <li
                className="text-sm md:text-lg transition duration-300 transform hover:-translate-y-1 hover:text-red-500 border-red-500 hover:border-b-2">
                About
              </li>
            </Link>
            <Link to={SHOP_ROUTE}>
              <li
                className="text-sm md:text-lg transition duration-300 transform hover:-translate-y-1 hover:text-red-500 border-red-500 hover:border-b-2">
                Shop
              </li>
            </Link>

            <li onClick={handleBasketClick}>
              <FontAwesomeIcon
                className="text-2xl md:text-3xl text-[#fff]-700 hover:text-red-500 transform hover:-translate-y-1 transition duration-300 cursor-pointer"
                icon={faBagShopping}/>
            </li>
          </ul>
        </nav>
      </div>
      {openBasket ? <Basket openBasket={openBasket} setOpenBasket={setOpenBasket}/> : null}
    </>
  );
};

export {Header};
