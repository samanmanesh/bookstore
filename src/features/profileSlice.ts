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
  profileImage: "https://media.licdn.com/dms/image/D5603AQGYbj7t1sc6xg/profile-displayphoto-shrink_400_400/0/1675472785226?e=1681344000&v=beta&t=oEUo4goBVzqHwgo5SFfWl9lELy11jC0Xpzf-2xIHCd4",
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
    

