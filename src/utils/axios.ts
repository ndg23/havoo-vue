import axios from 'axios';
const server = "http://192.168.1.21:3008/api/v1"
const instance = axios.create({
    baseURL: server,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') // Exemple d'utilisation d'un jeton d'authentification stocké localement
    }
});

export default instance;
