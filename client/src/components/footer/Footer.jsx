import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {SHOP_COLLECTIONS} from "@/utils/constsRoutes";

const collectionList = [
  {to: SHOP_COLLECTIONS.airPurifying.link, text: "Air Purifying"},
  {to: SHOP_COLLECTIONS.beginner.link, text: "Beginner Friendly"},
  {to: SHOP_COLLECTIONS.petFriendly.link, text: "Pet Friendly"},
  {to: SHOP_COLLECTIONS.succulents.link, text: "Succulents"},
];

const Footer = () => {
  return (
    <footer className="relative bg-gray-200 bg-opacity-40 w-screen pt-8 pb-28">
      <div className="flex flex-col md:flex-row justify-center w-5/6 2xl:w-7/12 m-auto justify-between
                space-y-12 md:space-y-0">
        <div className="text-center md:text-left m-auto w-full md:w-0">
          <h1 className="font-display font-medium text-2xl text-gray-900">Join the Bloom Family</h1>
          <p className="font-body py-4 w-72 text-gray-700">Get plant care tips and tricks delivered straight to your
            mailbox.</p>
          <div className="flex mt-6">
            <input
              className="h-12 p-4 rounded-l font-body bg-gray-100 border-gray-400 border hover:border-gray-700 focus:border-gray-700 focus: border-2 focus:outline-none"
              type="text"
              placeholder="Enter Your Email..."></input>
            <button className="h-12 p-4 w-28 font-body text-sm bg-gray-900 text-white rounded-r
                            transition duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex space-x-6 md:space-x-24">
          <div className="flex flex-col space-y-4">
            <Link to="/">
              <h1 className="font-display font-medium md:text-lg text-gray-900">Bloom</h1>
            </Link>
            <Link className="font-body text-gray-700 text-sm md:text-base flex-col space-y-4" to="/about">
              <p>About Us</p>
              <p>FAQ</p>
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link to="/shop">
              <h1 className="font-display font-medium md:text-lg text-gray-900">Shop</h1>
            </Link>
            {collectionList.map((collection, index) => (
              <Link key={index} to={collection.to}>
                <p className="font-body text-sm md:text-base text-gray-700">{collection.text}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="font-display font-medium md:text-lg text-gray-900">Contact</h1>
            <p className="font-body text-sm text-gray-700">ivantm.dev@gmail.com</p>
            <a href="https://github.com/JoStooop" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="text-xl md:text-2xl text-gray-700 hover:text-gray-900" icon={faGithub}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export {Footer};
