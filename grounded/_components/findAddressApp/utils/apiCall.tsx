import axios from 'axios'

const callConfig = {
  baseUrl: `https://api.getAddress.io/find`
}

export default axios.create({
  baseURL: callConfig.baseUrl
})
