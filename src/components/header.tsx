/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProfile,
} from "../features/profileSlice";

function Header()  {
  const currentPath = useRouter().pathname;
  const profileState = useSelector(selectProfile);

  // console.log("current path", currentPath);
  return (
    <div className="sticky top-0 inset-x-0   flex container mx-auto  py-4 justify-between place-items-center text-lg  font-medium  ">
      <ul className="flex justify-items-center justify-evenly space-x-8 ">
        <li>
          <Link
            className={`${
              currentPath === "/" && "border-b-2 border-black "
            } px-2 py-2 hover:bg-[#2E424D] hover:text-white duration-300 rounded-sm`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={` px-2 py-2  duration-400 ${
              currentPath === "/products" && "border-b-2 border-black  "
            } px-2 py-2 hover:bg-[#2E424D] hover:text-white duration-300 rounded-sm`}
            href="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className={`duration-400 ${
              currentPath === "/cart" && "border-b-2 border-black"
            } px-2 py-2 hover:bg-[#2E424D] hover:text-white duration-300 rounded-sm `}
            href="/cart"
          >
            Cart
          </Link>
        </li>
      </ul>

      <div className="flex place-items-center space-x-4">
        <div>{profileState.data.firstName} {profileState.data.lastName}</div>
        <Link href="/account">
          <div className="w-12 h-12 rounded-full text-[#EAEBED] bg-[#2E424D] flex place-items-center justify-center text-lg">
          {profileState.data.profileImage ? (
                <img
                  src={profileState.data.profileImage}
                  alt="profileImage"
                  className="rounded-full w-full h-full object-cover"
                />
              ) : (
                profileState.data.firstName[0]?.toLocaleUpperCase() +
                profileState.data.lastName[0]?.toLocaleUpperCase()
              )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
