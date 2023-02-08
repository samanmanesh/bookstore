import { useState,useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {updateProfile, ProfileState, selectProfile} from  '../features/profileSlice';

const Account = () => {
  const data = useSelector(selectProfile);
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState<ProfileState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    blingStatus: "",
    profileImage: "",
  });

  useEffect (() => {
    setLocalData(data)
  }, [data])

  console.log("profileState", data)

  
  return (
    <div className="flex place-items-center h-full my-32 px-16 place-content-center space-x-24 ">
      <div className="flex flex-col place-items-center justify-center  ">
        <div className="w-64 h-64 rounded-full text-[#EAEBED] bg-[#2E424D] flex place-items-center justify-center text-4xl text-bold ">
          {localData.profileImage?  <Image src={localData.profileImage} alt="S" className="w-full h-full rounded-full" />
          : localData.firstName[0] + localData.lastName[0]}
        </div>
        <button className="bg-gray-700 text-white rounded p-4 mt-12">
          Update Image
        </button>
      </div>
      <div className=" w-1/3 h-full ">
        <div className="flex flex-col space-y-8  ">
          <div className="flex items-center justify-between  ">
            <label className="text-lg font-medium">First Name</label>
            <input
              className="border-2 border-gray-300 rounded p-2 w-2/3"
              type="text"
              value={""}
              placeholder="First Name"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-lg font-medium">Last Name</label>
            <input
              className="border-2 border-gray-300 rounded p-2 w-2/3"
              type="text"
              value={""}
              placeholder="Last Name"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-lg font-medium">Email</label>
            <input
              className="border-2 border-gray-300 rounded p-2 w-2/3"
              type="text"
              value={""}
              placeholder="something@gmail.com"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-lg font-medium">Billing Status</label>
            <input
              className="border-2 border-gray-300 rounded p-2 w-2/3"
              type="text"
              value={""}
              placeholder="Billing Status"
            />
          </div>

          <button className="bg-gray-700 text-white rounded p-4 mt-16">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
