if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const indexRouter = require('./routes/index')
const memberRouter = require('./routes/member')
const app = express()

app.use(express.json())
app.use('/',indexRouter)
app.use('/member',memberRouter)

// for database
const users=[]

// for testing
app.get('/test',(req,res)=>{
  res.send('server is running')
})

// listner
app.listen(3000,()=>console.log(`Server is started at ${process.env.PORT}`))