import apiRest from "../AxiosInstance";
export const loginApp = async (email, password) => {
	return apiRest.post("/user/api/token/", {
		password: password,
		email: email
	}, {
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json'
		}
	})
}