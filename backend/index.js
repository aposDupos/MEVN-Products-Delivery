const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http')
const {routes} = require('./src/routes')
// Подключение к бд
mongoose.connect(
    'mongodb+srv://aposdupos-admin:3-vpvSX7XZR*_-U@myfirstcluster.jxnyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\n',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

// Инициализация приложения
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

routes.forEach(item => {
    app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
})
// Роуты
const PORT = 3000
http.createServer({}, app).listen(PORT)
console.log(`Server is running at ${PORT}`)