import api from "./api"

export const auth = async ({email, password}) => {
    console.log("Seu email", email)
    console.log("Sua senha", password)
    return api.post("/authaccount/login", {email, password}).then(response => {console.log("entrou no then", response)}).catch(error => {console.log("entrou no catch", error)})
    
}

