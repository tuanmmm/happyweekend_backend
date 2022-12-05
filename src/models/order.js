import mongoose,{Schema,ObjectId} from "mongoose";

const orderSchema = Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    phone:{
        type:Number,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    statusorder:{
        type:String
    },
    total:{
        type:Number
    },
    checkins:{
        type: String,
    },
    checkouts:{
        type: String,
    },
    room:{
        type: ObjectId,
        ref:"Room"
    },
    user:{
        type: ObjectId,
        ref:"Users"
    },
    status:{
        type: ObjectId,
        ref:"DateBooked"
    },
}, {timestamps:true})


export default mongoose.model("Order", orderSchema)