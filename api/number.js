const express = require('express');
const server = express();
let currentNumber = 0;

function responseValue(){
    
    server.get('/api/number.js', (req,res) => {
        
        res.json({
            id: currentNumber
        })
        validadeNumber();
    })
}

function validadeNumber(){
    if(currentNumber >= 5){
        currentNumber = 0;
    }else{
        currentNumber++;
    }
}

responseValue();
server.listen(3000, () => {
    console.log('servidor funcionando')
})