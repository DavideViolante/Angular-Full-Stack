import { model, Schema} from 'mongoose';

const catSchema = new Schema({
  name: String,
  weight: Number,
  age: Number
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const Cat = model('Cat', catSchema);

export default Cat;
