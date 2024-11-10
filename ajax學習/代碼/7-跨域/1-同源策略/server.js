const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    //響應一個頁面
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response) => {
    //響應一個頁面
    response.send('用戶數據');
});

app.listen(9000, () => {
    console.log('服務已經啟動');
})