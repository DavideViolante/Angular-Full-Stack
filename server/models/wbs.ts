import * as mongoose from 'mongoose';

const wbsSchema = new mongoose.Schema({
  code: String,
  description: String
});

const WBS = mongoose.model('WBS', wbsSchema);

export default WBS;
