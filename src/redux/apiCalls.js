import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  //takes two parameters dispatch and login, we get dispatch from the useDispatch hook
  dispatch(loginStart()); //call loginStart action
  try {
    const res = await publicRequest.post("/auth/login", user); //publicRequest gives the base url
    dispatch(loginSuccess(res.data)); //call loginSuccess action and pass res.data as payload
  } catch (err) {
    dispatch(loginFailure()); //if errror than we call loginFailure action
  }
};
