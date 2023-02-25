import { QueryClient } from "@tanstack/react-query";
import { addInfoAPI, addInterestCategoryAPI, getUserInfo } from "lib/apis/user";
import Path from "lib/Path";
import { reactQueryKeys } from "lib/queryKeys";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import { Gender, UserInfo } from "types/user";
import { CategoryNameType } from "types/vote";

export default function useRegisterService() {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<UserInfo>({
    gender: null,
    MBTI: {
      M: null,
      B: null,
      T: null,
      I: null,
    },
    age: null,
  });

  const [progress, setProgress] = useState(1);
  const onChangeProgress = (number: number) => {
    setProgress((prev) => prev + number);
  };

  const onChangeGender = (select: Gender) => {
    setUserInfo((prev) => ({ ...prev, gender: select }));
  };
  const onChangeMBTI = (e: MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;
    setUserInfo((prev) => ({ ...prev, MBTI: { ...prev.MBTI, [name]: value } }));
  };

  const sliceAgeString = (age?: string | null) => {
    if (!age) return "";
    return age.length === 2 ? age.substring(1) : age;
  };
  const onChangeAge = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { innerText } = e.currentTarget;
    setUserInfo((prev) => ({
      ...prev,
      age: sliceAgeString(prev.age) + innerText,
    }));
  };
  const onDeleteAge = () => {
    setUserInfo((prev) => ({ ...prev, age: null }));
  };

  const queryClient = new QueryClient();

  const onCompleteRegister = async ({ MBTI, age, gender }: UserInfo) => {
    const stringMBTI = `${MBTI.M}${MBTI.B}${MBTI.T}${MBTI.I}`;
    try {
      await addInfoAPI({
        mbti: stringMBTI,
        age: Number(age),
        gender,
      });
      router.replace(Path.REGISTER_INTERSTER_PAGE);
    } catch (error) {
      alert(error);
    } finally {
      queryClient.prefetchQuery(reactQueryKeys.userInfo(), getUserInfo, {
        staleTime: Infinity,
        cacheTime: Infinity,
      });
    }
  };

  // @note interest page

  const [categoryLists, setCategoryLists] = useState<CategoryNameType[]>([]);

  const onClickCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.name as CategoryNameType;
    categoryLists.includes(category)
      ? setCategoryLists((prev) => prev.filter((item) => item !== category))
      : setCategoryLists((prev) => [...prev.concat(category)]);
  };

  const onClickComplete = async () => {
    try {
      await addInterestCategoryAPI({
        categoryLists,
      });
      router.push(Path.MAIN_PAGE);
    } catch (error) {
      alert(error);
    } finally {
      queryClient.prefetchQuery(reactQueryKeys.userInfo(), getUserInfo, {
        staleTime: Infinity,
        cacheTime: Infinity,
      });
    }
  };

  return {
    userInfo,
    progress,
    onChangeProgress,
    onChangeGender,
    onChangeMBTI,
    onChangeAge,
    onDeleteAge,
    onCompleteRegister,
    categoryLists,
    onClickCategory,
    onClickComplete,
  };
}
