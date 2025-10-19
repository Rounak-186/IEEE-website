import { model, models, Schema } from "mongoose";

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    location: {
        type: String
    },
    eventType: {
        type: String
    },
    navLink: {
        type: String
    }
}, { timestamps: true });

if (process.env.NODE_ENV === "development" && models.Event) {
    delete models.Event;
}

export const Event = models.Team || model("Event", eventSchema);