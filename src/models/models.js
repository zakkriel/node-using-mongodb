import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const ProductSchema = new Schema({
    name:{
        type: String,
        //required: 'Enter a procut name'
    },
    description:{
        type: String,
        //required: 'Enter a product description'
    },
    category:{
        type: String
    },
    price:{
        type: Number,
    },
    createdDate:{
        type: Date,
        default: Date.now
    }
});
