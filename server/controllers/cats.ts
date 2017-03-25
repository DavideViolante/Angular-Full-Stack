import Cat from '../models/cat.model';

export default class CatsCtrl {

  // Get all
  getAll(req, res) {
    Cat.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  // Count all
  count(req, res) {
    Cat.count((err, count) => {
      if (err) { return console.error(err); }
      res.json(count);
    });
  }

  // Insert
  insert(req, res) {
    const obj = new Cat(req.body);
    obj.save((err, cat) => {
      if (err) { return console.error(err); }
      res.status(200).json(cat);
    });
  }

  // Get by id
  get(req, res) {
    Cat.findOne({ _id: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }

  // Update by id
  update(req, res) {
    Cat.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }

  // Delete by id
  delete(req, res) {
    Cat.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }
}
