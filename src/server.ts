import express from "express";
import tokenRoute from "./routes/token"
import justifyRoute from "./routes/justify";

const app = express();

app.use(express.json());
app.use(express.text());
app.use("/api/token", tokenRoute);
app.use("/api/justify", justifyRoute);
app.get("/", (_, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
export default app;