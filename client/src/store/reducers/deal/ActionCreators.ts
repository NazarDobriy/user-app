import { AxiosError } from "axios";

import { dealSlice } from "./DealSlice";
import { $host } from "http/index";
import { IDeal } from "models/Deal";
import { AppDispatch } from "store/store";

const DEAL_API_PATH = "api/deal";

export const getDeals = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(dealSlice.actions.getDeals());
    const response = await $host.get<IDeal[]>(DEAL_API_PATH);
    dispatch(dealSlice.actions.getDealsSuccess(response.data));
  } catch (error) {
    dispatch(
      dealSlice.actions.getDealsFailure(
        error instanceof AxiosError
          ? error.response?.data.message
          : "Get deals error"
      )
    );
  }
};
