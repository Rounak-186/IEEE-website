import mongoose, { models, Schema } from "mongoose";

const messageSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    isViewed: {
        type: Boolean,
        default: false
    },
    isReplied: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// setting devmode
if (process.env.NODE_ENV === 'development' && models.Message) {
    delete models.Message;
}

export const Message = models.Message || mongoose.model('Message', messageSchema);