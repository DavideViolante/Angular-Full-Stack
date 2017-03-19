import Cat from '../models/cat.model'

export default class CatsCtrl {

    // get all
    list(req, res) {
        Cat.find({}, (err, docs) => {
            if (err) { return console.error(err); }
            res.json(docs);
        });
    }

    // count all
    getCount(req, res) {
        Cat.count((err, count) => {
            if (err) { return console.error(err); }
            res.json(count);
        });
    }

    // create
    create(req, res) {
        const obj = new Cat(req.body);
        obj.save((err, cat) => {
            if (err) { return console.error(err); }
            res.status(200).json(cat);
        });
    }

    // find by id
    findOne(req, res) {
        Cat.findOne({ _id: req.params.id }, (err, obj) => {
            if (err) { return console.error(err); }
            res.json(obj);
        });
    }

    // update by id
    findOneAndUpdate(req, res) {
        Cat.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
            if (err) { return console.error(err); }
            res.sendStatus(200);
        });
    }

    // delete by id
    deleteOne(req, res) {
        Cat.findOneAndRemove({ _id: req.params.id }, (err) => {
            if (err) { return console.error(err); }
            res.sendStatus(200);
        });
    }
};