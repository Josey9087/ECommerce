const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const category = await Category.findAll({ include: [{ model: Product }] });
    res.json(category);
  } catch (err) {
    console.log("Wrong");
    // be sure to include its associated Products
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });


    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.json(category);

  } catch (err) {
    console.log("Wrong");
    // be sure to include its associated Products
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newcategory = await Category.create({category_name: req.body.category_name});
    res.status(200).json(newcategory);

} catch (err) {
    res.status(500).json(err);
}
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(req.body, { where: { id: req.params.id } });


    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.json(req.body);

  } catch (err) {
    console.log("Wrong");
    // be sure to include its associated Products
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy( { where: { id: req.params.id } });


    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.json(req.body);

  } catch (err) {
    console.log("Wrong");
    // be sure to include its associated Products
  }
});

module.exports = router;
