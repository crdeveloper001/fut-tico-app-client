//API BASE ENDPOINTS
export const BASE_URL = 'http://localhost:5000';
export const BASE_CLOUD_URL = "not deploy"

//FIELDS
export const api_FieldsDeleteById = "/api/v1/Fields/DeleteField/";
export const api_FieldsGetAllFields = "/api/v1/Fields/GetAllField/";
export const api_FieldsUpdateField = "/api/v1/Fields/UpdateField";
export const api_FieldsNewField = "/api/v1/Fields/NewField";
export const api_FieldsSearchByLocation = "/api/v1/Fields/SearchByLocation/";

//RESERVARTIONS
export const api_ReservationsGetAllReservation = "/api/v1/Reservations/GetAllReservations";
export const api_ReservationsNewReservation = "/api/v1/Reservations/NewReservation";
export const api_ReservationsUpdateReservation = "/api/v1/Reservations/UpdateReservation";
export const api_ReservationsDeleteReservation = "/api/v1/Reservations/DeleteReservation/";
export const api_ReservationsSearchByFieldType = "/api/v1/Reservations/SearchByFieldType/";
export const api_ReservationsSearchByGameType = "/api/v1/Reservations/SearchByGameType/";

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

