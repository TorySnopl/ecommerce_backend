const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryID = await Category.findByPk(req.params.id);

    if (!categoryID) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryID);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCat = await Category.create(req.body);
    res.status(200).json(newCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const catUpdate = await Category.update(req.body, {
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

router.delete('/:id', async (req, res) => {
  try {
    const deletCat = await Category.destroy({
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
