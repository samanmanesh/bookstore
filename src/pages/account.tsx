import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  updateProfile,
  ProfileState,
  selectProfile,
} from "../features/profileSlice";

const Account = () => {
  const profileState = useSelector(selectProfile);
  const { data, status, error } = profileState;
  const dispatch = useDispatch();
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
      value: localData.billingStatus,
      placeholder: "Billing Status",
    },
  ];

  console.log("profileState", data);

  const onFieldChange = (e: any) => {
    e.preventDefault();
    setLocalData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onClickUpdateProfile = (e: FormEvent) => {
    e.preventDefault()
    
    // if (localData.firstName === "") {
    //   alert("Please enter first name");
    //   return;
    // }
    // if (localData.lastName === "") {
    //   alert("Please enter last name");
    // }
    console.log("localData before dispatch",localData)
    dispatch(updateProfile(localData))
  };
console.log("localData",localData)
  return (
    <div className="flex place-items-center h-full my-32 px-16 place-content-center space-x-24 ">
      <div className="flex flex-col place-items-center justify-center  ">
        <div className="w-64 h-64 rounded-full text-[#EAEBED] bg-[#2E424D] flex place-items-center justify-center text-4xl text-bold ">
          {localData.profileImage ? (
            <Image
              src={localData.profileImage}
              alt="S"
              width={640}
              height={640}
              className="w-full h-full rounded-full"
            />
          ) : (
            data.firstName[0]?.toLocaleUpperCase() + data.lastName[0]?.toLocaleUpperCase()
          )}
        </div>
        <button className="bg-gray-700 text-white rounded p-4 mt-12">
          Update Image
        </button>
      </div>
      <div className=" w-1/3 h-full ">
        <form onSubmit={onClickUpdateProfile} className="flex flex-col space-y-8  ">
          {formFields.map((field) => (
            <div key={field.label + 1} className="flex items-center justify-between  ">
              <label className="text-lg font-medium">{field.label}</label>
              <input
                className="border-2 border-gray-300 rounded p-2 w-2/3"
                type="text"
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
