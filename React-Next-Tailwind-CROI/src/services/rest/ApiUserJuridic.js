import apiRest from "../AxiosInstance";
export const getAllUserJuridic = async (token) => {
	return apiRest.get("/user/user_juridic/", {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`,
			accept: 'application/json',
		}
	})
}