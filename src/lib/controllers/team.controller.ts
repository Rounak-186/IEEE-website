import { NextRequest, NextResponse } from "next/server";
import { asyncHandler } from "../utils/asynchandler";
import { MiddlewareContext } from "../../../types/middleware";
import { ApiError } from "../utils/error-handler";
import { Team, TeamMember } from "../models/team.model";
import { ApiResponse } from "../utils/response-handler";
import { deleteFromCloudinary, uploadToCloudinary } from "../utils/coludinary-upload";

// create new team
export const createTeam = asyncHandler(async (req: NextRequest, context: MiddlewareContext | undefined) => {
    const { userId } = context!;
    const { teamName, teamType } = await req.json();
    if (!teamName) throw new ApiError(400, "Team name is required");

    const team = await Team.create({
        title: teamName,
        createdBy: userId,
        teamType: teamType || "college"
    });

    return NextResponse.json(new ApiResponse(200, { teamId: team?._id }, "Team created successfully"));
});

// get team
export const getTeam = asyncHandler(async (req: NextRequest, context: MiddlewareContext | undefined) => {
    const { searchParams } = new URL(req.url);
    const teamId = searchParams.get("id");

    if (!teamId) throw new ApiError(400, "Team id is required");

    const team = await Team.findById(teamId);

    return NextResponse.json(new ApiResponse(200, team, "Team fetched"));
});

// update team
export const updateTeam = asyncHandler(async (req: NextRequest, context: MiddlewareContext | undefined) => {
    const { userId } = context!;
    const { teamId, teamName } = await req.json();
    if (!teamName || !teamId) throw new ApiError(400, "Team name and id is required");

    const team = await Team.findByIdAndUpdate(teamId,
        {
            title: teamName
        }, { new: true });

    return NextResponse.json(new ApiResponse(200, {}, "Team updated successfully"));
});

// delete team
export const deleteTeam = asyncHandler(async (req: NextRequest, context: MiddlewareContext | undefined) => {
    const { searchParams } = new URL(req.url);
    const teamId = searchParams.get("id");

    if (!teamId) throw new ApiError(400, "Team id is required");

    await Team.findByIdAndDelete(teamId);

    return NextResponse.json(new ApiResponse(200, {}, "Team removed"));
});

// add member to team
export const addTeamMember = asyncHandler(async (req: NextRequest, context: MiddlewareContext | undefined) => {
    const { userId, files } = context!;
    const { teamId, name, about, email, studyYear, depertment, role, socialMedia } = await req.json();
    if ([teamId, name, email, studyYear, depertment, role, socialMedia].some(e => e === "")) throw new ApiError(400, "Stared fields are required");

    // upload avatar
    // check avatar is or not
    let avatarPath = "";
    const avatar = files?.avatar
    if (avatar && avatar instanceof File) {
        const buffer = Buffer.from(await avatar.arrayBuffer());
        avatarPath = (await uploadToCloudinary(buffer, avatar.name)).url;
    }

    // create member
    const member = await TeamMember.create({
        teamId,
        name,
        about,
        email,
        avatar: avatarPath || "",
        studyYear,
        depertment,
        role,
        socialMedia
    });

    return NextResponse.json(new ApiResponse(200, {}, "Member added"));
});

// get member
export const getTeamMember = asyncHandler(async (req: NextRequest, context: MiddlewareContext | undefined) => {
    const { searchParams } = new URL(req.url);
    const memberId = searchParams.get("id");

    if (!memberId) throw new ApiError(400, "Team id is required");

    const member = await TeamMember.findById(memberId);

    return NextResponse.json(new ApiResponse(200, member, "Member fetched"));
});

// update member
export const updateTeamMember = asyncHandler(async (req: NextRequest, context: MiddlewareContext | undefined) => {
    const { userId, files } = context!;
    const { memberId, name, about, email, studyYear, depertment, role, socialMedia } = await req.json();
    if ([memberId, name, email, studyYear, depertment, role, socialMedia].some(e => e === "")) throw new ApiError(400, "Stared fields are required");

    // upload avatar
    // check avatar is or not
    let avatarPath = "";
    const avatar = files?.avatar
    if (avatar && avatar instanceof File) {
        const buffer = Buffer.from(await avatar.arrayBuffer());
        avatarPath = (await uploadToCloudinary(buffer, avatar.name)).url;
    }

    // update member
    const member = await TeamMember.findByIdAndUpdate(memberId, {
        name,
        about,
        email,
        studyYear,
        depertment,
        role,
        socialMedia
    }, { new: true });

    // update avatar if exists
    if (avatarPath) {
        // delete the previous one if exist
        if (member?.avatar) {
            deleteFromCloudinary(member.avatar);
        }
        // set new one
        member!.avatar = avatarPath;
        await member!.save({ validateBeforeSave: false });
    }

    return NextResponse.json(new ApiResponse(200, {}, "Member added"));
});

// delete member
export const deleteTeamMember = asyncHandler(async (req: NextRequest, context: MiddlewareContext | undefined) => {
    const { searchParams } = new URL(req.url);
    const memberId = searchParams.get("id");

    if (!memberId) throw new ApiError(400, "Member id is required");

    await TeamMember.findByIdAndDelete(memberId);

    return NextResponse.json(new ApiResponse(200, {}, "Member removed"));
});