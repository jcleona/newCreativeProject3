const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))


let users = [];
let user = {};
let id = -1;


app.get('/api/users', (req, res) => {
  res.send(users);
});

app.get('/api/users/:id', (req, res) => {
	console.log ('in app.get user by id');
  let id = parseInt(req.params.id);
  // let getIndex = users.map(item => { return user.id; }).indexOf(id); 
  let usersMap = users.map(user => { return user.id; });
  let index = usersMap.indexOf(id);
  console.log('index', index);
  let user = users[index];
  if (index === -1) {
    res.status(404).send("Sorry, that user doesn't exist");
    return;
  }
  // res.sendStatus(200);
  res.send(user);
});

app.post('/api/users', (req, res) => {
  id = id + 1;
  let user = {id:id, name:req.body.name,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    stateAbbr: req.body.stateAbbr,
    zip: req.body.zip,
    beneficiary: req.body.beneficiary,
    executor: req.body.executor,
    property: req.body.property
  }
  users.push(user);
  console.log('in server.js post, user is: ', user);
  res.send(user);
});

app.put('/', (req, res) => {
  res.send('I am updated.\n');
});


app.put('/api/users/:id', (req, res) => {
  let id = parseInt(req.params.id);
  // let id = req.params.id;

  let editedUser = {id:id, name:req.body.name,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    stateAbbr: req.body.stateAbbr,
    zip: req.body.zip,
    beneficiary: req.body.beneficiary,
    executor: req.body.executor,
    property: req.body.property
  }
  users.splice(id, 1, editedUser);
  res.send(users);
});




app.delete('/api/users/:id', (req, res) => {
  let id = parseInt(req.params.id);
  console.log('id to delete: ', id);
  let removeIndex = users.map(user => { return user.id; }).indexOf(id);
  console.log('removeIndex: ', removeIndex);
  if (removeIndex === -1) {
    res.status(404).send("Sorry, that user doesn't exist");
    return;
  }
  users.splice(removeIndex, 1);
  console.log('removeIndex: ', removeIndex);
  console.log('users after delete: ', users);
  res.sendStatus(200);
});

app.listen(3003, () => console.log('Server listening on port 3003!'));