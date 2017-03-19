import * as express from 'express';

import CatsCtrl from './controllers/cats';
import Cat from './models/cat.model';

export default function setRoutes(app) {

    var cats = new CatsCtrl();
    // APIs
    app.route('/api/cats')
        .get(cats.list);

    app.route('/api/cats/count')
        .get(cats.getCount);

    app.route('/api/cat')
        .post(cats.create);

    app.route('/api/cat/:id')
        .get(cats.findOne)
        .put(cats.findOneAndUpdate)
        .delete(cats.deleteOne);

    app.listen(app.get('port'), () => {
        console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
    });
}