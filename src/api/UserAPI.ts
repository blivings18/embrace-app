import User from "../types/User";
import embraceAPI from "./EmbraceAPI";

const USER_API_ENDPOINT = "/api/users";

export const getUsers = async() => {
  return (await embraceAPI.get<User[]>(USER_API_ENDPOINT)).data;
};

export const getPotentialMatchUser = async() => {
  return (await embraceAPI.get<User>(`${USER_API_ENDPOINT}/potential-match`)).data;
};
