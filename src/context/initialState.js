import { fetchUser } from "../utilities/fetchingLocalStoreData";

const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
};
