const app = require('./src/app')
const connectDB  = require('./src/db/db')
connectDB()
app.listen(()=>{
    console.log(`Server Is Running On Port`)
})