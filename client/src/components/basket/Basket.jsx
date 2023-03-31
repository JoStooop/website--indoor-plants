import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBasket} from "@/redux/reducers/basket/basketSelector";
import {BasketCard} from "@/components/basket/basket-card/BasketCard";
import {Link} from "react-router-dom";
import {SHOP_ROUTE} from "@/utils/constsRoutes";
import {emptyBin} from "@/redux/reducers/basket/basketSlice";
import {getTotalItems, getTotalPrice} from "@/helpers/helpers";

const Basket = (props) => {
  const {openBasket, setOpenBasket} = props;

  const dispatch = useDispatch();

  const products = useSelector(getBasket);

  const totalItems = useMemo(() => getTotalItems(products), [products]);
  const totalPrice = useMemo(() => getTotalPrice(products), [products]);

  return (
    <div className={openBasket ? "" : "hidden"}>
      <div className="z-10 fixed w-full h-full">
        <div className="absolute w-1/4 md:w-3/4 inset-0 bg-gray-700 bg-opacity-50 z-20"
          onClick={() => setOpenBasket(false)}
        >
        </div>
        <div className="absolute inset-y-0 right-0 w-3/4 md:w-1/4 bg-white z-10">
          <div className="flex justify-between h-16 bg-gray-200 bg-opacity-90">
            <p className="text-3xl mx-4 my-3 text-gray-700 font-display">Basket <span className="text-lg">({totalItems} items)</span></p>
            <svg
              onClick={() => setOpenBasket(false)}
              className="m-4 h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="h-full">
            {products.length === 0 &&
              <div className="font-body flex flex-col justify-center items-center my-auto w-full h-3/4 md:h-full">
                <p>Your cart is empty!</p>
                <Link to={SHOP_ROUTE}>
                  <button
                    onClick={() => setOpenBasket(false)}
                    className="h-12 p-4 my-4 w-full text-sm bg-gray-900 text-white rounded transition
                    duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border"
                  >
                    Shop Now
                  </button>
                </Link>
              </div> }

            {products.length &&
              <div>
                <div className="flex-col divide-y-2 p-2 font-body text-gray-700">
                  <div className="flex-col flex-shrink h-3/6 overflow-auto">
                    {products.map((card, i) =>
                      <BasketCard key={i} card={card}/>,
                    )}
                  </div>
                  <div className="flex p-4 justify-between">
                    <p className="">Subtotal</p>
                    <p className="font-semibold">${totalPrice} </p>
                  </div>
                </div>
                <div className="flex justify-around text-center">
                  <button className="h-12 p-4 w-32 text-sm bg-gray-900 text-white rounded transition
                  duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border">
                    Checkout
                  </button>
                  <button
                    onClick={() => dispatch(emptyBin())}
                    className="border-[1px] h-12 p-4 w-32 text-sm bg-white-900 text-black rounded transition
                  duration-300 border-gray-900 hover:bg-gray-100 hover:text-black-900 hover:border-none">
                    Clear
                  </button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export {Basket};
