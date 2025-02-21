const app = require('./src/app/app')
const http = require('http');

const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection',socket=>{
      console.log("User Conmected")
})

server.listen(3000,()=>{
    console.log(`Server Is Running On ${3000}`)
})