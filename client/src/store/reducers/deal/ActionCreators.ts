import { AxiosError } from "axios";

import { dealSlice } from "./DealSlice";
import { $authHost } from "http/index";
import { IDeal } from "models/Deal";
import { AppDispatch } from "store/store";

const DEAL_API_PATH = "api/deal";

export const getDeals = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(dealSlice.actions.getDeals());
    const { data } = await $authHost.get<IDeal[]>(`${DEAL_API_PATH}/all`);
    dispatch(dealSlice.actions.getDealsSuccess(data));
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
