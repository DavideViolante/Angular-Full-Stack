import { model, Schema } from 'mongoose';

interface ICat {
  name: string;
  weight: number;
  age: number;
}

const catSchema = new Schema<ICat>({
  name: String,
  weight: Number,
  age: Number
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const Cat = model<ICat>('Cat', catSchema);

export default Cat;
