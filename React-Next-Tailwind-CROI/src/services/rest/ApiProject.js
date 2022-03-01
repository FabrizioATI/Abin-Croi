const API_HOST = 'http://127.0.0.1:8000'

export async function getProjectApi(){
    try{
        const api = `${API_HOST}/api-project/project_view/`;
        const response = await fetch(api);
        const result = await response.json();
        return result
    }catch(error){
        throw  error;
    }
}