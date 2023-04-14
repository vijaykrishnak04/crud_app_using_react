import mongoose from "mongoose"


const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    picturePath:{
        type:String,
        default:''
    }

})

const User = mongoose.model('user', userSchema)
export default User