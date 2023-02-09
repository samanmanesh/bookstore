import { RootState , AppDispatch} from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  billingStatus: string;
  profileImage: string;
}

const initialState: ProfileState = {
  firstName: "Saman",
  lastName: "Manesh",
  email: "",
  phone: "",
  billingStatus: "active",
  profileImage: "",
}

export const profileSlice = createSlice({
  name: "profile",
  initialState : {
    status: 'idle',
    error: null,
    data : initialState
  },
  reducers: {
    updateProfile : (state, action : PayloadAction<ProfileState> ) => {
      console.log('state>>', state)
      console.log('action>>', action)
      state.data = action.payload;
      state.status = 'success';
      state.error = null;
      // state.firstName = action.payload.firstName;
      // state.lastName = action.payload.lastName;
      // state.email = action.payload.email;
      // state.phone = action.payload.phone;
      // state.billingStatus = action.payload.billingStatus;
      // state.profileImage = action.payload.profileImage;
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


