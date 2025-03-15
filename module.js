//require()はモジュールのインポートに使用される。.jsonにするとオブジェクトを取得できる。
const os = require("os");
console.log("OS:", os.platform());
console.log("CPU コア数:", os.cpus().length);
console.log("Memory:", os.totalmem() / 1024 / 1024 / 1024, "GB");

const fs = require("fs");
let fileData = "This is a sample file";

fs.writeFileSync("exemple.txt", fileData);
console.log("ファイルを作成しました。");
console.log("ファイルの内容は以下のとおりです。");
console.log(fs.readFileSync("exemple.txt", "utf8"));


for (let i = 1; i <= 10; i++) {
    fs.writeFileSync("count-10.txt",
        "Conting: " + i + "\n", 
        { 
            encoding: "utf8", 
            flag: "a+", 
            mode: 0o666 
        }); 
}

console.log("ファイルを作成しました。");
console.log("ファイルの内容は以下のとおりです。");
console.log(fs.readFileSync("count-10.txt", "utf8"));