const http = require('http')

const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello!')
})
  
const port = 3001
app.listen(port)
console.log(`Server started in port ${port}`)