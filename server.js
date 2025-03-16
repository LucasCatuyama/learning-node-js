//簡易的なサーバーを作成する。
const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");

// const server = http.createServer((req, res) => {
//    res.writeHead(200, { 
//     "content-type": "application/json"
//    });
   
//    const data = {message: "Hello, this is a JSON response"};

//    res.end(JSON.stringify(data));
// });

// server.listen(3000, () => {
//     console.log("サーバーが起動しました。")
// })

const server = http.createServer((req, res) => {
    //ブラウザからアクセスが来た時の処理
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();

})

server.listen(PORT, () => {
    console.log("The server is now running.");
})