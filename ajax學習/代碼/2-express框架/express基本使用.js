const express = require('express');
const { request } = require('http');

const app = new express();

app.get('/', (request, response)=>{
    response.send('Hello Express');
});

app.listen(8000, ()=>{
    console.log('服務已經啟動，8000端口監聽中.....');
})
