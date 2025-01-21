import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria";

const router = Router();

// GET: http://localhost:3001/usuarios/login?email=teste@teste.com&senha=123

// GET = Listar dados
// POST = inserir dados no servidor
// PUT = Editar dados
// DELETE = Excluir dados
// URI Params:  http://localhost:3001/restaurantes/10
// Query params: http://localhost:3001/restaurantes?busca=Pizza

router.post("/usuarios/login", function(req, res){

   // const email = req.body.email;
    //const senha = req.body.senha;

    const {email, senha} = req.body;

    if (email == "teste@teste.com" && senha == "12345" ){
        res.status(200).json({
            id_usuario:123,
            email: "teste@teste.com",
            nome: "lucas",
            insta:  "@lucas_souza"
        })
    } else{
        res.status(401).json({
            error: "email ou senha errado!"
        })
    }

});

router.post("/usuarios", function(req, res){

    const {nome, email, cpf, telefone, senha, endereco, complemento, bairro, cidade, uf, cep} = req.body;


    res.status(201).json({
        id_usuario:123,
        nome,
        email,
        cpf, 
        telefone, 
        senha, 
        endereco, 
        complemento, 
        bairro, 
        cidade, 
        uf, 
        cep
    })
});

router.get("/restaurantes", (req,res) => {

    const busca = req.query.busca;

    res.json({message: "Nenhum restaurante encontrado com o termo : " + busca})
    /*
    res.json([
        {restaurante: 1, nome: "burguer"},
        {restaurante: 2, nome: "Mc"},
    ]);
    */
});

router.get("/categorias", controllerCategoria.Listar);

export default router;