const API = process.env.API_BACKEND_URL_ENV

const endPoints = {
	auth: {
		login: `http://localhost:3001/api/v1/auth/login`
	},
	project: {
		project_list: `http://localhost:3001/api/v1/project`,
		project_update: (id) => `http://localhost:3001/api/v1/project${id}/`,
	},
	category:{
		category_list: `http://localhost:3001/api/v1/category`
	}
}

export default endPoints;