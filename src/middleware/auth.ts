import { Request, Response, NextFunction } from "express";
import { tokens } from "../routes/token";

export function auth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = header.split(" ")[1];

  if (!tokens.has(token)) {
    return res.status(401).json({ error: "Invalid token" });
  }

  (req as any).token = token;

  next();
}