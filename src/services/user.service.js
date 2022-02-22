import axios from 'axios';
import authHeader from './auth-header'

const API_URL = 'https://loopedin-server.herokuapp.com/api/v1/'

const UserService = {
  getUserDash() {
    return axios.get(API_URL + 'user/dash', { header: authHeader() })
  }
}

export default UserService