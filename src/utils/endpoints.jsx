//API BASE ENDPOINTS
//export const BASE_URL = 'http://localhost:8080';
export const BASE_URL = "https://app-a51f3f31-e875-43b6-b74d-ef19d9045215.cleverapps.io";

//AUTHENTICATION
export const api_Authentication = "/api/v1/Authorization/AuthenticateProfile"

//FIELDS
export const api_FieldsDeleteById = "/api/v1/Fields/DeleteField/";
export const api_FieldsGetAllFields = "/api/v1/Fields/GetAllField";
export const api_FieldsUpdateField = "/api/v1/Fields/UpdateField";
export const api_FieldsNewField = "/api/v1/Fields/NewField";
export const api_FieldsSearchByLocation = "/api/v1/Fields/SearchByLocation/";
export const api_FieldsSearchByGameType = "/api/v1/Fields/SearchByGameType/";
export const api_FieldsSearchByName = "/api/v1/Fields/SearchByName/";

//RESERVARTIONS
export const api_ReservationsGetAllReservation = "/api/v1/Reservations/GetAllReservations";
export const api_ReservationsNewReservation = "/api/v1/Reservations/NewReservation";
export const api_ReservationsUpdateReservation = "/api/v1/Reservations/UpdateReservation";
export const api_ReservationsDeleteReservation = "/api/v1/Reservations/DeleteReservation/";
export const api_ReservationsSearchByFieldType = "/api/v1/Reservations/SearchByFieldType/";
export const api_ReservationsSearchByGameType = "/api/v1/Reservations/SearchByGameType/";
export const api_ReservationsSearchByUserId = "/api/v1/Reservation/SearchByFieldUserId/"

//TOURNAMENTS
export const api_TournamentsGetAllTournaments = "/api/v1/Tournaments/GetAllTournaments";
export const api_TournamentsSearchByLocation = "/api/v1/Tournaments/SearchByLocation/";
export const api_TournamentsSearchByOrganizer = "/api/v1/Tournaments/SearchByOrganizer/";
export const api_TournamentsSearchByAvailable = "/api/v1/Tournaments/SearchByAvailable/";
export const api_TournamentsNewTournament = "/api/v1/Tournaments/NewTournament";
export const api_TournamentsUpdateTournament = "/api/v1/Tournaments/UpdateTournament";
export const api_TournamentsDeleteTournament = "/api/v1/Tournaments/DeleteTournament/";

//USERS:
export const api_UsersGetAllUsersProfiles = "/api/v1/Users/GetAllUsersProfiles"
export const api_UsersSearchByRolType = "/api/v1/Users/SearchByRolType/"
export const api_UsersNewUserProfile = "/api/v1/Users/NewUserProfile"
export const api_UsersUpdateProfile= "/api/v1/Users/UpdateProfile/"
export const api_UsersDeleteProfile= "/api/v1/Users/DeleteProfile"

