const express = require('express')

const app = express()
const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send("Hello World!")
})