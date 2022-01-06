const router = require('express').Router();
//const res = require('express/lib/response');
//const { UPSERT } = require('sequelize/dist/lib/query-types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
  .then(categories => res.json(categories))
  .catch(err => { res.status(500).json(err) })
});

  router.get('/:id', (req, res) => {
    Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product],
    })
    .then(categories => {
      if (!categories) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(categories);
    })
    .catch(err => { res.status(500).json(err) })
});
 

  });
 


router.post('/', (req, res) => {

 
});

router.put('/:id', (req, res) => {

    

    });


router.delete('/:id', (req, res) => {


});

module.exports = router;