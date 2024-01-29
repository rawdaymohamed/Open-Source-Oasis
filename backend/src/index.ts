import express, { Request, Response } from "express";
const app = express();
app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});

const port = 4000;
app.listen(port, () => {
    console.log("Server listening on port 4000")
})
export default app;