const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {connect} = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const start = async () => {
    try {
        await connect(process.env.DB_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`Server started on port = ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()