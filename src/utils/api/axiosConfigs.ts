import axios, { AxiosRequestConfig } from 'axios'

const API_URL = 'https://dev-api.gist-petition.com/v1/'

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  validateStatus: function (status: number) {
    return status < 500
  },
  timeout: 10000,
  withCredentials: true,
}

const api = axios.create(config)

export default api

export { config, API_URL }
