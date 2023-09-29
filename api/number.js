const express = require('express');
const server = express();
let currentNumber = 0;

function responseValue(){
    const objectTest = {
        id: currentNumber
    }
    server.get('/api/number.js', (req,res) => {
        res.header('Content-Type', 'application/json');
        res.json(objectTest)

        if(currentNumber >= 5){
            currentNumber = 0;
        }else{
            currentNumber++;
        }
        
    })
}


responseValue();
server.listen(3333, () => {
})