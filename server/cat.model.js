"use strict";
const mongoose = require('mongoose');
const catSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});
const Cat = mongoose.model('Cat', catSchema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cat;
//# sourceMappingURL=cat.model.js.map