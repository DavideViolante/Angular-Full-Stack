import { model, Schema} from 'mongoose';

const catSchema = new Schema({
  name: String,
  weight: Number,
  age: Number
});

const Cat = model('Cat', catSchema);

export default Cat;
