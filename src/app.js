import express from "express"
import usersRouter from "./routes/users.routes.js"
import productsRouter from "./routes/products.routes.js"
import cors from "cors" 

const app = express()
app.use(express.json())
// app.use(express.static("public"))

// Configuración básica: Permitir todos los orígenes
app.use(cors())

// app.use((req,res,next) => {res.json({msj:"en mantenimiento"})})

//Aquí irían las rutas
app.use(['/users','/usuarios'],usersRouter)
app.use(['/products','/productos'], productsRouter)

app.use((req,res) => {
    res.status(404).json({error:"ruta no encontrada"})
})

const PORT = 3000
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))