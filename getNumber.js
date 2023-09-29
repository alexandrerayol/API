function getNumber() {
    const url = 'api/number.js';
    const response = fetch(url).then(data => {return data.json()}).then(data => {console.log(data.id)});
}
getNumber();