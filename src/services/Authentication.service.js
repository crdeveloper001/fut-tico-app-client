import { BASE_URL, api_Authentication } from "../utils/endpoints";
import axios from "axios";

async function AuthorizeProfile(credentials) {
  const apiResponse = await axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: BASE_URL + api_Authentication,
    data: {
      id: "",
      userName: null,
      userLastName: null,
      userPhone: null,
      userEmail: null,
      userAccount: credentials.userAccount,
      userAccountPassword: credentials.userAccountPassword,
      userRol: null,
      userActive: false,
    },
  });

  return apiResponse;
}

export default {
  AuthorizeProfile,
};
