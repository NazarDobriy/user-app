import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IDeal } from "models/Deal";

interface DealState {
  deals: IDeal[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DealState = {
  deals: [],
  isLoading: false,
  error: null
};

export const dealSlice = createSlice({
  name: "Deal",
  initialState,
  reducers: {
    getDeals(state) {
      state.isLoading = true;
      state.error = null;
    },
    getDealsSuccess(state, action: PayloadAction<IDeal[]>) {
      state.isLoading = false;
      state.deals = action.payload;
    },
    getDealsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default dealSlice.reducer;
