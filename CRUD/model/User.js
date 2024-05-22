import mongoose, {Schema, ObjectId} from "mongoose";

const User = mongoose.model(
    'User',new Schema({
        id: {type: ObjectId},
        name: {type: String},
        address: {type: String},
        phone: {type: String},
    })
)
export default User