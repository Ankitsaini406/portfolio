import mongoose, { Document, Model, Schema } from "mongoose";

interface ITimeline extends Document{
    name: string;
    jobtitle: string;
    joinDate: string;
    endDate: string;
    work: string;
}

const TimelineSchema: Schema<ITimeline> = new Schema({
    name: {
        type: String,
    },
    jobtitle: {
        type: String,
    },
    joinDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    work: {
        type: String,
    }
});

const Timeline: Model<ITimeline> = mongoose.models.Company || mongoose.model<ITimeline>('Company', TimelineSchema);

export default Timeline;