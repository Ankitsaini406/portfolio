import mongoose, { Model, Schema, Document } from "mongoose";

interface TProject extends Document {
    name: string;
    image: string;
    imageBase64: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const ProjectSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    imageBase64: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true // This adds the `createdAt` and `updatedAt` fields
});

ProjectSchema.pre('save', function (next) {
    console.log('Document is about to be saved:', this);
    next();
});

const ProjectModel: Model<TProject> = mongoose.models.Project || mongoose.model<TProject>("Project", ProjectSchema);

export default ProjectModel;
