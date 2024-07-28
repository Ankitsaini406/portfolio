import mongoose, { Document, Model, Schema } from "mongoose";

type TUserSchema = {
    name: string;
    email: string;
    phonenumber: string;
    password: string;
    re_password: string;
    isAdmin: boolean;
    createdAt?: Date;
    updatedAt?: Date;
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
}, {
    timestamps: true // This adds the `createdAt` and `updatedAt` fields
});

UserSchema.pre('save', function (next) {
    console.log('Document is about to be saved:', this);
    next();
});

const UserModel: Model<TUserSchema> = mongoose.models.users || mongoose.model<TUserSchema>("users", UserSchema);

export default UserModel;