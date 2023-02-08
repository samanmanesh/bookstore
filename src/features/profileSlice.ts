import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

export interface ProfileState {
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
    updateProfile : (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.blingStatus = action.payload.blingStatus;
      state.profileImage = action.payload.profileImage;
    }
  },
});

//write the type of the actions
export const { updateProfile} = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;
export default profileSlice.reducer;  
    

// setFirstName: (state, action) => {
//   state.firstName = action.payload;
// }
// ,
// setLastName: (state, action) => {
//   state.lastName = action.payload;
// }
// ,
// setEmail: (state, action) => {
//   state.email = action.payload;
// }
// ,
// setPhone: (state, action) => {
//   state.phone = action.payload;
// }
// ,
// setBlingStatus: (state, action) => {
//   state.blingStatus = action.payload;
// }
// ,
// setProfileImage: (state, action) => {
//   state.profileImage = action.payload;
// }


