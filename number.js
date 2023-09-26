const express = require('express');
const server = express();

let number = {
    'id': 0
}


server.get('/number', (request, response) => {
    if(number.id >= 5){
        number.id = 0;
    }else{
        response.json(number)
        number.id++;
    }
})

server.listen(5050, () => {
    console.log('servidor no ar')
})