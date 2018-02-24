import * as mongoose from 'mongoose';

const typeSchema = new mongoose.Schema({
  name: String,
  subtype:{subname: String}
});

const Type = mongoose.model('Type', typeSchema);

export default Type;
