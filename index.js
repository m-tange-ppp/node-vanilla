const http = require("http");

http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    if (req.url === "/" && req.method === "GET") {
        res.write("こんにちは");
        res.end();
    } else if (req.url === "/about" && req.method === "GET") {
        res.write("これはAboutページです");
        res.end();
    } else if (req.url === "/hobby" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write('<form action="/outdoor" method="POST"><input type="text" name="sports"><button type="submit">Submit</button></form>');
        res.end();
    } else if (req.url === "/outdoor" && req.method === "POST") {
        console.log("reqの中身", req);
    }
}).listen(4000, function () {
    console.log("Listening on http://localhost:4000");
});