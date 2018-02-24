import * as mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
    price: Number
});

const Price = mongoose.model('Price', priceSchema);

export default Price;