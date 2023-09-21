import axios from "axios";

import {
    BASE_URL,
    api_ReservationsDeleteReservation,
    api_ReservationsGetAllReservation,
    api_ReservationsNewReservation,
    api_ReservationsSearchByFieldType,
    api_ReservationsSearchByGameType,
    api_ReservationsSearchByUserId,
    api_ReservationsUpdateReservation,

} from "../utils/endpoints";

async function GetAllReservations() {

    try {
        const apiResponse = await axios({
            method: "GET",
            url: BASE_URL + api_ReservationsGetAllReservation
        });
        return apiResponse; // Return the data from the API response
    } catch (error) {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE RESERVAS" + "\n" + JSON.stringify(error);
    }
}

async function SearchByGameType(game) {

    try {
        const apiResponse = await axios({
            method: "GET",
            url: BASE_URL + api_ReservationsSearchByGameType + game
        });
        return apiResponse; // Return the data from the API response
    } catch (error) {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE RESERVAS" + "\n" + JSON.stringify(error);
    }
}
async function SearchByFieldType(field) {

    try {
        const apiResponse = await axios({
            method: "GET",
            url: BASE_URL + api_ReservationsSearchByFieldType + field
        });
        return apiResponse; // Return the data from the API response
    } catch (error) {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE RESERVAS" + "\n" + JSON.stringify(error);
    }
}
async function SearchByUserId(userId) {

    try {
        const apiResponse = await axios({
            method: "GET",
            url: BASE_URL + api_ReservationsSearchByUserId + userId
        });
        return apiResponse; // Return the data from the API response
    } catch (error) {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE RESERVAS" + "\n" + JSON.stringify(error);
    }
}
async function NewReservation(field) {


    try {
        const apiResponse = await axios({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            url: BASE_URL + api_ReservationsNewReservation,
            data: {
                id: field.id,
                reservationName: field.reservationName,
                reservationLastName: field.reservationLastName,
                reservationPhone: field.reservationPhone,
                reservationEmail: field.reservationEmail,
                reservationNumberPlayers: field.reservationNumberPlayers,
                reservationDate: field.reservationDate,
                reservationFieldType: field.fieldDetails,
                reservationUserId: field.reservationUserId
            }
        });
        return apiResponse; // Return the data from the API response
    } catch (error) {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE RESERVAS" + "\n" + JSON.stringify(error);
    }
}

async function UpdateReservation(update) {
    try {
        const apiResponse = await axios({
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            url: BASE_URL + api_ReservationsUpdateReservation,
            data: {
                id: update.id,
                reservationName: update.reservationName,
                reservationLastName: update.reservationLastName,
                reservationPhone: update.reservationPhone,
                reservationEmail: update.reservationEmail,
                reservationNumberPlayers: update.reservationNumberPlayers,
                reservationDate: update.reservationDate,
                reservationFieldType: update.fieldDetails,
                reservationUserId: update.reservationUserId
            }
        });
        return apiResponse; // Return the data from the API response
    } catch (error) {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE RESERVAS" + "\n" + JSON.stringify(error);
    }
}
async function DeleteReservation(idReservation) {
    if (idReservation != "" && idReservation != null) {
        try {
            const apiResponse = await axios({
                method: "DELETE",
                url: BASE_URL + api_ReservationsDeleteReservation + idReservation,
            });
            return apiResponse; // Return the data from the API response
        } catch (error) {
            return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE RESERVAS" + "\n" + JSON.stringify(error);
        }
    }
}

export default {
    GetAllReservations,
    SearchByFieldType,
    SearchByGameType,
    SearchByUserId,
    NewReservation,
    UpdateReservation,
    DeleteReservation
}