import mongoose from "mongoose";

const timelineModel = new mongoose.Schema({
    name: String,
    jobtitle: String,
    joinDate: String,
    endDate: String,
    work: String
}, {
    bufferCommands: false,
});

const Timelines = mongoose.models.timelines || mongoose.model('timelines', timelineModel);

export default Timelines;