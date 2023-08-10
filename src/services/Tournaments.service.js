import axios from "axios";

import {
    BASE_URL,
    api_TournamentsDeleteTournament,
    api_TournamentsGetAllTournaments,
    api_TournamentsNewTournament,
    api_TournamentsSearchByAvailable,
    api_TournamentsSearchByLocation,
    api_TournamentsSearchByOrganizer,
    api_TournamentsUpdateTournament,

} from "../utils/endpoints";


async function GetAllTournaments() {
    await axios({
        method: "GET",
        url: BASE_URL + api_TournamentsGetAllTournaments
    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return "OCURRIO UN ERROR AL OBTENER LA INFORMACION DE CANCHAS" + "\n" + JSON.stringify(error)
    })
}

async function SearchByLocation(location) {
    await axios({
        method: "GET",
        url: BASE_URL + api_TournamentsSearchByLocation + location
    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}
async function SearchByOrganizer(organizer) {
    await axios({
        method: "GET",
        url: BASE_URL + api_TournamentsSearchByOrganizer + organizer
    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}

async function SearchByAvailable(available) {
    await axios({
        method: "GET",
        url: BASE_URL + api_TournamentsSearchByAvailable + available
    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}


async function NewTournament(tournament) {
    await axios({
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        url: BASE_URL + api_TournamentsNewTournament,
        data: {
            id: "",
            tournamentOrganizer: tournament.tournamentOrganizer,
            tournamentDescription: tournament.tournamentDescription,
            tournamentLocation: tournament.tournamentLocation,
            tournamentStartDate: tournament.tournamentStartDate,
            tournamentEndDate: tournament.tournamentEndDate,
            tournamentAvailable: tournament.tournamentAvailable,
            tournamentUserId: tournament.tournamentUserId
        }
    }).then((apiResponse) => {
        return console.log(JSON.stringstringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}

async function UpdateTournament(update) {
    await axios({
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        url: BASE_URL + api_TournamentsUpdateTournament,
        data: {
            id: "",
            tournamentOrganizer: update.tournamentOrganizer,
            tournamentDescription: update.tournamentDescription,
            tournamentLocation: update.tournamentLocation,
            tournamentStartDate: update.tournamentStartDate,
            tournamentEndDate: update.tournamentEndDate,
            tournamentAvailable: update.tournamentAvailable,
            tournamentUserId: update.tournamentUserId
        }

    }).then((apiResponse) => {
        return console.log(JSON.stringify(apiResponse));
    }).catch((error) => {
        return console.log(JSON.stringify(error));
    })
}
async function DeleteTournament(idField) {
    if (idField != "" && idField != null) {
        await axios({
            method: "DELETE",
            url: BASE_URL + api_TournamentsDeleteTournament + idField,
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
    GetAllTournaments,
    SearchByLocation,
    SearchByOrganizer,
    SearchByAvailable,
    NewTournament,
    UpdateTournament,
    DeleteTournament
}