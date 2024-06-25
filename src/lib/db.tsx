const {Username, Password, DbName} = process.env;

export const Mongo_URL =`mongodb+srv://${Username}:${Password}@cluster0.szbmops.mongodb.net/${DbName}?retryWrites=true&w=majority&appName=Cluster0`
