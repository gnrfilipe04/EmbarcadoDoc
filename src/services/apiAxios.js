const axios = require('axios')

const apiAxios = axios.create({
    baseURL: 'https://disease.sh/v3/covid-19/',
    timeout: 5000
})

module.exports = apiAxios