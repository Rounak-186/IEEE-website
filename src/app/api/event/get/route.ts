import { getEvent } from "@/lib/controllers/event.controller";
import { withDbAndCors } from "@/lib/utils/withDbAndCors";
import { NextRequest } from "next/server";
import { runMiddlewares } from "@/lib/utils/middlewareControll";

export const GET = withDbAndCors(async (req: NextRequest) => {
    const context = await runMiddlewares(req, []);
    return await getEvent(req, context);
});