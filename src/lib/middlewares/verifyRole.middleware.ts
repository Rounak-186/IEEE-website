import { NextRequest } from "next/server";
import { MiddlewareContext } from "../../../types/middleware";
import { ApiError } from "../utils/error-handler";

export const verifyRole = async (req: NextRequest, context: MiddlewareContext, allowedRoles: string[]): Promise<MiddlewareContext> => {
    try {
        const { user } = context!;
        const userRole = user?.role;
        if (!allowedRoles.includes(userRole)) {
            throw new ApiError(401, "You are not authorized");
        }
        return { ...context };
    } catch (error) {
        throw new ApiError(402, "Access check failed");
    }
}