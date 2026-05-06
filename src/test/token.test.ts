import request from "supertest";
import app from "../server";

describe("POST /api/token", () => {
  it("should create a token", async () => {
    const response = await request(app)
      .post("/api/token")
      .send({
        email: "test@test.com",
      });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});