const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const productData = await Category.findAll({
      include: [{ model: Product}]
    })
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    })
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
  console.log(req.body)
  Category.create(req.body)
    .then((newCat) => {
      res.json(newCat)
    })
    .catch((err) => {
      res.json(err)
    })
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catPut = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({message: "Category updated"})
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const catDelete = Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if (!catDelete) {
      res.status(404).json({ message: "No product on file with the used id"})
    }
    res.status(200).json({ message: "Item Deleted"})
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
