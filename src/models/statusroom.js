import mongoose,{Schema, ObjectId} from "mongoose";



const StatusSchema = Schema({
    checkin:{
        type: String,
    },
    checkout:{
        type: String,
    },
    room:{
        type: ObjectId,
        ref:"Room"
    },
}, {timestamps: true})

export default mongoose.model("Statusroom",StatusSchema)