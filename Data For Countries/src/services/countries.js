import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => {
    const request = axios.get(baseUrl.concat("/all"))
    return request.then(response => {return response.data.map(country => country.name.common)})
}

const getOne = (name) => {
    const request = axios.get(baseUrl.concat("/name/",name))
    return request.then(response => {return response.data})
}

export default {getAll,getOne}