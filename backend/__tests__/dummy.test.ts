import request from "supertest";
import app from "../src";
describe("Dummy Test", () => {
    test("Dummy", () => {
        expect(true).toBe(true);
    });
    test("GET /", async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toEqual("Hello world")
    })
})