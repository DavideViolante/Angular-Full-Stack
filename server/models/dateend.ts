import * as mongoose from 'mongoose';

const dateendSchema = new mongoose.Schema({
    dateend: Date
  
});

const Dateend = mongoose.model('Dateend', dateendSchema);

export default Dateend