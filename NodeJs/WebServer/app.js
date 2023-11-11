const http = require("http");
const fs = require("fs");

const renderHtml = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write("halaman ini is not available");
        } else {
            res.write(data);
        }
        res.end();
    });
};

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    if (url === "/about") {
        renderHtml("./halaman/about.html", res);
    } else if (url === "/contact") {
        renderHtml("./halaman/contact.html", res);
    } else {
        renderHtml("./halaman/index.html", res);
    }
});

server.listen(3000, (err, res) => {
    if (err) throw err;
    console.log("Server running at http://localhost:3000/");
});
