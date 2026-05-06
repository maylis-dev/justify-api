import express from "express";

const app = express();

app.use(express.json());
app.use(express.text());

app.get("/", (_, res) => {
  res.send("API running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});