import axios from "axios"
const apiBaseURL = "https://fakestoreapi.com/products"

export const data = () => {
  return axios.get(apiBaseURL)
}
