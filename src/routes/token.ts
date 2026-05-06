import { Router, Request, Response } from "express";
import crypto from "crypto";

const router = Router();


export const tokens = new Map<string, string>();

router.post("/", (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      error: "Email is required",
    });
  }

  const token = crypto.randomBytes(32).toString("hex");

  tokens.set(token, email);

  return res.json({ token });
});

export default router;