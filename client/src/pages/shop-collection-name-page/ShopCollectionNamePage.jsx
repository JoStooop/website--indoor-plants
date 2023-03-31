import React from "react";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {getFlowers} from "@/redux/reducers/flowers/flowersSelector";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw, faSeedling, faStar, faSun, faWind} from "@fortawesome/free-solid-svg-icons";
import {addToBasket} from "@/redux/reducers/basket/basketSlice";
import {ShopTopBlock} from "@/components/main/shop/shop-top-block/ShopTopBlock";

const ShopCollectionNamePage = () => {
  const dispatch = useDispatch();
  const {name} = useParams();

  const flowers = useSelector(getFlowers);
  const flower = flowers.find((flower) => flower.name === name) || {};

  const handleClick = () => {
    dispatch(addToBasket(flower));
  };

  return (
    <>
      <Header/>
      <ShopTopBlock />
      <div className="h-full">
        <div
          className="h-4/5 w-10/12 mt-12 mb-20 mx-auto flex flex-col md:flex-row md:space-x-24 space-y-6 md:space-y-0 justify-between ">
          <img className="w-full md:w-3/6" src={flower?.img} alt="flower"/>

          <div className="w-full md:w-2/5 flex flex-col divide-y-2 space-y-8">
            <div className="space-y-8">
              <div className="flex justify-between ">
                <h1 className="font-display text-2xl md:text-5xl text-gray-800">{flower?.name}</h1>
                <p className="font-body text-lg md:text-xl text-gray-800">${flower?.price}</p>
              </div>
              <div>
                <p className="font-body leading-relaxed text-gray-700">The {flower?.name} is a beautiful, statement
                  piece product that brings style and brightness to any indoor space.
                  This product requires <span className="font-semibold">{flower?.light}</span>.</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon className="text-gray-800" icon={faStar}/>
                <FontAwesomeIcon className="text-gray-800" icon={faStar}/>
                <FontAwesomeIcon className="text-gray-800" icon={faStar}/>
                <FontAwesomeIcon className="text-gray-800" icon={faStar}/>
                <FontAwesomeIcon className="text-gray-800" icon={faStar}/>
                <p
                  className="font-display font-light text-sm text-gray-600 tracking-wider pl-2 underline cursor-pointer hover:text-gray-900">
                  7,329 Reviews
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-body font-semibold mt-4 text-gray-800">Ceramic Pot Color</h2>
              <div className="mt-4 mb-2 bg-gray-200 ring-2 ring-gray-700 w-8 h-8 rounded-full cursor-pointer"/>
              <p className="font-body text-sm text-gray-600">White</p>
            </div>
            <div className="flex-col space-y-5">
              <h2 className="font-body font-semibold mt-4 text-gray-800">Details</h2>
              <div className="flex-col space-y-5">
                <div className="flex">
                  <FontAwesomeIcon className="text-gray-700" icon={faSun}/>
                  <p className="font-body ml-2 text-gray-700">{flower.light}</p>
                </div>
                <div>
                  {flower?.beginner &&
                    <div className="flex">
                      <FontAwesomeIcon className="text-gray-700" icon={faSeedling}/>
                      <p className="font-body ml-2 text-gray-700">Beginner Friendly</p>
                    </div>}
                </div>
                <div>
                  {flower?.purify &&
                    <div className="flex">
                      <FontAwesomeIcon className="text-gray-700" icon={faWind}/>
                      <p className="font-body ml-2 text-gray-700">Air Purifying</p>
                    </div>}
                </div>
                <div>
                  {flower?.petFriendly &&
                    <div className="flex">
                      <FontAwesomeIcon className="text-gray-700" icon={faPaw}/>
                      <p className="font-body ml-2 text-gray-700">Pet Friendly</p>
                    </div>}
                </div>
              </div>

              <button
                onClick={handleClick}
                className="w-full h-12 my-4 p-4 font-body text-sm bg-gray-900 bg-opacity-70 text-white rounded
                                transition duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border active:bg-gray-100 focus:outline-none">
                Add to Cart
              </button>

              <div className="flex justify-around pt-4">
                <p className="w-24 font-body text-gray-600 hover:text-gray-900">Made to order</p>
                <p className="w-24 font-body text-gray-600 hover:text-gray-900">60 Day Guarantee</p>
                <p className="w-24 font-body text-gray-600 hover:text-gray-900">24/7 Plant Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShopCollectionNamePage;
