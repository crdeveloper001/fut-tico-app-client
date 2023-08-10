import axios from "axios";

import {
    BASE_URL,
    api_ReservationsDeleteReservation,
    api_ReservationsGetAllReservation,
    api_ReservationsNewReservation,
    api_ReservationsSearchByFieldType,
    api_ReservationsSearchByGameType,
    api_ReservationsUpdateReservation,

} from "../utils/endpoints";


async function GetAllReservations() {
    await axios({
        method: "GET",
        url: BASE_URL + api_ReservationsGetAllReservation
    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE CANCHAS" + "\n" + JSON.stringify(error)
    })
}

async function SearchByGameType(game) {
    await axios({
        method: "GET",
        url: BASE_URL + api_ReservationsSearchByGameType + game
    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}
async function SearchByFieldType(field) {
    await axios({
        method: "GET",
        url: BASE_URL + api_ReservationsSearchByFieldType + field
    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}
async function NewReservation(field) {
    await axios({
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
            reservationFieldType: field.reservationFieldType,
            reservationGameType: field.reservationGameType,
            reservationDate: field.reservationDate,
            reservationUserId: field.reservationUserId
        }
    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}

async function UpdateReservation(update) {
    await axios({
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
            reservationFieldType: update.reservationFieldType,
            reservationGameType: update.reservationGameType,
            reservationDate: update.reservationDate,
            reservationUserId: update.reservationUserId
        }

    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}
async function DeleteReservation(idReservation) {
    if (idReservation != "" && idReservation != null) {
        await axios({
            method: "DELETE",
            url: BASE_URL + api_ReservationsDeleteReservation + idReservation,
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
    GetAllReservations,
    SearchByFieldType,
    SearchByGameType,
    NewReservation,
    UpdateReservation,
    DeleteReservation
}