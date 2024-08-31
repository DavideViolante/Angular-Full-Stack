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

const Cat = model<ICat>('Cat', catSchema);

export type { ICat };
export default Cat;
