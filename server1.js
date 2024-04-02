//criando um servidor web usando
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('efetuando o pedido');
    res.setHeader('Content-type','text/html');
    res.write('pedido aceito 1<h1>');
    res.write('pedido aceito 2<h2>');
    res.write('pedido aceito 3<h3>');
    res.end();
})
server.listen(3000,'localhost',()=>{
    console.log('Servidor iniciado');
})