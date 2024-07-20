import mongoose, { Model, Schema } from "mongoose";


type TProject = {
    name: string;
    image: string;
    imageBase64: string;
    discription: string;
}

const ProjectSchema: Schema<TProject> = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    imageBase64: {
        type: String,
    },
    discription: {
        type: String,
    },
});

const ProjectModel: Model<TProject> = mongoose.models.projects || mongoose.model<TProject>("projects", ProjectSchema);

export default ProjectModel;
