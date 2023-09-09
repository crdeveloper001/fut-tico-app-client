import axios from "axios";

import {
  BASE_URL,
  api_UsersNewUserProfile,
  api_UsersDeleteProfile,
  api_UsersUpdateProfile,
  api_UsersSearchByRolType,
  api_UsersGetAllUsersProfiles,
} from "../utils/endpoints";

async function GetAllCurrentUsers() {
  await axios({
    method: "GET",
    url: BASE_URL + api_UsersGetAllUsersProfiles,
  })
    .then((apiResponse) => {
      return console.log(JSON.stringify(apiResponse));
    })
    .catch((error) => {
      return console.log(
        "OCURRIO UN ERROR AL OBTENER LA INFO DE LOS USUARIOS" +
        "\n" +
        JSON.stringify(error)
      );
    });
}

async function SearchbyRolType(rolName) {
  console.log(rolName);

  await axios({
    method: "get",
    url: BASE_URL + api_UsersSearchByRolType + rolName,
  }).then((apiResponse) => {
    console.log(JSON.stringify(apiResponse));

    return apiResponse;
  });
}
/** */
async function RegisterNewUser(userProfileData) {
  try {
    console.log(userProfileData);

    if (userProfileData != null) {
      const apiResponse = await axios({
        url: BASE_URL + api_UsersNewUserProfile,
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        data: {
          id: "",
          userName: userProfileData.userName,
          userLastName: userProfileData.userLastName,
          userPhone: userProfileData.userPhone,
          userEmail: userProfileData.userEmail,
          userAccount: userProfileData.userAccount,
          userAccountPassword: userProfileData.userAccountPassword,
          userRol: userProfileData.userRol,
          userActive: userProfileData.userActive,
        },
      })

      return apiResponse;
    }
  } catch (error) {
    console.error('Error:', error.response.data);
    throw error; // Re-throw the error to be caught by the caller
  }
}

async function UpdateUser(updateData) {
  console.log(updateData);

  if (updateData != null) {
    await axios({
      method: "PUT",
      url: BASE_URL + api_UsersUpdateProfile,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((apiResponse) => {
        console.log(JSON.stringify(apiResponse));

        return apiResponse;
      })
      .catch((error) => {
        return console.log(JSON.stringify(error));
      });
  }
}
async function DeleteUserWithiId(idUser) {
  if (idUser != "" && idUser != null) {
    await axios({
      method: "DELETE",
      url: BASE_URL + api_UsersDeleteProfile + idUser,
    })
      .then((apiResponse) => {
        console.log(JSON.stringify(apiResponse));
        return apiResponse;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }
}

export default {
  GetAllCurrentUsers,
  SearchbyRolType,
  RegisterNewUser,
  UpdateUser,
  DeleteUserWithiId,
};
