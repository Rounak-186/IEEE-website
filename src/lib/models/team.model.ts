import mongoose, { model, models, Schema } from "mongoose";

const teamSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Types.ObjectId
    },
    teamType: {
        type: String,
        enum: ['student', 'faculty', 'alumni'],
        default: "student"
    }
}, { timestamps: true });

const teamMemberSchema = new Schema({
    teamId: {
        type: mongoose.Types.ObjectId,
    },
    name: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    studyYear: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    socialMedia: {
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    }
}, { timestamps: true });

if (process.env.NODE_ENV === "development" && (models.Team || models.TeamMember)) {
    delete models.Team;
    delete models.TeamMember
}

export const Team = models.Team || model("Team", teamSchema);
export const TeamMember = models.TeamMember || model("TeamMember", teamMemberSchema); 