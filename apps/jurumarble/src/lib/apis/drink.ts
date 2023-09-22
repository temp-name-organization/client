import { DrinkInfoSortType } from "src/types/common";
import { DrinkListResponse } from "src/types/drink";
import { baseApi } from "./http/base";
import { http } from "./http/http";

export interface GetDrinkListRequest {
  page: number;
  size: number;
  keyword?: string;
  region?: string;
  sortBy: DrinkInfoSortType;
}

interface GetDrinkListResponse extends DrinkListResponse {}

export const getDrinkList = async (params: GetDrinkListRequest) => {
  const response = await baseApi.get<GetDrinkListResponse>("api/drinks", {
    params: {
      ...params,
    },
  });
  return response.data;
};

export interface GetHotDrinkResponse {
  drinkId: number;
  name: string;
  manufactureAddress: string;
  image: string;
}
export const getHotDrinkList = async () => {
  const response = await baseApi.get<GetHotDrinkResponse[]>("api/drinks/hot");
  return response.data;
};

interface GetEnjoyedDrinkListRequest {
  page: number;
  size: number;
  region?: string;
}

interface GetEnjoyedDrinkListResponse extends DrinkListResponse {}

export const getEnjoyedDrinkList = async (params: GetEnjoyedDrinkListRequest) => {
  const response = await http.get<GetEnjoyedDrinkListResponse>("api/drinks/enjoys", {
    params: {
      ...params,
    },
  });
  return response.data;
};
