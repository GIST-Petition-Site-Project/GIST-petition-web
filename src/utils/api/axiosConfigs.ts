import { AxiosRequestConfig } from 'axios'
const config: AxiosRequestConfig = {
  validateStatus: function (status: number) {
    return status < 500
  },
  timeout: 10000,
}

export { config }
