
const API_KEY = 'AIzaSyBbkuMbNXC6wyYeNFb6vGYnjJbSWuxuKGI'

fetch('https://forms.googleapis.com/v1/forms/1jEu0f9NG8haPDYcWsCXBD3bLCIWdEsVS8ifta/responses', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    key: API_KEY
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erro na solicitação:', error);
    });
