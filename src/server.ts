import express, { Express } from "express";

const app = express();
const port = 3000 || process.env.PORT

app.get((req: Express.Request, res: Express.Response) => {
    return res.send("")
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);

})