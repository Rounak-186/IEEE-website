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
        type: String,
        default: ""
    },
    date: {
        type: String,
        default: ""
    },
    time: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    eventType: {
        type: String,
        default: ""
    },
    navLink: {
        type: String,
        default: ""
    }
}, { timestamps: true });

if (process.env.NODE_ENV === "development" && models.Event) {
    delete models.Event;
}

export const Event = models.Event || model("Event", eventSchema);