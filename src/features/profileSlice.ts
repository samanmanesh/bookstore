import { createSlice } from "@reduxjs/toolkit";

interface ProfileState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  blingStatus: string;
  profileImage: string;
}

const initialState: ProfileState = {
  firstName: "Saman",
  lastName: "Manesh",
  email: "",
  phone: "",
  blingStatus: "active",
  profileImage: "",
}

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    }
    ,
    setLastName: (state, action) => {
      state.lastName = action.payload;
    }
    ,
    setEmail: (state, action) => {
      state.email = action.payload;
    }
    ,
    setPhone: (state, action) => {
      state.phone = action.payload;
    }
    ,
    setBlingStatus: (state, action) => {
      state.blingStatus = action.payload;
    }
    ,
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    }

  },
});

//write the type of the actions
export const { setFirstName, setLastName, setEmail, setPhone, setBlingStatus, setProfileImage } = profileSlice.actions;

export default profileSlice.reducer;  
    


