const router = require('express').Router();
const res = require('express/lib/response');
const { UPSERT } = require('sequelize/dist/lib/query-types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  UPSERT.findAll()
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  // find all categories
  // be sure to include its associated Products
});

  router.get('/:id', (req, res) => {
    User.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.Category_name,
    id: req.body.id
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
    Category.update({
      where: {
        id: req.params.id
      }
    })
      .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ mesage: "No user found with this id" });
        return;
      }
      res.json(dbCategoryData);
      })
  })
    .catch (err => {
      console.log(err);
      res.status(500).json(err);
    });


router.delete('/:id', (req, res) => {
   Category.destroy({
      where: {
        id: req.params.id
      }
      
    })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch (err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;