
import * as mongoose from 'mongoose';

const catBreedSchema = new mongoose.Schema({
  name: String,
});

const CatBreed = mongoose.model('CatBreed', catBreedSchema);

export default CatBreed;