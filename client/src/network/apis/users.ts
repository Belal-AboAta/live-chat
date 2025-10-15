import type { IUser } from "@/types/user";
import { axiosInstance } from ".";

export const getUsers = async (): Promise<IUser[]> => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const getRandomUser = async (): Promise<IUser> => {
  const response = await axiosInstance.get("/user");
  return response.data;
};
