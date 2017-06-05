var users = require('./userData.json')
const express = require('express')
const bodyParser = require('body-parser')
const usersCtrl = require('./usersCtrl.js')
const port =3000

const app = express()

app.use(bodyParser.json())
//endpoints 
app.get('/api/users', usersCtrl.getAll) 
app.get('/api/users/:id', usersCtrl.getById)
app.get('/api/admins', usersCtrl.getAdmin)
app.get('/api/nonadmins', usersCtrl.getOthers)
app.get('/api/user_type/:type', usersCtrl.getByType)
app.put('/api/users/:id', usersCtrl.putById)
app.post('/api/users', usersCtrl.postUser)
app.delete('/api/users/:id', usersCtrl.removeUser)
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})