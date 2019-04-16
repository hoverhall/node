const http = require("http");
const fs = require("fs");
 
http.createServer(function(req, res){
     
    if(req.url.startsWith("/public/")){
        var filePath = req.url.substr(1);
        fs.readFile(filePath, function(err, data){
			//default
            if (err) {     
                res.writeHeader(404, { "Content-Type": "text/plain" });
                res.end("403: Forbidden!");
			} else {
				switch (filePath.split(".")[1]) {
					case 'css':
						res.writeHeader(200, { "Content-Type": "text/css" });
						res.end(data);
					case 'ico':
						res.writeHeader(200, { "Content-Type": "image/x-icon" });
						res.end(data);
					default:
						res.writeHeader(200, { "Content-Type": "text/html" });
						res.end(data);
				}
			}
        })
    }
    else{
        // во всех остальных случаях отправляем строку "404: Not found!"
        res.writeHeader(404, { "Content-Type": "text/plain" });
        res.end("404: Not found!");
    }
}).listen(80, () => console.log("Сервер работает!"));