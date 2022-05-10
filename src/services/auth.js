import api from "./api"

export const auth = async ({email, password}) => {
    return api.post("/authaccount/login", {email, password}).then(response => {return response.data}).catch(error => {console.log("entrou no catch", error)})
    
}

