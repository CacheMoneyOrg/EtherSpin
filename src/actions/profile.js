export const PROFILE_GET_USER = "PROFILE_GET_USER";
export const PROFILE_GET_USER_SUCCESS = "PROFILE_GET_USER_SUCCESS";
export const PROFILE_GET_USER_FAILURE = "PROFILE_GET_USER_FAILURE";

export function getProfile(userID){
	return {
		type: PROFILE_GET_USER,
		payload: client.userGetProfile(userID)
	};
};
