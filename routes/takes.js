const router = require('express').Router();
let Take = require('../models/take.model');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    Take.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });  

router.route('/:id').post((req, res) => {
    const textin = req.body.text;

    const adding = {
        "text":textin,
        "upvotes":0,
        "downvotes":0,
        "userid":req.params.id
    }
    const ins = new Take(adding)
    
    User.findByIdAndUpdate(req.params.id)
      .then(user => {
        user.posts.push(ins)//to add whole Take object, remove .id
        user.save()
         .then(() => {
            ins.save()
            res.json('Take updated!')})
         .catch(err => res.status(400).json('One Error: ' + err));
      })
      .catch(err => res.status(400).json('Two Error: ' + err));
  });



router.route('/upvote/:id').post((req, res) => {
    Take.findByIdAndUpdate(req.params.id)
      .then(take=>{
        take.upvotes+=1
        take.save()
        .then(() => {
          User.findByIdAndUpdate(take.userid)
          .then(user=>{
            const ind = user.posts.findIndex(function (element){
              return element._id.toString()==req.params.id.toString();
            })
            console.log(ind)
            user.posts[ind]=take
            user.save()
            
          });
          res.json('Take updated!')})
       .catch(err => res.status(400).json('One Error: ' + err));
      })
      .catch(err=>res.status(400).json('Two Error: ' + err));
  });


router.route('/downvote/:id').post((req, res) => {
  Take.findByIdAndUpdate(req.params.id)
  .then(take=>{
    take.downvotes+=1
    take.save()
    .then(() => {
      User.findByIdAndUpdate(take.userid)
      .then(user=>{
        const ind = user.posts.findIndex(function (element){
          return element._id.toString()==req.params.id.toString();
        })
        user.posts[ind]=take
        user.save()
        
      });
      res.json('Take updated!')})
   .catch(err => res.status(400).json('One Error: ' + err));
  })
  .catch(err=>res.status(400).json('Two Error: ' + err));

  });



module.exports = router;
