function getNumber() {
    const url = 'api/number.js';

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