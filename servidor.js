
const http = require("http")

http.createServer(
    function(req, res){
        res.SendFile(__filename + "sobre.html" )
    }
).listen(8081);



const express = require("express")
const app = express ();

app.get("/",
function(req,res){
    // res.send("Texto");
    res.sendFile(__dirname +"/index.html");
    }
)

app.get("/sobre",
function(req,res){
     res.send("Página Sobre o site");
    
    }
)

app.get("/contato",
function(req,res){
     res.send("Pagina Contato o Site");
    
    }
)

app.get("/lista/:parm1/:parm2/:parm3",
function(req,res){
     res.send(
         "parm1 : Parametro 1 = " + req.params.parm1 +
         "/parm2 : Parametro 1 = " + req.params.parm2 +
         "/parm3 : Parametro 1 = " + req.params.parm3 
     );
    
    }
)

app.get("/nome/:parm4/:parm5",
function(req,res){
    res.send(
        "Nome : " + req.params.parm4 +
        "Idade : " + req.params.parm5  
        );
    }
);


app.get("/calculo/:parmnum1/:parnum2",
function(req,res){
   let soma = parseInt(req.params.parmnum1) + parseInt(req.params.parnum2);
   res.send("Resultado : " +soma);


}
)


app.get("/cidade/:cidade",
    function(req,res){

        let cidade =(req.params.cidade);

        if (cidade == "blumenau"){
        res.send("hehhe alemon batata")
        }

        if (cidade == "gaspar"){
            res.send("Não tem nada aqui vem nao")
        }

        if (cidade == "pomerode"){
            res.send("Museu do Carro")
        }

    }
)



app.listen(8082,
    function(){console.log("Servidor Iniciado")
}
    );





