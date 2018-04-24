import * as mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  age: Number,
});

const catModel = mongoose.model('cat', catSchema);

export default catModel;
