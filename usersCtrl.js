var users = require('./userData.json')
var count = 100;
module.exports = {

getAll: function (req, res) {

if (req.query.favorites) {
var faves = []
for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].favorites.length; j++) {
        if (req.query.favorites == users[i].favorites[j]) {
            faves.push(users[i])
        }
    } 
}
res.status(200).send(faves)
} 
else if (req.query.age) {
    var ages = []
for (let i = 0; i < users.length; i++) {
    if (req.query.age > users[i].age)
    ages.push(users[i])
}
res.status(200).send(ages)
}
else if (req.query.lastname) {
    var last = []
for (let i = 0; i < users.length; i++) {
    if (req.query.lastname == users[i].last_name) {
    last.push(users[i])
    }
}
res.status(200).send(last)
}
else if (req.query.email) {
    var email = []
for (let i = 0; i < users.length; i++) {
    if (req.query.email == users[i].email) {
    email.push(users[i])
    }
}
res.status(200).send(email[0])
} else {
    res.status(200).send(users) }
},


getById: function (req, res) {
   if (req.params.id < users.length) {
    res.status(200).send(users[req.params.id-1])
}
else {
    res.status(404).json(null)
}
},
getAdmin: function (req, res) {
    
        var admins = []
      for (let i = 0; i < users.length; i++) {
          if (users[i].type == "admin") {
              admins.push(users[i])
          }
      }
   
    res.status(200).send(admins)
},
getOthers: function (req, res) {
      var others = []
      for (let i = 0; i < users.length; i++) {
          if (users[i].type == "user" || users[i].type == "moderator") {
              others.push(users[i])
          }
      }
   
    res.status(200).send(others)
},
getByType: function (req, res) {
    if (req.params.type === "admin") {
        var others = []
      for (let i = 0; i < users.length; i++) {
          if (users[i].type == "admin") {
              others.push(users[i])
          }
      }
    res.status(200).send(others)
}
else if (req.params.type === "user") {
        var others = []
      for (let i = 0; i < users.length; i++) {
          if (users[i].type == "user") {
              others.push(users[i])
          }
      }
    res.status(200).send(others)
}
else if (req.params.type === "moderator") {
        var others = []
      for (let i = 0; i < users.length; i++) {
          if (users[i].type == "moderator") {
              others.push(users[i])
          }
      }
    res.status(200).send(others)
}
},
putById: function (req, res) {
    var update = Object.assign(users[req.params.id-1], req.body)
    res.status(200).send(users)
}, 
postUser: function (req, res) {
    var newUser = req.body
    count++
    newUser.id = count;
    users.push(newUser)
    res.status(200).send(users)
},
removeUser: function (req, res) {
    res.status(200).send(users.splice(req.params.id, 1))
} 
}