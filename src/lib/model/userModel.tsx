import mongoose, { Document, Model, Schema } from "mongoose";

type TUserSchema = {
    name: string;
    email: string;
    phonenumber: string;
    password: string;
    re_password: string;
    isAdmin: boolean;
}

const UserSchema: Schema<TUserSchema> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    re_password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
});

const UserModel: Model<TUserSchema> = mongoose.models.users || mongoose.model<TUserSchema>("users", UserSchema);

export default UserModel;