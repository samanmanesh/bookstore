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
    status: 'idle' as 'idle' | 'loading' | 'success' | 'error',
    error: null as string | null,
    data : initialState
  },
  reducers: {
    updateProfile : (state, action : PayloadAction<ProfileState> ) => {
      if (action.payload === undefined) {
        state.status = 'error';
        state.error = 'Error in updating profile';
        return;
      }
      state.data = action.payload;
      state.status = 'success';
      state.error = null;
    }
  },
});

//write the type of the actions
export const { updateProfile} = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;
export default profileSlice.reducer;  
    

