const express = require('express')
const app = express()

app.use(express.json()) 

app.get('/', (req, res) => {
    res.send('<h1>Hello Kubernetes!</h1>')
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})