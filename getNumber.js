function getNumber() {
    const url = 'api/number.js';
    const div = document.querySelector('#result');
    const response = fetch(url)
    .then(data => {return data.json()})
    .then(data => {
        console.log(data.id);
        div.innerText = data.id;
    });
}
getNumber();