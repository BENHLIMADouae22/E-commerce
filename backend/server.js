const express= require ('express') 

const path= require('path');
const PORT =process.env.PORT || 2000;
const HOST = process.env.HOST;

const app = express(); //constructeur

app.use('/',express.static(path.join(__dirname, 'angular')));//path:module permet de gérer le chemin du fichier angular

app.get('',(req,res)=>{
    res.sendFile(path.join(__dirname, 'angular','index.html'));

});

app.listen(PORT,()=>{
    console.log(`serveur running at http://localhost:${PORT} `)

});







