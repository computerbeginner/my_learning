const express = require('express');

const app = new express();

app.get('/server', (request, response)=>{
    //設置響應頭 允許跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //設置響應體
    response.send('Hello Ajax');
});

//可接受所有請求方式
app.all('/server', (request, response)=>{
    //設置響應頭 允許跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //設置響應頭 (允許自定義的請求頭)
    response.setHeader('Access-Control-Allow-Headers', '*');
    //設置響應體
    response.send('Hello Ajax POST');
});

//延時響應
app.get('/delay', (request, response)=>{
    //設置響應頭 允許跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(()=>{
        //設置響應體
        response.send('延時響應');
    },3000)
});

//jquery服務
app.all('/jquery-server', (request, response)=>{
    //設置響應頭 允許跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
     //設置響應頭 (允許自定義的請求頭)
     response.setHeader('Access-Control-Allow-Headers', '*');
    //response.send('HELLO jQuery');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

//axios服務
app.all('/axios-server', (request, response)=>{
    //設置響應頭 允許跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
     //設置響應頭 (允許自定義的請求頭)
     response.setHeader('Access-Control-Allow-Headers', '*');
    //response.send('HELLO jQuery');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

//fetch服務
app.all('/fetch-server', (request, response)=>{
    //設置響應頭 允許跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
     //設置響應頭 (允許自定義的請求頭)
     response.setHeader('Access-Control-Allow-Headers', '*');
    //response.send('HELLO jQuery');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
});

//jsonp:用戶名檢測是否存在
app.all('/check-username', (request, response) => {
    const data = {
        exist:1,
        msg:'用戶名已經存在'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})

//jquery-jsonp
app.all('/jquery-jsonp-server', (request, response) => {
    const data = {
        name:'尚硅谷',
        city:['北京','上海','深圳']
    };
    let str = JSON.stringify(data);
    //接收callback參數
    let cb = request.query.callback;
    response.end(`${cb}(${str})`);
})

app.all('/json-server', (request, response)=>{
    //設置響應頭 允許跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //設置響應頭 (允許自定義的請求頭)
    response.setHeader('Access-Control-Allow-Headers', '*');
    //定義json數據
    const data = {
        name:'atguigu'
    }
    let str = JSON.stringify(data)
    //設置響應體
    response.send(str);
});

app.listen(8000, ()=>{
    console.log("服務已經啟動，8000端口監聽中....");
})