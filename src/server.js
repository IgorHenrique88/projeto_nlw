//Importar o pacote
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

/*Faz com que o node identifique o sistema operacioanal e organize as pastas de acordo
com o necessário la na parte de return*/

//Iniciando o express
const server = express();
//Utilizando os arquivos staticos
server
  .use(express.static("public"))
  //Configurar tamplate engine

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")
  
  //Criando uma rota da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage);

//Ligando o servidor
server.listen(5500);
