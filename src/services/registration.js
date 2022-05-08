import api from "./api"

export const registration = async ({email, password, name}) => {
    console.log("Seu email", email)
    console.log("Sua senha", password)
    console.log("Seu nome", name)
    return api.post("/authaccount/registration", {email, password, name}).then(response => {console.log("entrou no then", response)}).catch(error => {console.log("entrou no catch", error)})
    
}