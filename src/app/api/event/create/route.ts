import { createEvent } from "@/lib/controllers/event.controller";
import { withDbAndCors } from "@/lib/utils/withDbAndCors";
import { NextRequest } from "next/server";
import { runMiddlewares } from "@/lib/utils/middlewareControll";
import { verifyAuth } from "@/lib/middlewares/auth.middleware";
import { verifyRole } from "@/lib/middlewares/verifyRole.middleware";

export const POST = withDbAndCors(async (req: NextRequest) => {
    const context = await runMiddlewares(req, [verifyAuth, (r, c) => verifyRole(r, c, ["admin", "member"])]);
    return await createEvent(req, context);
});