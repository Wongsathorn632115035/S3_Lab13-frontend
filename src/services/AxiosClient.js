import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://52.23.234.62:8999/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient