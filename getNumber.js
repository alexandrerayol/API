function getNumber() {
    const url = 'api/number.js';
    const response = fetch(url).then(data => {console.log( typeof data, data)});
}
getNumber();