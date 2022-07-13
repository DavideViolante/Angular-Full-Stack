import { Document, model, Schema } from 'mongoose';

const catSchema = new Schema<ICat>({
  name: String,
  weight: Number,
  age: Number
});

interface ICat extends Document {
  name: string;
  weight: number;
  age: number;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Cat = model<ICat>('Cat', catSchema);

export default Cat;
