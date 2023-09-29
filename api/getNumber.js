function getNumber() {
    const url = 'http://localhost:3333/api/number.js'; // Substitua pela URL correta da sua API

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
}

getNumber();