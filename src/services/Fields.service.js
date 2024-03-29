import axios from "axios";

import {
    BASE_URL,
    api_FieldsDeleteById,
    api_FieldsNewField,
    api_FieldsUpdateField,
    api_FieldsGetAllFields,
    api_FieldsSearchByLocation,
    api_FieldsSearchByName,
    api_FieldsSearchByGameType,
} from "../utils/endpoints";


async function GetAllFields() {
    try {
        const apiResponse = await axios({
            method: "GET",
            url: BASE_URL + api_FieldsGetAllFields,
        });
        return apiResponse.data; // Return the data from the API response
    } catch (error) {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE CANCHAS" + "\n" + JSON.stringify(error);
    }
}

async function SearchByLocation(location) {

    try {
        const apiResponse = await axios({
            method: "GET",
            url: BASE_URL + api_FieldsSearchByLocation + location,
        });
        return apiResponse; // Return the data from the API response
    } catch (error) {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE CANCHAS" + "\n" + JSON.stringify(error);
    }

}
async function SearchByGameType(gameType) {
    try {
        const apiResponse = await axios({
            method: "GET",
            url: BASE_URL + api_FieldsSearchByGameType + gameType,
        });
        return apiResponse; // Return the data from the API response
    } catch (error) {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE CANCHAS" + "\n" + JSON.stringify(error);
    }

}
async function SearchByGameName(fieldName) {
    try {
        const apiResponse = await axios({
            method: "GET",
            url: BASE_URL + api_FieldsSearchByName + fieldName,
        });
       
        return apiResponse; // Return the data from the API response
    } catch (error) {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE CANCHAS" + "\n" + JSON.stringify(error);
    }

}

async function NewField(field) {
    await axios({
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        url: BASE_URL + api_FieldsNewField,
        data: {
            id: "",
            fieldName: field.fieldName,
            fieldPhone: field.fieldPhone,
            fieldAvailable: field.fieldAvailable,
            fieldLocation: field.fieldLocation,
            fieldDescription: field.fieldDescription
        }
    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}

async function UpdateField(update) {
    await axios({
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        url: BASE_URL + api_FieldsUpdateField,
        data: {
            id: update.id,
            fieldName: update.fieldName,
            fieldPhone: update.fieldPhone,
            fieldAvailable: update.fieldAvailable,
            fieldLocation: update.fieldLocation,
            fieldDescription: update.fieldDescription
        }

    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}
async function DeleteField(idField) {
    if (idField != "" && idField != null) {
        await axios({
            method: "DELETE",
            url: BASE_URL + api_FieldsDeleteById + idField,
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
    GetAllFields,
    SearchByLocation,
    SearchByGameType,
    SearchByGameName,
    NewField,
    UpdateField,
    DeleteField
}