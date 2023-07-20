const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "must provide the username"]
    },
    password: {
        type: String,
        required: [true, "must provide the password"]
    }
})

adminSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        console.log(hashedPassword, "hashed", salt);
        this.password = hashedPassword;
    } catch (error) {
        next(error);
    }
})

const Admin = mongoose.model('Admin', adminSchema, 'admin');

const createAdmin = async () => {
    try {
        const count = await Admin.countDocuments();
        if(count===0){
            const initialAdmin = new Admin({
                username: "admin",
                password: "password"
            })
            await initialAdmin.save();
            console.log("initial admin created successfully");
        }
    } catch (error) {
        console.log("Error while creating the admin", error);
    }
}

createAdmin();

module.exports = Admin;