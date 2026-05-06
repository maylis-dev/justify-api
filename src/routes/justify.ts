import { Router } from "express";
import { auth } from "../middleware/auth";
import { justify } from "../services/justify";
import { checkAndAddUsage } from "../services/rateLimit";
import { countWords } from "../services/words";

const router = Router();

router.post("/", auth, (req, res) => {
  const text = req.body;
  const token = (req as any).token;

  const words = countWords(text);

  const allowed = checkAndAddUsage(token, words);

  if (!allowed) {
    return res.status(402).send("Payment Required");
  }

  const result = justify(text);

  res.type("text/plain").send(result);
});

export default router;