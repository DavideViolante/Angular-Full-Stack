import * as mongoose from 'mongoose';

const callIDSchema = new mongoose.Schema({
  numberID: Number
});

const CallID = mongoose.model('CallID', callIDSchema);

export default CallID;
