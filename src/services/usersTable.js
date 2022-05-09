import api from "./api"

export const usersTable = async (token) => {
    console.log("ola", token)
    return api.get("/users?page=1", {headers: {Authorization: `Bearer ${token}`}}).then(response => {console.log("entrou no then", response); return response.data}).catch(error => {console.log("entrou no catch", error)})    
}