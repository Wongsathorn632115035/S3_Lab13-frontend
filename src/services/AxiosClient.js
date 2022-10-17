import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://44.208.212.91:8999/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient