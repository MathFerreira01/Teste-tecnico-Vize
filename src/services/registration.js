import api from "./api"

export const registration = async ({email, password, name}) => {
    return api.post("/authaccount/registration", {email, password, name}).then(response => {return response.data}).catch(error => {console.log("entrou no catch", error)})
    
}