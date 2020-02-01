const express = require ('express')
const requireDir = require ('require-dir')
const cors = require ('cors')


const app = express()

app.use(express.json())
app.use(cors())

requireDir('./models')

app.use('/', require('./routes/routes'))

app.listen(3001)
