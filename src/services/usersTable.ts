import api from "./api"

interface State {
    token: string;
}

export const usersTable = async (token: State) => {
    return api.get("/users?page=1", {headers: {Authorization: `Bearer ${token}`}}).then(response => {return response.data}).catch(error => {console.log("entrou no catch", error)})    
}