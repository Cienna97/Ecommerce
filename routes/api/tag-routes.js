const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product],
  })
  .then(tags => res.json(tags))
  .catch(err => { res.status(500).json(err)})
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product],
  })
    .then(tags => {
      if (!tags) {
        res.status(404).json({ message: "Not found" });
        return;
      }
      res.json(tags);
    })
    .catch(err => { res.status(500).json(err) })
  
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(tags => res.json(tags))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(tags => {
      if (!tags) {
        res.status(404).json({ message: "Not found" });
        return;
      }
      res.json(tags);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(tags => {
    if (!tags) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    res.json(tags);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

module.exports = router