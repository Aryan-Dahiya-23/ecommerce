import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    wishlist: {
        type: Array
    },
    cart: {
        type: Array
    },
    orders: {
        type: Array
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);
export default User;