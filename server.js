const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const logEvents = require("./logEvents");
const EventEmitter = require("events");
class Emitter extends EventEmitter {}
const myEmitter = new Emitter();
const PORT = process.env.PORT || 3500;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  let path;
  switch(req.url ==='/'){
    case '/':
        res.statusCode = 200

  }
});
server.listen(PORT, () => console.log(`server run on port ${PORT}`));
