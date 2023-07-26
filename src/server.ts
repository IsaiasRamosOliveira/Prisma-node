import express, { Express } from "express";
import { route } from "./routes/routes";

const app = express();
app.use(express.json());
app.use(route);
const port = 3000 || process.env.PORT

app.listen(port, () => {
    console.log(`http://localhost:${port}`);

})