import { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  updateProfile,
  ProfileState,
  selectProfile,
} from "../features/profileSlice";

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

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const formFields = [
    {
      label: "First Name",
      name: "firstName",
      value: localData.firstName,
      placeholder: "First Name",
    },
    {
      label: "Last Name",
      name: "lastName",
      value: localData.lastName,
      placeholder: "Last Name",
    },
    {
      label: "Email",
      name: "email",
      value: localData.email,
      placeholder: "ex:someone@gmail.com",
    },
    {
      label: "Phone",
      name: "phone",
      value: localData.phone,
      placeholder: "Phone",
    },
    {
      label: "Billing Status",
      name: "billingStatus",
      value: localData.blingStatus,
      placeholder: "Billing Status",
    },
  ];

  console.log("profileState", data);

  const filedChange = (e: any) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const onClickUpdateProfile = () => {
    if (localData.firstName === "") {
      alert("Please enter first name");
      return;
    }
    if (localData.lastName === "") {
      alert("Please enter last name");
    }
    dispatch(updateProfile(localData))
  };

  return (
    <div className="flex place-items-center h-full my-32 px-16 place-content-center space-x-24 ">
      <div className="flex flex-col place-items-center justify-center  ">
        <div className="w-64 h-64 rounded-full text-[#EAEBED] bg-[#2E424D] flex place-items-center justify-center text-4xl text-bold ">
          {localData.profileImage ? (
            <Image
              src={localData.profileImage}
              alt="S"
              className="w-full h-full rounded-full"
            />
          ) : (
            localData.firstName[0] + localData.lastName[0]
          )}
        </div>
        <button className="bg-gray-700 text-white rounded p-4 mt-12">
          Update Image
        </button>
      </div>
      <div className=" w-1/3 h-full ">
        <form className="flex flex-col space-y-8  ">
          {formFields.map((field) => (
            <div key={field.label + 1} className="flex items-center justify-between  ">
              <label className="text-lg font-medium">{field.label}</label>
              <input
                className="border-2 border-gray-300 rounded p-2 w-2/3"
                type="text"
                name={field.name}
                value={field.value}
                placeholder={field.placeholder}
                onChange={filedChange}
              />
            </div>
          ))}
          <button
            className="bg-gray-700 text-white rounded p-4 mt-16"
            onClick={onClickUpdateProfile}
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Account;
