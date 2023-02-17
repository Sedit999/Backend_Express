const express = require('express')
const app = express()
const port = 4000

//esta pequeña parte es para usar el body
//middlewares
app.use(express.json())

//Rutas
app.use ("/api/users",require("./routes/user.routes"))


//SERVER
app.listen(port, () => {
    console.log(`Servidor levantado en puerto ${port}`)
})