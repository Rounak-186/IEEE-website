import { updateRole } from "@/lib/controllers/user.controller"
import { verifyAuth } from "@/lib/middlewares/auth.middleware"
import { verifyRole } from "@/lib/middlewares/verifyRole.middleware"
import { runMiddlewares } from "@/lib/utils/middlewareControll"
import { withDbAndCors } from "@/lib/utils/withDbAndCors"
import { NextRequest } from "next/server"

export const POST = withDbAndCors(async (req: NextRequest) => {
    const context = await runMiddlewares(req, [verifyAuth, (r, c) => verifyRole(r, c, ["admin"])])
    return await updateRole(req);
}) 