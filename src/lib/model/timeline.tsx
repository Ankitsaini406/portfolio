import mongoose, { Document, Model, Schema } from "mongoose";

type ITimeline = {
    name: string;
    jobtitle: string;
    joinDate: string;
    endDate: string;
    work: string;
    createdAt: Date;
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
    },
});

const TimelineModel: Model<ITimeline> = mongoose.models.timelines || mongoose.model<ITimeline>("timelines", TimelineSchema);

export default TimelineModel;

// const Timelines = mongoose.models.timelines || mongoose.model('timelines', timelineModel);
