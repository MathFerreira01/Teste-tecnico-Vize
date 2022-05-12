import api from "./api"

interface State {
    email: string;
    password: string;
    name: string;
}

export const registration = async ({email, password, name}:State) => {
    return api.post("/authaccount/registration", {email, password, name}).then(response => {return response.data}).catch(error => {console.log("entrou no catch", error)})
    
}