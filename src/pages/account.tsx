/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  updateProfile,
  ProfileState,
  selectProfile,
} from "../features/profileSlice";
import UseWebcam from "../tools/useWebcam";

const Account = () => {
  const profileState = useSelector(selectProfile);
  const { data, status, error } = profileState;
  const dispatch = useDispatch();
  const [picture, setPicture] = useState<string>("");
  const [isWebcamClose, setIsWebcamClose] = useState<boolean>(true);
  const [save, setSave] = useState<boolean>(false);
  const [localData, setLocalData] = useState<ProfileState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    billingStatus: "",
    profileImage: "",
  });

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const formFields = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      value: localData.firstName,
      placeholder: "First Name",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      value: localData.lastName,
      placeholder: "Last Name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      value: localData.email,
      placeholder: "ex:someone@gmail.com",
    },
    {
      label: "Phone",
      name: "phone",
      value: localData.phone,
      type: "tel",
      placeholder: "Phone",
    },
    {
      label: "Billing Status",
      name: "billingStatus",
      value: localData.billingStatus,
      type: "text",
      placeholder: "Billing Status",
    },
  ];

  useEffect(() => {
    if (picture !== "" && save) {
      setLocalData((prev) => ({ ...prev, profileImage: picture }));
    }
  }, [picture, save]);

  const onFieldChange = (e: any) => {
    e.preventDefault();
    setLocalData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onClickUpdateProfile = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateProfile(localData));
  };

  return (
    <div className="flex place-items-center h-full my-32 container mx-auto place-content-center space-x-24 ">
      <div className="flex flex-col place-items-center justify-center  ">
        {isWebcamClose ? (
          <>
            <div className="w-64 h-64 rounded-full text-[#EAEBED] bg-[#2E424D] flex place-items-center justify-center text-4xl text-bold ">
              {localData.profileImage ? (
                <img
                  src={localData.profileImage}
                  alt="profileImage"
                  className="rounded-full w-full h-full object-cover"
                />
              ) : (
                data.firstName[0]?.toLocaleUpperCase() +
                data.lastName[0]?.toLocaleUpperCase()
              )}
            </div>
            <button
              className="bg-gray-700 text-white rounded p-4 mt-12"
              onClick={() => setIsWebcamClose(false)}
            >
              Update Image
            </button>
          </>
        ) : (
          <div className=" ">
            <UseWebcam
              setPicture={setPicture}
              picture={picture}
              closeWebcam={() => setIsWebcamClose(true)}
              setSave={setSave}
            />
          </div>
        )}
      </div>
      <div className=" w-1/3 h-full ">
        <form
          onSubmit={onClickUpdateProfile}
          className="flex flex-col space-y-8  "
        >
          {formFields.map((field) => (
            <div
              key={field.label + 1}
              className="flex items-center justify-between  "
            >
              <label className="text-lg font-medium">{field.label}</label>
              <input
                className="border-2 border-gray-300 rounded p-2 w-2/3"
                type={field.type}
                name={field.name}
                value={field.value}
                placeholder={field.placeholder}
                onChange={onFieldChange}
              />
            </div>
          ))}
          <button
            className="bg-gray-700 text-white rounded p-4 mt-16"
            type="submit"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Account;
