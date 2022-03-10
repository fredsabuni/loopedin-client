import axios from 'axios';

// Local URL: http://localhost:3001 
const API_URL = 'https://loopedin-server.herokuapp.com/api/v1/'; 

const AuthService = {
  signup(credentials) {
    return axios.post(`${API_URL}signup`, credentials)
  },
  login(credentials) {
    return axios.post(`${API_URL}login`, credentials)
  },
  logout() {
    return localStorage.removeItem('token')
  },
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'))
  }
}

export default AuthService