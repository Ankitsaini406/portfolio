import mongoose from "mongoose";

const timelineModel = new mongoose.Schema({
    name: String,
    jobtitle: String,
    joinDate: String,
    endDate: String,
    work: String
});

export const Timelines = mongoose.models.Company || mongoose.model('Company',timelineModel);