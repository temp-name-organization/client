import { GENDER } from "lib/constants";
import { http } from "./http/http";

type GenderType = keyof typeof GENDER;

export type Agetype = "teenager" | "twenties" | "thirties" | "forties" | "fifties" | null;

export interface GetUserInfoResponse {
  nickname: string;
  email: string;
  imageUrl: string;
  ageType: Agetype;
  gender: GenderType;
  mbti: string;
  alcoholLimit: string;
  userId: number;
}

export const getUserInfo = async () => {
  const response = await http.get<GetUserInfoResponse>("api/users");
  return response.data;
};
