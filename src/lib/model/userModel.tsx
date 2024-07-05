import mongoose, { Document, Model, Schema } from "mongoose";

type TUserSchema = {
    name: string;
    email: string;
    phonenumber: string;
    passowrd: string;
    isAdmin: boolean;
}

const UserSchema: Schema<TUserSchema> = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phonenumber: {
        type: String,
    },
    passowrd: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
    },
});

const UserModel: Model<TUserSchema> = mongoose.models.users || mongoose.model<TUserSchema>("users", UserSchema);

export default UserModel;