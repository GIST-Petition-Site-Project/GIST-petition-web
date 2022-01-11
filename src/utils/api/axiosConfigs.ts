import { AxiosRequestConfig } from 'axios'

const API_URL = 'https://dev-api.gist-petition.com/v1/'

const config: AxiosRequestConfig = {
  validateStatus: function (status: number) {
    return status < 500
  },
  timeout: 10000,
  withCredentials: true,
}

export { config, API_URL }
