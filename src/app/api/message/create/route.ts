import { withDbAndCors } from "@/lib/utils/withDbAndCors";
import { NextRequest } from "next/server";
import { runMiddlewares } from "@/lib/utils/middlewareControll";
import { createMessage } from "@/lib/controllers/message.controller";

export const POST = withDbAndCors(async (req: NextRequest) => {
    const context = await runMiddlewares(req, []);
    return await createMessage(req, context);
});