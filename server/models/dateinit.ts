import * as mongoose from 'mongoose';

const dateinitSchema = new mongoose.Schema({
    dateinit: Date
});

const Dateinit = mongoose.model('Dateinit', dateinitSchema);

export default Dateinit;