import mongoose, {Schema} from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        profileImage:{
            type: String,
            required: false,
            default: "https://cdn1.iconfinder.com/data/icons/random-115/24/person-1024.png"
        },
        isAdmin: {
            type: Boolean,
            defaut: false
        },
        
        roles:{
                type: [Schema.Types.ObjectId],
                required: true,
                ref: "Role"
        }
        
    },
    {
        timestamps: true
    }
)

export default mongoose("User", UserSchema);