const express = require('express')
const app = express()

require('dotenv').config()

//esta pequeña parte es para usar el body
//middlewares
app.use(express.json())

//Rutas
app.use ("/api/users",require("./routes/user.routes"))

app.use("/api/peliculas",require("./routes/peliculas.routes"))

//SERVER
app.listen(process.env.PORT, () => {
    console.log(`Servidor levantado en puerto ${process.env.PORT}`)
})