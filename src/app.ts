import express, { Express, Request, Response } from "express";
const app: Express = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
