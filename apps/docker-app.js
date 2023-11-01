// docker-app.js
const axios = require('axios');

axios.get(`http://${process.env.DATABASE_HOST}:3000/hello`)  // Substitua pelo endereço IP correto
  .then(response => {
    console.log('Resposta da aplicação local:', response.data);
  })
  .catch(error => {
    console.error('Erro ao fazer a solicitação:', error);
  });
