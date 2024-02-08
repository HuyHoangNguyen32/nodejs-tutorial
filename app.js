const express = require('express');

const app = express();
const port = 3333;
app.use(express.json());

const users = [
  {
    id: 1,
    username: 'Kyle Griffith',
    age: 3,
    address: 'Albania',
    phone: '218.108.172.72',
    email: 'vec@ak.lu',
  },
  {
    id: 2,
    username: 'Susie Clarke',
    age: 25,
    address: 'Samoa',
    phone: '68.31.200.16',
    email: 'rekukze@kej.np',
  },
  {
    id: 3,
    username: 'Christian Gill',
    age: 50,
    address: 'Cyprus',
    phone: '181.79.242.204',
    email: 'nasha@opu.dz',
  },
  {
    id: 4,
    username: 'Dorothy Perez',
    age: 13,
    address: 'Libya',
    phone: '221.70.176.46',
    email: 'pace@budotu.ug',
  },
  {
    id: 5,
    username: 'Ruth Schultz',
    age: 59,
    address: 'Bangladesh',
    phone: '103.30.124.10',
    email: 'ibfu@kariw.cz',
  },
];

app.get('/api/users', (req, res) => {
  res.send(users);
});

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));
  res.send(user);
});

app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    username: req.body.username,
    age: req.body.age,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
  };
  users.push(user);
  res.send(user);
});

app.patch('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));
  user.username = req.body.username;
  res.send(user);
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.indexOf(id);
  users.splice(index, 1);
  res.send('delete successfully');
});

app.get('/api/links/', (req, res) => {
  const links = {
    message: 'thank you',
    links: {
      current_user_url1: 'https://api.github.com/user',
      current_user_url2: 'https://api.github.com/user',
      current_user_url3: 'https://api.github.com/user',
      current_user_url4: 'https://api.github.com/user',
    },
  };
  res.send(links);
});

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
