import { getAlumniFeedList } from "@/lib/controllers/team.controller";
import { withDbAndCors } from "@/lib/utils/withDbAndCors";
import { NextRequest } from "next/server";
import { runMiddlewares } from "@/lib/utils/middlewareControll";
import { verifyAuth } from "@/lib/middlewares/auth.middleware";
import { verifyRole } from "@/lib/middlewares/verifyRole.middleware";

export const GET = withDbAndCors(async (req: NextRequest) => {
    const context = await runMiddlewares(req, []);
    return await getAlumniFeedList(req, context);
});