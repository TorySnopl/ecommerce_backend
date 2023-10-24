const router = require('express').Router();
const { ne } = require('sequelize/types/lib/operators');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    const categories = Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    const categoryID = Category.findByPk(req.params.id, {
      include: [{ model: Product , through: Category, as: 'included_products' }]
    });

    if (!categoryID) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryID);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    const newCat = Category.create(req.body);
    res.status(200).json(newCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const catUpdate = Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!catUpdate[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(catUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const deletCat = Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deletCat) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(deletCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
