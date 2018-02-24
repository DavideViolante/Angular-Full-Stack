import * as mongoose from 'mongoose';
 
const notaSchema = new mongoose.Schema({
img: String
});
 
const Nota = mongoose.model('Nota', notaSchema);

export default Nota;