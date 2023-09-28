function getId(){
    const resultDiv = document.querySelector('#result');
    const response = fetch('https://api-tau-rust-91.vercel.app/api/number.js', {
        method: 'GET'
    }).then(res => {
        return res.json()
    })
    resultDiv.innerText = response;
}

document.body.addEventListener('load', getId);