const dotenv = require('dotenv');
dotenv.config()
const app = require('./src/app')
const connectDB  = require('./src/db/db')
connectDB()
const configs = require('./src/config/config')

app.listen(configs.PORT,()=>{
    console.log(`Server Is Running On Port ${configs.PORT}`)
})