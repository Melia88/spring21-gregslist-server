import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    levels: { type: String},
    imgUrl: { type: String, required: true, default: '//placehold.it/300x300' },
    description: { type: String, minLength: 3 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
// timestamps adds createdAt and updatedAt
// virtuals adds the id instead of just _id

export default House;