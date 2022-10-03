import express from "express";
import {PrismaClient} from "@prisma/client"
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient() //conectar diretamente no banco de dados

//login
app.post("/login", async (req,res) => {
    const body = req.body

    const usuarios = await prisma.usuario.findMany({
        where: {
            name : body.usuario,
            password: body.senha
        }
    })
    return res.json(usuarios)
})

//esqueci minha senha
app.get("/usuario/:usuario", async (req,res) => {
    const login = req.params.usuario
    const usuario = await prisma.usuario.findMany({
        where: {
            name : login
        }
    })
    return res.json(usuario)
})

//criar usuario
app.post("/usuarios", async (req,res) => {
    const body  = req.body

    const ad = await prisma.usuario.create({
        data:{
            name:body.name,
            password:body.password
        }
    })

   /* const ad = await prisma.usuario.create({
        data: {
            name: body.name,
            password: body.password,
        }
    })*/

    return res.json(ad)
})

//atualizar usuario
app.patch("/atualizar", async(req,res) =>{
    const body = req.body
    const usuario = await prisma.usuario.update({
        where: {
            name: body.name
        },
        data: {
            password: body.password
        }
    })

    return res.json(usuario)
})

app.listen(44)