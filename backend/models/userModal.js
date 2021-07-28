import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const user = new Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    birthday: {type: Date, trim: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String},
});


export default mongoose.model('user', user);