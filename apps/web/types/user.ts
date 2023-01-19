export interface MBTIType {
  M: "E" | "I" | null;
  B: "S" | "N" | null;
  T: "T" | "F" | null;
  I: "J" | "P" | null;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
export type SocialType = "NAVER" | "KAKAO";

export interface UserInfo {
  gender: "MALE" | "FEMALE" | null;
  MBTI: MBTIType;
  age: string | null;
}

export interface GetUserInfoResponse {
  userId: number;
  provider: SocialType;
  providerId: string;
  username: string;
  email: string;
  imageUrl: string;
  age: string | null;
  gender: "MALE" | "FEMALE" | null;
  MBTI: MBTIType;
}