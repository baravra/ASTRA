import express from "express";
import {PrismaClient} from "@prisma/client"
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient() //conectar diretamente no banco de dados

//login
//medico
app.post("/loginMedico", async (req,res) => {
    const body = req.body

    const usuarios = await prisma.medico.findMany({
        where: {
            name : body.usuario,
            password: body.senha
        }
    })
    return res.json(usuarios)
})
//paciente
app.post("/loginPaciente", async (req,res) => {
    const body = req.body

    const usuarios = await prisma.paciente.findMany({
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
    
    const usuario = await prisma.paciente.findMany({
        where: {
            name : login
        }
    })
    return res.json(usuario)
})

//criar usuario (paciente)
app.post("/usuarios", async (req,res) => {
    const body  = req.body

    const ad = await prisma.paciente.create({
        data:{
            name:body.name,
            password:body.password,
            medicoId: parseInt(body.medicoId)
        }
    })

    return res.json(ad)
})

//atualizar usuario
app.patch("/atualizar", async(req,res) =>{
    const body = req.body
    const usuario = await prisma.paciente.update({
        where: {
            name: body.name
        },
        data: {
            password: body.password
        }
    })

    return res.json(usuario)
})

//listar agendamentos de um medico do dia
app.get("/agendamentos/:name", async(req, res) => {
    const name = req.params.name

    const agendamentos = await prisma.agendamentos.findMany({
        where: {
            medicoName: name
        }
    })

    return res.json(agendamentos)
})

//iniciar consulta
app.get("/iniciarAgendamento/:id", async(req, res) => {
    const id = req.params.id

    const agendamentos = await prisma.agendamentos.update({
        where: {
            id: parseInt(id)
        },
        data:{
            status: "Em andamento"
        }
    })

    return res.json(agendamentos)
})

// acessar prontuario do paciente
app.get("/prontuario/:name",async (req, res) => {
    const name = req.params.name

    const prontuario = await prisma.prontuario.findMany({
        where: {
            pacienteName: name
        }
    })

    return res.json(prontuario)
})


app.listen(44)