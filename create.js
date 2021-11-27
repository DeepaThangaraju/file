const { response } = require("express");
const fs = require("fs");
const quote = "Love is Great";
var c = [];


function getDateString() {


    const date = new Date();
    var currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return `${year}-${month}-${day}-${hour}-${minutes}-${seconds}` //to create a file name with year-month-day-hour-minutes-seconds
}
var data = getDateString();
const date = new Date();
let time = date.getTime();
const express = require("express");   //Express to build a server
const app = express();
const PORT = 9000;

fs.writeFile(`./files/${data}.txt`, `Date:${data}Time:${time}`, (err) => console.log("writing..."));//creating a file

fs.readFile(`./files/${data}.txt`, "utf-8", (err, data) => { //reading a file
    console.log(data);

    app.get("/", (request, response) => {
        response.send(data);
    });
    app.listen(PORT, () => console.log("App is started", PORT));
}
);
const testFolder = './files';

fs.readdir(testFolder, (err, files) => {
    //read the directory to retrive all the text files in particular folder

    files.forEach(file => {
        console.log(file);
        c.push(file);
    });

});
app.get("/files", (request, response) => {
    response.send(c);
});
