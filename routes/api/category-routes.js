const router = require('express').Router();
const { UPSERT } = require('sequelize/dist/lib/query-types');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  UPSERT.findAll()
  .then(dbUserData => res.json(dbUserData))
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
  .then(dbData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  try {
    const data = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        returning: true,
        where: {
          id: req.params.id,
        },
      }
    );
    if(!data) {
      res.status(404).json({ message: "Category not found"});
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;