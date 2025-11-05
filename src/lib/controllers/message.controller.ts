import { NextRequest, NextResponse } from "next/server";
import { asyncHandler } from "../utils/asynchandler";
import { ApiError } from "../utils/error-handler";
import { Message } from "../models/message.model";
import { ApiResponse } from "../utils/response-handler";

export const createMessage = asyncHandler(async (req: NextRequest) => {
    const { firstName, lastName, email, subject, message } = await req.json();

    if ([firstName, email, subject, message].some(e => e === "")) throw new ApiError(400, "All fields are required");

    await Message.create({
        firstName,
        lastName: lastName || "",
        email,
        subject,
        message
    });

    return NextResponse.json(new ApiResponse(200, {}, "Message send successfully"));
});

// get all messages
export const getAllMessages = asyncHandler(async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const filter = searchParams.get("filter");

    const matchStage: Record<string, any> = {};
    if (filter === "viewed") {
        matchStage.isViewed = true;
    } else if (filter === "not-viewed") {
        matchStage.isViewed = false;
    } else if (filter === "replied") {
        matchStage.isReplied = true;
    }

    const messages = await Message.aggregate([
        { $match: matchStage },
        {
            $sort: {
                isViewed: 1,
                createdAt: -1
            }
        }
    ]);

    return NextResponse.json(new ApiResponse(200, messages, "Messages fetched"));
});

// mark message
export const markMessage = asyncHandler(async (req: NextRequest) => {
    const { messageId, isViewed, isReplied } = await req.json();
    await Message.findByIdAndUpdate(messageId, {
        isViewed,
        isReplied
    }, { new: true });

    return NextResponse.json(new ApiResponse(200, {}, "Messages updated"));
})