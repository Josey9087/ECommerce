const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tag = await Tag.findAll({ include: [{ model: Product }] });
    res.json(tag);
  } catch (err) {
    console.log("Wrong");
    // be sure to include its associated Products
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tag = await Tag.findByPk(req.params.id, { include: [{ model: Product }] });


    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    res.json(category);

  } catch (err) {
    console.log("Wrong");
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newtag = await Tag.create({tag_name:req.body});
    res.status(200).json(newtag);

} catch (err) {
    res.status(500).json(err);
}
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, { where: { id: req.params.id } });


    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    res.json(req.body);

  } catch (err) {
    console.log("Wrong");
    // be sure to include its associated Products
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy( { where: { id: req.params.id } });


    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }

    res.json(req.body);

  } catch (err) {
    console.log("Wrong");
    // be sure to include its associated Products
  }
});

module.exports = router;
