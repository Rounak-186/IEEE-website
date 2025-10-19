import { model, models, Schema } from "mongoose";

const teamSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

const teamMemberSchema = new Schema({
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
    depertment: {
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
export const TeamMember = models.Team || model("TeamMember", teamMemberSchema); 