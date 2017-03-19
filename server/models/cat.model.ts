import * as mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});
var Cat = mongoose.model('Cat', catSchema);

export default Cat;


