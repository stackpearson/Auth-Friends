import axios from 'axios';

export const axiosWithAuth = () => {
    const authToken = localStorage.getItem('authorizationToken')

    return axios.create({
        // baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: authToken
        }
    })
}