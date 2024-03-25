const express = require('express')
const cors = require('cors')

const app = express()

let port = 8080;

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})