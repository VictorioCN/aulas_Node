const express = require("express")
const app = express()
const port = 5000


const path = require('path')
const basePath = path.join(__dirname, 'pages')

const mysql = require("mysql")

//Ler o bady e trasformar em json
app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

//Deletar um registro no banco req
app.get("/bebes/excluir/:id", (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM bebe WHERE id_bebe = ${id}`;

    conn.query(sql, (erro) => {
        if (erro) {
            console.log(erro);
        } else {
            res.sendFile(`${basePath}/home.html`);
        }
    });
});

//Busca no banco um registro especifico via ID
app.get("/bebes/:id", (req,res) => {
    const id = req.params.id

    const sql = `SELECT * FROM bebe WHERE id_bebe = ${id}`

    conn.query(sql ,(erro, dados) =>{
        if(erro){
            console.log(erro)
        }
        else{
            res.json(dados[0])
        }
    })
})
//oi

app.get("/bebe/editar/:id", (req,res) => {
    res.sendFile(`${basePath}/editarbebe.html`);
});

app.post("/bebes/atualizar", (req,res) => {
    const id = req.body.idValor;
    const nome_bebe = req.body.nome;
    const sexo_bebe = req.body.sexo;
    const nome_mae = req.body.nomeMae;

    const sql = `UPDATE bebe SET nome_bebe = '${nome_bebe}', sexo='${sexo_bebe}', nome_mae = '${nome_mae}' WHERE id_bebe = ${id}`;

conn.query(sql, (erro) => {
    if (erro) {
        console.log(erro);
    }
    else {
        res.sendFile(`${basePath}/home.html`);
    }
});
});
//rota para pegar lista de bebes lá no banco
app.get("/bebes", (req,res) => {
    const sql = `SELECT * FROM bebe`

    conn.query(sql, (erro, dados) => {
        if(erro){
            console.log(erro);
        }
        else{
            res.json(dados)
            res.sendFile(`${basePath}/home.html`)
        }
    })
})

//ROTAS PARA CADASTRO DE BEBE
app.get("/bebe/cadastrar", (req,res) =>{
    res.sendFile(`${basePath}/cadastrarbebe.html`)
})

app.post("/bebe/insert", (req,res) =>{
    const nome_bebe = req.body.nome
    const sexo_bebe = req.body.sexo
    const nome_mae = req.body.nomeMae

    const sql = `INSERT INTO bebe (nome_bebe, sexo, nome_mae) VALUES ('${nome_bebe}','${sexo_bebe}','${nome_mae}')`

    conn.query(sql, (erro) => {
        if(erro){
            console.log(erro)
        }
        else{
            res.redirect('/')
        }
    })
})

app.get("/home", (req,res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.get("/", (req,res) => {
    res.sendFile(`${basePath}/home.html`)
})

app.use((req,res,next) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

//Conectando banco
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodeBercario'
})

conn.connect((erro) => {
    if(erro){
        console.log(erro)
    }
    else{
        console.log("Conectando com sucesso")
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`)
            })
        }
    })


