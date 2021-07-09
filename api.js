const axios = require('axios')
require('dotenv').config()

const api = axios.create({
    baseURL: process.env.URL_BASE,
  });


async function getSenha(){
    const response = await api.post('/senhaExt', {
        EVOKEY : process.env.EVOKEY,
        tipo : 'paga'
      })
    
    console.log(response.data.senha)
}


getSenha()
