const router = require('express').Router();
let User = require('../models/user.model');
let Take = require('../models/take.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const lis = []

  const newUser = new User({username, password, lis});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res)=>{
  User.findById(req.params.id)
    .then(user =>res.json(user.posts))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;