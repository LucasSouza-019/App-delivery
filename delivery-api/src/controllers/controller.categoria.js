

function Listar(req, res){
    try{
        res.status(200).json([
            {id_categoria: 1, categoria: "burguer"},
            {id_categoria: 2, categoria: "Pizza"},
            {id_categoria: 3, categoria: "fritas"},
        ]);
    } catch(error){
        res.status(500).json({error});
    }
}

export default {Listar};