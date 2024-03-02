const http = require("http");
const url = require("url");
const Afficher = require("./weatherfunc")

const server = http.createServer((req, res) => {
 
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;
  
  if (path === "/weather") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    var x = query.y;
    x = Afficher(x).then((value)=>{res.end(value)})
    .catch(err=>res.end(err));
  } else if (path === "/products") {
    
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("I am a list of products :p");
  } else {
    res.end("Not found")
  }
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
