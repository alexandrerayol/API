const express = require('express');
const server = express();
let objectTest = {
    id: 0
}

function responseValue(){
    server.get('/api/number.js', (req,res) => {
        res.header('Content-Type', 'application/json');
        res.json(objectTest)

        if(objectTest.id >= 5){
            objectTest.id = 0;
        }else{
            objectTest.id++;
        }

    })
}


responseValue();
server.listen(3333, () => {
})