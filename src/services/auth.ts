import api from "./api"

interface State {
    email: string;
    password: string;
 }

export const auth = async ({email, password}:State) => {
    return api.post("/authaccount/login", {email, password}).then(response => {return response.data}).catch(error => {console.log("entrou no catch", error)})
    
}

