import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  updateProfile,
  ProfileState,
  selectProfile,
} from "../features/profileSlice";
const Footer = () => {
  const profileState = useSelector(selectProfile);
  const { data, status, error } = profileState;
  const [statusMessage, setStatusMessage] = useState("idle");
  //if status change for 10 sec then show error
  useEffect(() => {
    const timer = setTimeout(() => {
     if (error) {
        setStatusMessage("Update Failed");
      } else if (status === "succeeded") {
        setStatusMessage("Update Success");
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [status, error]);




  return (
    <div className='mt-auto p-4'>
      { statusMessage && <div className='text-red-500'>{statusMessage}</div> }




    </div>
  )
}

export default Footer