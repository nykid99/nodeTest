const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    if(req.url === '/') {

        fs.readFile('index.html', function(error, data){
            if (error) {
                res.writeHead(404)
                res.write('Error: File Not Found')
            }
            else{
                res.writeHead(200 , { 'Content-Type' : 'text/html'})
                res.write(data)
            }
            res.end()
        })
    }
    else if(req.url === '/about') {

        fs.readFile('about.html', function(error, data){
            if (error) {
                res.writeHead(404)
                res.write('Error: File Not Found')
            }
            else{
                res.writeHead(200 , { 'Content-Type' : 'text/html'})
                res.write(data)
            }
            res.end()
        })
    }
    else if(req.url === '/contact-me') {

        fs.readFile('contact-me.html', function(error, data){
            if (error) {

                res.writeHead(404)
                res.write('Error: File Not Found')
            }
            else{
                res.writeHead(200 , { 'Content-Type' : 'text/html'})
                res.write(data)
            }
            res.end()
        })
    }
    else {
        res.writeHead(200 , { 'Content-Type' : 'text/html'})
        fs.readFile('404.html', function(error, data){
            if (error) {
                res.writeHead(404)
                res.write('Error: File Not Found')
            }
            else{
                res.write(data)
            }
            res.end()
        })
    }

})

server.listen(port, function(error){
    if(error){
        console.log('something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})
